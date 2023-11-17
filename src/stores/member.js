import { ref } from "vue";
import { defineStore } from "pinia";
import { useMenuStore } from "@/stores/menu";
import { useCookies } from "vue3-cookies";

import { memberLoginApi, memberLogoutApi, memberGetApi } from "@/api/memberApi";

export const useMemberStore = defineStore("memberStore", () => {
  const isLogin = ref(false);
  const { cookies } = useCookies(); // 쿠키를 사용하기 위해 가져오기
  const accessToken = ref(null); // accessToken을 저장할 ref
  // 내정보를 저장할 ref 추가
  const memberInfo = ref(null);

  const memberLogin = async (loginMember) => {
    await memberLoginApi(
      loginMember,
      (response) => {
        // 서버에서 성공적인 응답을 받았을 때
        if (response.data.dataHeader.successCode === 0) {
          // 로그인 성공 처리
          isLogin.value = true; // 로그인 상태 업데이트
          accessToken.value = response.data.dataBody.token.accessToken;

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
          // 로그아웃 처리
          isLogin.value = false;
          accessToken.value = null; // accessToken 제거
        }
        // 서버에서 실패 응답 받았을 경우 (즉, redis에 저장된 refresh 토큰 만료돼서 삭제 된 경우인데 이럴 일 사실상 거의 없음)
        else {
          // 로그아웃 처리
          isLogin.value = false;
          accessToken.value = null; // accessToken 제거
        }
      },
      (error) => {
        // 실패 콜백
        console.log("Logout failed: ", error);

        // 실패시에도 로그아웃 처리
        // 로그아웃 처리
        isLogin.value = false;
        accessToken.value = null; // accessToken 제거
      }
    );
    // 여기에 필요한 로그아웃 로직 추가 (API 호출 및 라우터 변경 해주면 된다)
  };

  const memberGet = async () => {
    await memberGetApi(
      (response) => {
        memberInfo.value = response.data.dataBody;
      },
      (error) => {
        // 오류가 발생한 경우
        console.error("Failed to fetch member info: ", error);
      }
    );
  };

  // 로그인 상태 확인 메서드
  const memberCheckLoginStatus = () => {
    // 쿠키에서 accessToken 확인
    const accessTokenFromCookie = cookies.get("accessToken");
    if (accessTokenFromCookie) {
      isLogin.value = true;
      accessToken.value = accessTokenFromCookie;
    } else {
      isLogin.value = false;
    }

    // 메뉴 상태 초기화를 위한 메서드 호출 이용
    const menuStore = useMenuStore();
    menuStore.initializeMenuState(isLogin.value);
  };

  return {
    isLogin,
    accessToken,
    memberInfo,
    memberLogin,
    memberLogout,
    memberGet,
    memberCheckLoginStatus,
  };
});
