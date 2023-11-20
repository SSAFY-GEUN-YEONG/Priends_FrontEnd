<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import VueDatepicker from "vue3-datepicker";
import { compareAsc, parse } from "date-fns"; // date-fns를 사용하여 날짜 비교

const dateFormat = "yyyy-MM-dd"; // 선택한 날짜의 형식
const datePickerLanguage = "kr"; // 로케일 설정 (한국어)

const router = useRouter();
const path = ref({
  title: "",
  start_date: null,
  end_date: null,
});

const moveStep2 = () => {
  console.log(path.value);
  if (!path.value.title) {
    alert("여행 이름을 입력해주세요.");
    return;
  }
  compareDates(path.value.start_date, path.value.end_date);
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
        params: { path: path },
      });
    }
  } else {
    alert("날짜를 입력해주세요");
  }
};
</script>

<template>
  <div
    class="container p-4 border border-secondary-subtle d-flex flex-column align-items-center"
  >
    <h3 class="my-4">여행 계획 세우기</h3>

    <div class="d-flex flex-column">
      <p class="me-auto mb-0">여행 이름</p>
      <div class="form-floating mb-3" style="width: 400px">
        <input v-model="path.title" type="text" class="form-control" />
        <label for="floatingInput">여행 이름</label>
      </div>
    </div>

    <div class="d-flex flex-column">
      <p class="me-auto mb-0">시작 날짜</p>

      <div class="form-floating mb-3" style="width: 400px">
        <vue-datepicker
          class="form-control"
          id="datepicker_start"
          v-model="path.start_date"
          :language="datePickerLanguage"
        ></vue-datepicker>
      </div>
    </div>

    <div class="d-flex flex-column mb-5">
      <p class="me-auto mb-0">종료 날짜</p>
      <div class="form-floating mb-3" style="width: 400px">
        <vue-datepicker
          class="form-control"
          id="datepicker_end"
          v-model="path.end_date"
          :language="datePickerLanguage"
        ></vue-datepicker>
      </div>
    </div>

    <button type="button" class="btn btn-make my-2 py-2" @click="moveStep2">
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
