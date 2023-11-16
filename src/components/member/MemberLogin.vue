<script setup>
import { useMenuStore } from "@/stores/menu";
const { changeMenuState } = useMenuStore();

const login = () => {
  console.log("login successful !!!");
  changeMenuState();
};
</script>

<template>
  <div
    class="container p-4 border border-secondary-subtle d-flex flex-column align-items-center"
  >
    <h3 class="my-4">로그인</h3>

    <div class="d-flex flex-column">
      <p class="me-auto mb-0">이메일</p>
      <div class="form-floating mb-3" style="width: 400px">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">Email address</label>
      </div>
    </div>

    <div class="d-flex flex-column">
      <p class="me-auto mb-0">비밀번호</p>
      <div class="form-floating mb-3">
        <input
          style="width: 400px"
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label for="floatingPassword">Password</label>
      </div>
    </div>
    <button type="button" class="btn btn-find-pw btn-light mt-4 mb-2">
      비밀번호 찾기
    </button>
    <button type="button" class="btn btn-login my-1" @click="login">
      이메일로 로그인
    </button>
    <!--회원가입 연결 버튼-->
    <div class="my-4 d-flex flex-column align-items-center">
      <p class="mt-5">아직 회원이 아니신가요?</p>
      <div class="d-grid gap-2 mt-2 d-md-flex justify-content-md-end">
        <img
          src="@/assets/img/building.jpg"
          class="rounded-circle d-block mt-1"
          style="width: 30px; height: 30px"
        />
        <button class="btn py-1 px-0 me-1 btn-sign-up" type="button">
          네이버 회원가입
        </button>
        <img
          src="@/assets/img/building.jpg"
          class="rounded-circle d-block mt-1"
          style="width: 30px; height: 30px"
        />
        <button class="btn py-1 px-0 me-1 btn-sign-up" type="button">
          카카오톡 회원가입
        </button>
        <img
          src="@/assets/img/building.jpg"
          class="rounded-circle d-block mt-1"
          style="width: 30px; height: 30px"
        />
        <router-link :to="{ name: 'member-signup' }">
          <button class="btn py-1 px-0 me-1 btn-sign-up" type="button">
            이메일 회원가입
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: fit-content;
}
.btn-find-pw {
  width: 400px;
}

.btn-login {
  width: 400px;
  --bs-btn-color: var(--bs-white);
  --bs-btn-bg: #dac3e8;
  --bs-btn-border-color: #dac3e8;

  --bs-btn-hover-color: var(--bs-white);
  --bs-btn-hover-bg: #c19ee0;
  --bs-btn-hover-border-color: #c19ee0;

  --bs-btn-focus-shadow-rgb: #a06cd5;
  --bs-btn-active-color: var(--bs-white);
  --bs-btn-active-bg: #a06cd5;
  --bs-btn-active-border-color: #a06cd5;
}

.btn-sign-up {
  --bs-btn-active-border-color: var(--bs-white);
}
</style>
