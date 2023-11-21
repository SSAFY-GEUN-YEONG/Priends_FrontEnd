<script setup>
import { useRouter } from "vue-router";
import VueDatepicker from "vue3-datepicker";

import { usePathStore } from "@/stores/pathStore";
import { storeToRefs } from "pinia";

const pathStore = usePathStore();
const { pathInfo } = storeToRefs(pathStore);

const datePickerLanguage = "kr"; // 로케일 설정 (한국어)

const router = useRouter();

// const pathInfo = ref({
//   title: "",
//   content: "",
//   startDate: "",
//   endDate: "",
//   id: "",
// });

const moveStep2 = () => {
  console.log(pathInfo.value);
  if (!pathInfo.value.title) {
    alert("여행 이름을 입력해주세요.");
    return;
  }
  compareDates(pathInfo.value.startDate, pathInfo.value.endDate);
};

// 시작 날짜와 종료 날짜를 비교하는 함수
const compareDates = (startDate, endDate) => {
  console.log("startDate:", startDate);
  console.log("endDate:", endDate);
  if (startDate && endDate) {
    // 직접 Date 객체를 사용하여 비교
    if (startDate > endDate) {
      alert("시작 날짜는 종료 날짜보다 이전이어야 합니다.");
    } else {
      console.log("날짜 통과");

      router.push({
        name: "make-step2",
      });
    }
  } else {
    alert("날짜를 입력해주세요");
  }
};
</script>

<template>
  <div
    class="container p-4 mb-5 border border-secondary-subtle d-flex flex-column align-items-center">
    <h3 class="my-4">여행 계획 세우기</h3>

    <div class="d-flex flex-column">
      <p class="me-auto mb-0">여행 이름</p>
      <div class="form-floating mb-3" style="width: 400px">
        <input v-model="pathInfo.title" type="text" class="form-control" />
        <label for="floatingInput">여행 이름</label>
      </div>
    </div>

    <div class="d-flex flex-column">
      <p class="me-auto mb-0">시작 날짜</p>

      <div class="form-floating mb-3" style="width: 400px">
        <vue-datepicker
          class="form-control"
          id="datepicker_start"
          v-model="pathInfo.startDate"
          :language="datePickerLanguage"></vue-datepicker>
      </div>
    </div>

    <div class="d-flex flex-column mb-5">
      <p class="me-auto mb-0">종료 날짜</p>
      <div class="form-floating mb-3" style="width: 400px">
        <vue-datepicker
          class="form-control"
          id="datepicker_end"
          v-model="pathInfo.endDate"
          :language="datePickerLanguage"></vue-datepicker>
      </div>
    </div>

    <button
      type="button"
      class="btn btn-make mt-2 mb-5 pt-2 pb-2"
      @click="moveStep2">
      계획 세우기
    </button>
  </div>
</template>

<style scoped>
.btn-make {
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
