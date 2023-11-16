<script setup>
import PathDetailItem from "./item/PathDetailItem.vue";
//아이콘
import { PhLightNumberCircleOne } from "@kalimahapps/vue-icons";
import { PhLightNumberCircleTwo } from "@kalimahapps/vue-icons";
import { PhLightNumberCircleThree } from "@kalimahapps/vue-icons";
import { PhLightNumberCircleFour } from "@kalimahapps/vue-icons";
import { PhLightNumberCircleFive } from "@kalimahapps/vue-icons";
import { PhLightNumberCircleSix } from "@kalimahapps/vue-icons";
import { PhLightNumberCircleSeven } from "@kalimahapps/vue-icons";
import { PhLightNumberCircleEight } from "@kalimahapps/vue-icons";
import { PhLightNumberCircleNine } from "@kalimahapps/vue-icons";
</script>

<template>
  <div class="container">
    <div class="content justify-content-center">
      <div class="main-img">
        <div class="text-container">
          <h3>서울 완전 정복(2일)</h3>
          <p>2023.11.11 ~ 2023.11.12 (2일)</p>

          <div class="icon-text">
            <font-awesome-icon :icon="['fas', 'location-pin']" />
            <div>234</div>
            <font-awesome-icon :icon="['far', 'eye']" />
            <div>234</div>
          </div>
        </div>
      </div>

      <div class="detail-nav">
        <p>개요</p>
        <p>일정표</p>
        <p>지도</p>
      </div>

      <div class="plan-content">
        <!-- 여행 계획 일정 부분-->
        <div class="path-detail">
          <PathDetailItem />
          <PathDetailItem />
        </div>
        <!-- 여행 계획 지도 부분-->
        <div class="path-map-content">
          <div class="path-map">map</div>
          <div class="path-map-detail">
            <PhLightNumberCircleOne />
            <p>경복궁</p>
            <PhLightNumberCircleTwo />ㅇㄴㄹ <PhLightNumberCircleThree />ㅇㄴㄹ
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  background-color: transparent;
  display: block;
  flex-direction: row;
  justify-content: center;

  width: 1092px;
}

.main-img {
  position: relative;
  width: 1092px;
  height: 350px;
  background-image: url(@/assets/img/building.jpg);
}

.text-container {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 20px;
  color: white;
}

.icon-text {
  flex-direction: row;
  display: flex;
  align-items: center;
  border: 1px solid white;
  width: fit-content;
  padding: 5px;
}

.icon-text > * {
  margin-right: 5px;
  height: 15px;
  font-size: 15px;
}

.detail-nav {
  display: flex;
  width: 1092px;
  border: 1px solid black;
}

.detail-nav > p {
  padding: 10px;
  margin: 0;
  border-right: 1px solid black;
}

.detail-nav > p:last-child {
  border-right: none; /* 마지막 p 태그에는 우측 border 없애기 */
}

.plan-content {
  display: flex;
}

.path-content {
  flex: 1;
}
.path-detail {
  margin-top: 20px;
  flex: 1;
}

.path-map {
  background-color: aquamarine;
  width: 300px;
  height: 300px;
}
</style>
