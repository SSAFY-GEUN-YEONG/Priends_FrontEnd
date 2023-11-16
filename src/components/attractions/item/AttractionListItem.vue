<script setup></script>

<template>
  <div class="d-flex align-items-center border">
    <div class="flex-shrink-0">
      <img
        class="object-fit-fill ps-2"
        src="@/assets/img/field.jpg"
        style="height: 150px" />
    </div>
    <div class="flex-grow-1 m-3">
      <h5>지앤지 모텔</h5>
      <div>
        <i class="bi bi-geo-alt"></i>
        대한민국 부산광역시 사하구 감천2동 10-58
      </div>
      <p class="bg-body-secondary p-2 m-1">
        부산의 최고 위치에 있는 지앤지 모텔에서 도시의 모든 것을 맛볼 수
        있습니다. 호텔에서 투숙객들이 쾌적한 환경을 누릴 수 있도록 다양한...
      </p>
      <div class="float-end pt-1">
        <button class="btn btn-outline-info">자세히 보기</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn-outline-info {
  --bs-btn-color: #a06cd5;
  --bs-btn-bg: var(--bs-white);
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
