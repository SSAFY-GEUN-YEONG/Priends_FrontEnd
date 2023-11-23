<script setup>
import { ref, onBeforeMount } from 'vue';
import { useMemberStore } from "@/stores/memberStore";
import { storeToRefs } from 'pinia';
import * as bootstrap from 'bootstrap';
import { memberInfoUpdateApi } from '@/api/memberApi';
import { uploadApi } from '@/api/fileApi';

const memberStore = useMemberStore();
const { memberGet, memberPasswordUpdate } = memberStore;
const { memberInfo } = storeToRefs(memberStore);

// 비밀번호 데이터
const nowPassword = ref('');
const changePassword = ref('');
const confirmChangePassword = ref('');
const passwordModal = ref(null);

// 비밀번호 변경 함수
const updatePassword = async () => {
  if (!nowPassword.value || !changePassword.value || !confirmChangePassword.value) {
    alert("비밀번호들을 입력해주세요.");
    return;
  }

  if (changePassword.value !== confirmChangePassword.value) {
    alert("변경하려는 비밀번호와 비밀번호 확인이 일치하지 않습니다.");
    return;
  }

  try {
    const result = await memberPasswordUpdate({
      nowPassword: nowPassword.value,
      changePassword: changePassword.value
    });

    alert(result.message);
    if (result.success && passwordModal.value) {
      const model = bootstrap.Modal.getInstance(passwordModal.value);
      model.hide();
    }
  } catch (error) {
    console.log("서버 작동 중지");
  }
}


// 이미지 프리뷰 함수
const previewImage = async (event) => {
  const fileInput = event.target;
  const file = fileInput.files[0];
  if (file) {
    // 파일 형식 확인
    if (!file.type.includes("jpeg") && !file.type.includes("png")) {
      alert("JPG 또는 PNG 이미지만 업로드 가능합니다.");
      fileInput.value = ''; // 입력 필드를 비웁니다.
      return; // 지원하지 않는 형식이면 여기서 중단
    }
    // 이미지 프리뷰를 표시
    const reader = new FileReader();
    reader.onload = () => {
      memberInfo.value.image = reader.result; // 이미지 파일을 미리 보여줌
    };
    reader.readAsDataURL(file);
  }
};

const fetchMemberInfoUpdate = async () => {
  try {
    const fileInput = document.getElementById('profileImage');
    const file = fileInput.files[0]; // 파일 객체 직접 참조

    if (file) {
      const formData = new FormData();
      formData.append('file', file); // 이미지 데이터를 FormData에 추가
      formData.append('nameFile', file.name);

      const response = await uploadApi(formData);
      if (response.data.dataHeader.successCode === 0) {
        console.log("이미지가 이미지 서버에 업로드 되었습니다.");
        memberInfo.value.image = response.data.dataBody;
        console.log(memberInfo.value.image);

        const updateData = {
          nickname: memberInfo.value.nickname,
          alarm: memberInfo.value.alarm,
          image: memberInfo.value.image
        };

        try {
          const response = await memberInfoUpdateApi(updateData);
          // 업데이트 성공한 경우
          if (response.data.dataHeader.successCode === 0) {
            // 모달을 표시하고 확인 버튼을 클릭하면 메인 화면으로 리다이렉션
            const updateModal = new bootstrap.Modal(document.getElementById('updateModal'));
            updateModal.show();
            // 확인 버튼 이벤트 리스너
            document.getElementById('updateModalConfirmButton').addEventListener('click', () => {
              updateModal.hide();
              window.location.href = '/'; // 메인 화면으로 이동
            });

          }
          else {
            console.error("회원 정보 수정 실패: ", response.data.dataHeader.resultMessage);
          }
        }
        catch (error) {
          console.log("회원 수정 실패: ", error);
        }
      }
      else {
        console.error("이미지 업로드 실패: ", response.data.dataHeader.resultMessage);
      }
    }
    else {
      alert("프로필 사진에 쓰일 파일이 선택되지 않았습니다. 선택해주세요.");
    }





  }
  catch (error) {
    console.log("회원 수정 실패: ", error);
  }


};

onBeforeMount(async () => {
  await memberGet();
  console.log(memberInfo.value);
});
</script>

<template>

    <div class="container mt-3" v-if="memberInfo">
      <!-- 회원 정보 수정 폼 -->
      <div class="row justify-content-center">
        <!-- 프로필 사진 및 개인 정보 -->
        <div class="col-md-6">
          <div class="mb-3">
            <!-- 이미지 프리뷰 -->
            <div class="mb-3">
              <img :src="memberInfo.image" alt="프로필 사진" class="img-thumbnail">
            </div>
            <label for="profileImage" class="form-label">프로필 사진</label>
            <input type="file" class="form-control" id="profileImage" @change="previewImage">
          </div>
          <div class="mb-3">
            <label for="userEmail" class="form-label">이메일</label>
            <input type="email" class="form-control" id="userEmail" v-model="memberInfo.email" readonly>
          </div>
          <div class="mb-3">
            <label for="userNickname" class="form-label">닉네임</label>
            <input type="text" class="form-control" id="userNickname" v-model="memberInfo.nickname">
          </div>
          <div class="mb-3">
            <label for="userAlarm" class="form-label">동행 알람 수신 정보</label>
            <input type="checkbox" class="form-check-input" id="userAlarm" v-model="memberInfo.alarm">
          </div>

          <!-- 비밀번호 변경 -->
        <!-- 비밀번호 변경 모달 트리거 버튼 -->
        <div class="d-flex justify-content-center mt-3">
          <button ref="passwordModalRef" type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#passwordModal">
              비밀번호 변경
            </button>
        </div>
        </div>

        

        <!-- 비밀번호 변경 모달 -->
        <div class="modal fade" id="passwordModal" ref="passwordModal" tabindex="-1" aria-labelledby="passwordModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="passwordModalLabel">비밀번호 변경</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="mb-3">
                  <label for="nowPassword" class="form-label">현재 비밀번호</label>
                  <input type="password" class="form-control" id="nowPassword" v-model="nowPassword">
                </div>
                <div class="mb-3">
                  <label for="changePassword" class="form-label">변경 비밀번호</label>
                  <input type="password" class="form-control" id="changePassword" v-model="changePassword">
                </div>
                <div class="mb-3">
                  <label for="cofirmChangePassword" class="form-label">변경 비밀번호 확인</label>
                  <input type="password" class="form-control" id="cofirmChangePassword" v-model="confirmChangePassword">
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
                <button type="button" class="btn btn-primary" @click="updatePassword">저장</button>
              </div>
            </div>
          </div>
        </div>

        <!-- 회원 정보 업데이트 성공 모달 -->
        <div class="modal" id="updateModal" tabindex="-1" aria-labelledby="updateModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="updateModalLabel">회원 정보 업데이트</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                회원 정보가 업데이트 되었습니다.
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" id="updateModalConfirmButton">확인</button>
              </div>
            </div>
          </div>
        </div>


        <!-- 정보 수정 버튼 -->
        <div class="d-flex justify-content-center mt-3">
          <button type="submit" class="btn btn-primary" style="width: 200px;" @click="fetchMemberInfoUpdate">정보 수정</button>
        </div>
      </div>
    </div>
</template>

<style scoped></style>
