<script setup>
import MainRecommendPathItem from "./item/MainRecommendPathItem.vue";
</script>

<template>
  <div class="container d-flex flex-column align-items-center">
    <div class="my-5 main-cover d-flex align-items-end">
      <div class="p-5">
        <p class="fs-3 fw-bold text-white">
          소중한 사람들과 함께 여행을 떠나요!
        </p>
        <p class="fw-bold text-white">Priend가 여러분과 함께합니다</p>
        <button type="button" class="btn btn-login my-1">
          여행 계획 세우기
        </button>
      </div>
    </div>
    <div class="my-5">
      <p class="px-3 fs-3 fw-bold">Priends' 여행 계획</p>
      <div class="recommend-path d-flex flex-row justify-content-between">
        <MainRecommendPathItem />
        <MainRecommendPathItem />
        <MainRecommendPathItem />
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-cover {
  width: 1092px;
  height: 500px;
  background-image: url("@/assets/img/field.jpg");
  background-size: cover;
}

.btn-login {
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

.recommend-path {
  width: 1092px;
}
</style>
