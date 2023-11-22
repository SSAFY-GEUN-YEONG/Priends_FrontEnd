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
    <img class="path-list-img" src="@/assets/img/building.jpg" />
    <div class="p-2">
      <h5>{{ pathInfo.title }}</h5>

      <p>
        {{ pathInfo.startDate }} - {{ pathInfo.endDate }} | {{ period }} Days
      </p>

      <div class="icon-text">
        <font-awesome-icon icon="fa-regular fa-user" style="height: 15px" />
        <div>{{ pathInfo.memberNickname }}</div>
        <div class="heart-icon">
          <font-awesome-icon :icon="['far', 'eye']" style="height: 15px" />
          <div>{{ pathInfo.hit }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.path-list-img {
  width: 340px;
  height: 255px;
}

.icon-text {
  flex-direction: row;
  display: flex;
  align-items: center;
}

.icon-text > *,
.heart-icon > * {
  margin-left: 5px;
}
.heart-icon {
  flex-direction: row;
  display: flex;
  align-items: center;
  margin-left: auto; /* 아이콘을 오른쪽 끝으로 이동시킵니다. */
}
</style>
