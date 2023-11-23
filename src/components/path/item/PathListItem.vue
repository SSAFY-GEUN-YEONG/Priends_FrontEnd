<script setup>
import { ref, defineProps, onMounted } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
const props = defineProps(["pathInfo"]);

const period = ref(0);
onMounted(() => {
  console.log("path list item ", props.pathInfo);
  period.value = calcDate();
});

const calcDate = () => {
  // 문자열을 Date 객체로 변환
  const date1 = new Date(props.pathInfo.startDate);
  const date2 = new Date(props.pathInfo.endDate);

  // 두 날짜 간의 차이를 밀리초로 얻고 일로 변환
  const dayDifference = Math.abs(date2 - date1) / (1000 * 60 * 60 * 24) + 1;
  console.log("day :::", dayDifference);
  return dayDifference;
};
</script>

<template>
  <div class="d-flex flex-column border">
    <div class="py-2 px-5 d-flex align-items-center justify-content-between">
      <div class="">
        <div>
          <p class="fs-4 mb-1">{{ pathInfo.title }}</p>
        </div>

        <div class="d-flex flex-row" style="width: 150px">
          <div class="d-flex align-items-center" style="width: 50%">
            <font-awesome-icon icon="fa-regular fa-user" style="height: 15px" />
            <div class="ps-2">{{ pathInfo.memberNickname }}</div>
          </div>
          <div class="d-flex align-items-center" style="width: 50%">
            <font-awesome-icon :icon="['far', 'eye']" style="height: 15px" />
            <div class="ps-2">{{ pathInfo.hit }}</div>
          </div>
        </div>
      </div>
      <div class="p-0 m-0 d-flex flex-column" style="height: 100%">
        <p class="m-0 mb-1">
          {{ pathInfo.startDate }} - {{ pathInfo.endDate }}
        </p>
        <p class="m-0 text-end">{{ period }} Days</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
