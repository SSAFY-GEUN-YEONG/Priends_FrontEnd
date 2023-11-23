<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getPathList, getPathDetailsWithAttraction } from "@/api/pathApi.js";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel"; //스크롤
import PathDetailItem from "./item/PathDetailItem.vue";
const route = useRoute();

const pathInfo = ref({
  title: "",
  content: "",
  startDate: "",
  endDate: "",
  memberId: "",
  memberNickname: "",
  isDeleted: "",
});
const pathDetails = ref([]);
const period = ref(0);

const pathParam = ref({
  pathId: route.params.pathId,
  city: "",
  order: 1,
  limitCount: 0,
});

onMounted(() => {
  console.log(pathParam.value);
  getPathInfo();
  getPathDetail();
});

const getPathInfo = () => {
  console.log("path 정보 가져오기!");
  getPathList(
    pathParam.value,
    ({ data }) => {
      // console.log(data.dataBody[0]);
      pathInfo.value = data.dataBody[0];
      console.log("pathInfo : ", pathInfo.value);
      period.value = calcPeriod();
    },
    (error) => {
      console.log(error);
    }
  );
};

const getPathDetail = () => {
  console.log("path detail 가져오기!");
  getPathDetailsWithAttraction(
    route.params.pathId,
    ({ data }) => {
      // console.log(data.dataBody);
      pathDetails.value = data.dataBody;
      console.log("pathDetails : ", pathDetails.value);
    },
    (error) => {
      console.log(error);
    }
  );
};

const calcPeriod = () => {
  // 문자열을 Date 객체로 변환
  const date1 = new Date(pathInfo.value.startDate);
  const date2 = new Date(pathInfo.value.endDate);

  // 두 날짜 간의 차이를 밀리초로 얻고 일로 변환
  const dayDifference = Math.abs(date2 - date1) / (1000 * 60 * 60 * 24) + 1;
  console.log("day :::", dayDifference);
  return dayDifference;
};

//pathDetail에서 해당 날짜별로만 가져오기
const filteredAttractions = (dayIndex) => {
  return pathDetails.value.filter((item) => item.day === dayIndex);
};

//days nav활성화
const activeTab = ref(1);
function changeTab(dayIndex) {
  activeTab.value = dayIndex;
  console.log("changeTab = activetab ", activeTab.value);
}
</script>

<template>
  <div class="container">
    <div class="content justify-content-center">
      <div class="main-img">
        <div class="text-container">
          <h3>{{ pathInfo.title }}</h3>
          <p>
            {{ pathInfo.startDate }} ~ {{ pathInfo.endDate }} ({{ period }}일)
          </p>

          <div class="icon-text">
            <font-awesome-icon :icon="['fas', 'location-pin']" />
            <div>{{ pathDetails.length }}</div>
            <font-awesome-icon :icon="['far', 'eye']" />
            <div>{{ pathInfo.hit }}</div>
          </div>
        </div>
      </div>
      <div class="plan-content">
        <!-- 여행 계획 일정 부분-->
        <div class="path-detail">
          <PathDetailItem
            v-for="day in period"
            :key="day"
            :pathDetail="filteredAttractions(day)"
            :dayNum="day"
            :startDate="pathInfo.startDate"></PathDetailItem>
        </div>
        <!-- 여행 계획 지도 부분-->
        <div class="path-map-content p-1 pb-0 mt-3">
          <div class="navbar-nav" style="width: 300px">
            <carousel class="p-0 m-0" :items-to-show="4" :snap-align="start">
              <slide
                v-for="dayIndex in period"
                :key="dayIndex"
                class="border"
                :style="{
                  color: activeTab === dayIndex ? 'white' : 'black',
                  backgroundColor: activeTab === dayIndex ? '#c19ee0' : '',
                }">
                <li
                  class="nav-item list-unstyled p-0 pt-2"
                  style="width: fit-content">
                  <a
                    class="nav-link"
                    :class="{ active: activeTab === dayIndex }"
                    href="#"
                    @click="changeTab(dayIndex)"
                    >Day{{ dayIndex }}</a
                  >
                </li>
              </slide>
            </carousel>
          </div>
          <div class="path-map">map</div>
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

.plan-content {
  display: flex;
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
