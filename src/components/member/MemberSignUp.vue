<script setup>
import { ref } from "vue";
</script>

<template>
  <div
    class="container p-4 border border-secondary-subtle d-flex flex-column align-items-center"
  >
    <h3 class="my-4">회원가입</h3>
    <p class="ms-2 me-auto mb-0">이메일 *</p>
    <div class="form-floating mb-3" style="width: 400px">
      <input
        type="email"
        class="form-control"
        id="floatingInput"
        placeholder="name@example.com"
      />
      <label for="floatingInput">Email address</label>
    </div>
    <p class="ms-2 me-auto mb-0">비밀번호 *</p>
    <div class="form-floating mb-3">
      <input
        style="width: 400px"
        type="password"
        class="form-control"
        id="floatingPassword"
        placeholder="Password"
      />
      <label for="floatingPassword mb-3">비밀번호 </label>
    </div>
    <p class="ms-2 me-auto mb-0">비밀번호 확인 *</p>
    <div class="form-floating mb-3">
      <input
        style="width: 400px"
        type="password"
        class="form-control"
        id="floatingPasswordCheck"
        placeholder="Password"
      />
      <label for="floatingPasswordCheck">비밀번호 확인</label>
    </div>
    <p class="ms-2 me-auto mb-0">닉네임 *</p>
    <div class="form-floating">
      <input
        style="width: 400px"
        type="password"
        class="form-control"
        id="floatingPassword"
        placeholder="Password"
      />
      <label for="floatingPassword">닉네임</label>
    </div>

    <div class="py-4" style="width: 400px">
      <div class="form-check d-flex align-items-start">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label
          style="font-size: 12px"
          class="text-start form-check-label text-body-secondary ps-2"
          for="flexCheckDefault"
        >
          <strong>전체 약관 동의</strong>
          <p
            class="text-body-secondary px-0 text-start"
            style="font-size: 12px; width: 380px"
          >
            선택 정보에 대한 동의를 포함합니다. 전체 동의하기 선택 후 선택
            정보에 대한 동의를 변경하실 수 있습니다.
          </p>
        </label>
      </div>
      <div
        class="border p-2 my-2 text-body-secondary"
        style="font-size: 12px; width: 400px"
      >
        <div
          class="form-check my-1 d-flex justify-content-start align-items-center"
        >
          <div>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              [필수] 만 14세 이상입니다.
            </label>
          </div>
        </div>

        <div
          class="form-check my-1 d-flex justify-content-between align-items-center"
        >
          <div>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              [필수] 회원가입 및 운영약관 동의
            </label>
          </div>
          <button type="button" class="btn btn-sm p-0 m-0">
            <i class="bi bi-chevron-right"></i>
          </button>
        </div>

        <div
          class="form-check my-1 d-flex justify-content-between align-items-center"
        >
          <div>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              [필수] 개인정보 수집 및 이용 동의
            </label>
          </div>
          <button type="button" class="btn btn-sm p-0 m-0">
            <i class="bi bi-chevron-right"></i>
          </button>
        </div>

        <div
          class="form-check my-1 d-flex justify-content-between align-items-center"
        >
          <div>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              [필수] 위치 정보 이용약관 동의
            </label>
          </div>
          <button type="button" class="btn btn-sm p-0 m-0">
            <i class="bi bi-chevron-right"></i>
          </button>
        </div>

        <div
          class="form-check my-1 d-flex justify-content-between align-items-center"
        >
          <div>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              [선택] 동행 알림 서비스 수신 동의
            </label>
          </div>
          <button type="button" class="btn btn-sm p-0 m-0">
            <i class="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
    <button type="button" class="btn btn-signup my-1">회원가입</button>
  </div>
</template>

<style scoped>
.container {
  width: fit-content;
}

.btn-signup {
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
</style>
