<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUser, faHeart, faEye } from "@fortawesome/free-regular-svg-icons";
</script>

<template>
  <div class="path-list-item">
    <img class="path-list-img" src="@/assets/img/building.jpg" />
    <div class="content">
      <h5>어쩌구 야경</h5>

      <div class="icon-text">
        <font-awesome-icon :icon="['far', 'eye']" style="height: 15px" />
        <div>898</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.path-list-item {
  display: inline-block;
  flex-direction: column;
  width: 260px;
  height: 260px;
  border: 1px solid #696969;
  margin: 30px;
}

.path-list-img {
  width: 260px;
  height: 182px;
}

.content {
  padding: 5px;
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
