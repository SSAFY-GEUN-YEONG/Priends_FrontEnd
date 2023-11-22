<script setup>
import { defineProps, onMounted } from "vue";
import PathDetailItemAttraction from "./PathDetailItemAttraction.vue";
const props = defineProps(["pathDetail", "dayNum", "startDate"]);

console.log(props.pathDetail);
// console.log(props.dayNum);
// console.log(props.startDate);

//여행 당일날짜와 요일 얻기
const calcDate = () => {
  const startDate = new Date(props.startDate);
  startDate.setDate(startDate.getDate() + props.dayNum - 1);
  // 요일 얻기
  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
  const dayOfWeek = daysOfWeek[startDate.getDay()];

  return {
    date: startDate.toISOString().split("T")[0],
    dayOfWeek: dayOfWeek,
  };
};
const nowDate = calcDate();
</script>

<template>
  <div class="path-detail-item">
    <div class="path-detail-title">
      <h4>DAY{{ dayNum }}</h4>
      <div class="path-detail-date-city">
        <p>{{ nowDate.date }}({{ nowDate.dayOfWeek }})</p>
        <p>서울</p>
      </div>
    </div>
    <PathDetailItemAttraction
      v-for="item in pathDetail"
      :key="item.orders"
      :pathDetailInfo="item"
    ></PathDetailItemAttraction>
  </div>
</template>

<style scoped>
.path-detail-item {
  margin-bottom: 20px;
}
.path-detail-title {
  display: flex;
  align-items: center;
  border: 1px solid black;
}

.path-detail-title h4 {
  padding: 10px;
  margin: 0 15px;
}

.path-detail-date-city {
  border-left: 1px solid black;
  font-size: 15px;
  padding-left: 10px;
  padding-top: 10px;
}
</style>
