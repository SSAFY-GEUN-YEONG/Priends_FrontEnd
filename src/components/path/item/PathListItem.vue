<script setup>
import { defineProps } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
const props = defineProps(["pathInfo"]);

console.log("path list item ", props.pathInfo);
</script>

<template>
  <div class="d-flex flex-column border">
    <img class="path-list-img" src="@/assets/img/building.jpg" />
    <div class="p-2">
      <h5>{{ pathInfo.title }}</h5>

      <p>{{ pathInfo.startDate }} - {{ pathInfo.endDate }}| 5 Days</p>

      <div class="icon-text">
        <font-awesome-icon icon="fa-regular fa-user" style="height: 15px" />
        <div>ssafy@ssafy.com</div>
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
