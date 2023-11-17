<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUser, faHeart, faEye } from "@fortawesome/free-regular-svg-icons";
</script>

<template>
  <div class="d-flex flex-column border">
    <img class="path-list-img" src="@/assets/img/building.jpg" />
    <div class="p-2">
      <h5>가족들과 함께하는 즐거운 시간</h5>

      <p>2023.11.11 - 2023.11.15 | 5 Days</p>
      <p>부산, 김해</p>

      <div class="icon-text">
        <font-awesome-icon icon="fa-regular fa-user" style="height: 15px" />
        <div>ssafy@ssafy.com</div>
        <div class="heart-icon">
          <font-awesome-icon :icon="['far', 'heart']" style="height: 15px" />
          <div>234</div>
          <font-awesome-icon :icon="['far', 'eye']" style="height: 15px" />
          <div>898</div>
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
