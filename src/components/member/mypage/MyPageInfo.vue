<script setup>
import { ref, onMounted } from 'vue';
import { useMemberStore } from "@/stores/memberStore";
import { storeToRefs } from 'pinia';

const memberStore = useMemberStore();
const { memberPasswordUpdate } = memberStore;
const { memberInfo } = storeToRefs(memberStore);

// 비밀번호 데이터
const nowPassword = ref('');
const changePassword = ref('');
const confirmChangePassword = ref('');
const passwordModalButton = ref(null);

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
    const response = await memberPasswordUpdate({
      nowPassword: nowPassword.value,
      changePassword: changePassword.value
    });

    if (response.data.dataHeader.successCode === 0) {
      alert("비밀번호가 변경되었습니다.");
    } else {
      alert(response.data.dataHeader.resultMessage); // 실패한 경우 서버에서 받은 메시지를 표시
    }
  } catch (error) {
    console.log("서버 작동 중지");
  }
  closePasswordModal();
}

// 비밀번호 변경 후 모달을 닫는 함수
// 비밀번호 변경 후 모달을 닫는 함수
const closePasswordModal = () => {
  if (passwordModalButton.value) {
    const modal = bootstrap.Modal.getInstance(passwordModalButton.value);
    if (modal) {
      modal.hide();
    }
  }
};


// 이미지 프리뷰 함수
const previewImage = event => {
  const file = event.target.files[0];
  memberInfo.image = URL.createObjectURL(file);
};

onMounted(() => {
  memberStore.memberGet();
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

          <!-- 비밀번호 변경 -->
        <!-- 비밀번호 변경 모달 트리거 버튼 -->
        <div class="d-flex justify-content-center mt-3">
          <button ref="passwordModalRef" type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#passwordModal">
              비밀번호 변경
            </button>
        </div>
        </div>

        

        <!-- 비밀번호 변경 모달 -->
        <div class="modal fade" id="passwordModal" tabindex="-1" aria-labelledby="passwordModalLabel" aria-hidden="true">
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


        <!-- 정보 수정 버튼 -->
        <div class="d-flex justify-content-center mt-3">
          <button type="submit" class="btn btn-primary" style="width: 200px;">정보 수정</button>
        </div>
      </div>
    </div>
</template>

<style scoped></style>
