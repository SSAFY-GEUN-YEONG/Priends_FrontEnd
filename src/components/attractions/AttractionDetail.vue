<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { useAttractionStore } from "@/stores/attractionStore";
import VKakaoMap from "@/components/common/VKakaoMap.vue";
import { storeToRefs } from "pinia";

const route = useRoute();
const attractionStore = useAttractionStore();

const { attractionDetail } = storeToRefs(attractionStore); // 관광지 관련 저장소에 저장되어 있는 변수
const { getAttractionDetail } = attractionStore; // 관광지 관련 저장소에 저장되어 있는 함수

// 맵에 전달할 데이터 집어넣기
const selectedStation = ref({
  lat: 0, // 위도
  lng: 0, // 경도
  title: null,
  addr1: null,
  first_image: null,
});

onMounted(() => {
  const attractionId = route.params.attractionid; // 라우터에서 해당 param값 받아오기 (url)
  getAttractionDetail(attractionId); // attractionStore에서 가져온 해당 메서드 호출
});

watch(attractionDetail, (newDetail) => {
  if (newDetail) {
    selectedStation.value.lat = newDetail.latitude;
    selectedStation.value.lng = newDetail.longitude;
    selectedStation.value.title = newDetail.title;
    selectedStation.value.addr1 = newDetail.addr1;
    selectedStation.value.first_image = newDetail.first_image;
  }
});
</script>

<template>
  <div class="screen">
    <!-- attractionDetail이 있는 경우에 렌더링 -->
    <div class="detail-info" v-if="attractionDetail">
      <div class="detail-category">여행지 > 부산 > 자연</div>
      <div class="detail-info-title">
        <h3>{{ attractionDetail.title }}</h3>
        <div class="icon-text">
          <div>
            <font-awesome-icon :icon="['fas', 'location-dot']" />
            <div>{{ attractionDetail.addr1 }}</div>
          </div>
          <div>
            <font-awesome-icon :icon="['far', 'eye']" style="height: 15px" />
            <div>
              {{ attractionDetail.readcount }}
            </div>
          </div>
        </div>
      </div>
      <div class="detail-content flex-column align-items-center">
        <div class="">
          <img
            v-if="attractionDetail.first_image"
            :src="attractionDetail.first_image"
            class="px-4"
            alt="..."
            style="width: 500px"
          />
          <img
            v-else
            src="@/assets/img/defaultImg.png"
            class="px-4"
            alt="..."
            style="width: 500px"
          />
          <!-- <img
            src="@/assets/img/building.jpg"
            class="px-4"
            alt="..."
            style="width: 500px"
          /> -->
        </div>
        <div class="mt-5 px-4">{{ attractionDetail.overview }}</div>
      </div>
      <div class="mt-4 mx-4 p-3 d-flex flex-column border border-dark-subtle">
        <div class="d-flex flex-column mt-3">
          <div class="mx-4 align-self-start">
            <p>전화번호 {{ attractionDetail.tel }}</p>
          </div>
          <div class="mx-4 align-self-start">
            <p>웹사이트 www.sssss.com</p>
          </div>
        </div>
        <button
          type="button"
          class="justify-content-end btn btn-outline-secondary ms-auto mb-3 me-3"
        >
          정보 수정 업데이트
        </button>
      </div>
      <div class="mx-4 p-3 d-flex flex-column border border-dark-subtle">
        <div class="card" style="width: 18rem">
          <img src="@/assets/img/building.jpg" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">어쩌고 다리</h5>
            <div class="d-flex flex-row justify-content-start">
              <font-awesome-icon
                :icon="['far', 'eye']"
                style="height: 15px"
                class="align-bottom pt-1"
              />
              <div class="ms-2 align-top">874</div>
              <button type="button" class="btn btn-secondary ms-auto">
                음식점
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="mx-4 p-3 d-flex flex-column border border-dark-subtle"> -->
      <div class="mx-4 d-flex flex-column border border-dark-subtle">
        <!--맵 부분 -->
        <!-- 여기에 VKakaoMap 컴포넌트 추가 -->
        <!-- <div class="map-container"> -->
        <VKakaoMap :selectStation="selectedStation" style="height: 700px;"></VKakaoMap>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.screen {
  background-color: transparent;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.detail-category {
  font-size: 12px;
  margin-left: 20px;
  align-self: flex-start; /* 수정된 부분 */
}

.detail-info,
.city-popular,
.city-recommand-path {
  margin-top: 20px;
  width: 80%;
  max-width: 1092px;
  margin-bottom: 100px;
}

.detail-info-title {
  background-color: #d7dbff;
  border-radius: 15px; /* 값을 조절하여 더 둥글게 만들 수 있습니다. */
  padding: 10px; /* 추가로 내용과의 간격을 조절할 수 있습니다. */
}

.detail-info-title > h3 {
  margin-left: 20px;
  margin-bottom: 20px;
  font-weight: bold;
}

.icon-text {
  flex-direction: column;
  display: flex;
  align-items: flex-start; /* 왼쪽 정렬을 유지하려면 추가 */
  margin-left: 20px;
}
.icon-text > div {
  flex-direction: row;
  display: flex;
  align-items: center;
}
.icon-text > div > * {
  margin-right: 10px;
}

.detail-content {
  margin-top: 20px;
  display: flex;
  /* border: 1px solid red; */
}

.icon-text > * {
  margin-left: 5px;
}
</style>
