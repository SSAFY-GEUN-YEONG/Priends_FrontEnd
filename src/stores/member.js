import { ref } from "vue";
import { useRouter } from "vue-router";
import { defineStore } from "pinia";
import { useMenuStore } from "@/stores/menu";

import { memberLoginApi, memberLogoutApi } from "@/api/memberApi";
import { httpStatusCode } from "@/util/http-status";

export const useMemberStore = defineStore("memberStore", () => {
  const isLogin = ref(false);
  const memberInfo = ref(null); // 사용자 정보를 저장할 ref

  // // 초기화 함수
  // const initializeLoginStatus = () => {
  //   const accessToken = sessionStorage.getItem("accessToken");
  //   if (accessToken) {
  //     isLogin.value = true;
  //     // 필요한 경우, accessToken을 사용하여 추가 사용자 정보를 로드할 수 있음
  //   }
  // };

  const memberLogin = async (loginMember) => {
    await memberLoginApi(
      loginMember,
      (response) => {
        // 서버에서 성공적인 응답을 받았을 때
        if (response.data.dataHeader.successCode === 0) {
          // 로그인 성공 처리
          memberInfo.value = response.data.dataBody.memberInfo; // 스토어에 사용자 정보 저장
          isLogin.value = true; // 로그인 상태 업데이트

          // 서버로부터 받은 accessToken을 세션 스토리지에 저장
          const accessToken = response.data.dataBody.token.accessToken;
          sessionStorage.setItem("accessToken", accessToken); // 세션스토리지에 Access 토큰 저장

          const menuStore = useMenuStore(); // 메뉴 스토어 인스턴스 가져오기
          menuStore.changeMenuState(); // 메뉴 상태 변경
          console.log(response.data.dataBody);
          console.log(response.data);
        } else {
          // 로그인 실패 처리
          isLogin.value = false;
          console.log(response.data.dataHeader);
          console.log(response.data.dataHeader.resultMessage);
        }
      },
      (error) => {
        console.error("Login failed: ", error);
        isLogin.value = false;
      }
    );
  };

  const memberLogout = async () => {
    memberLogoutApi(
      (response) => {
        // 서버에서 성공적인 응답을 받았을 때
        if (response.data.dataHeader.successCode === 0) {
          // 세션 스토리지에서 accessToken 제거
          sessionStorage.removeItem("accessToken");
          // 로그아웃 후 추가 처리 (예: 라우터 변경, 메뉴 상태 변경 등)
        }
        // 서버에서 실패 응답 받았을 경우 (즉, redis에 저장된 refresh 토큰 만료돼서 삭제 된 경우인데 이럴 일 사실상 거의 없음)
        else {
          // 세션 스토리지에서 accessToken 제거
          sessionStorage.removeItem("accessToken");
        }
      },
      (error) => {
        // 실패 콜백
        console.log("Logout failed: ", error);

        // 실패시에도 세션 스토리지에서 accessToken 제거
        sessionStorage.removeItem("accessToken");
      }
    );
    // 로그아웃 처리
    memberInfo.value = null;
    isLogin.value = false;
    // 여기에 필요한 로그아웃 로직 추가 (API 호출 및 라우터 변경 해주면 된다)
  };

  return {
    isLogin,
    memberLogin,
    memberLogout,
    // initializeLoginStatus, // 초기화 함수 내보내기
  };
});
