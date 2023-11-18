<script setup>
import AttractionCityItem from "./item/AttractionCityItem.vue";
import AttractionRecomandPathItem from "./item/AttractionRecommandPathItem.vue";
import { ref, watch, onMounted } from "vue";
import { useAttractionStore } from "@/stores/attractionStore";
import { storeToRefs } from "pinia";

import { getAreaInfo } from "@/api/attractionApi.js";
const attractionStore = useAttractionStore();
const { areainfo, cityname, category } = storeToRefs(attractionStore);

// const areainfo = ref({
//   img: "",
//   natureAttractions: [],
//   restaurantAttractions: [],
//   cultureAttractions: [],
// });

const param = ref({
  city: cityname.value,
  category: "home",
});
onMounted(() => {
  getAreaInfo1();
});

const getAreaInfo1 = () => {
  console.log("attraction cityname   얻어오자!!!", param.value);
  getAreaInfo(
    param.value,
    ({ data }) => {
      console.log(data.dataBody.natureAttractions);
      areainfo.value.img = data.dataBody.img;

      // areas.value = data.dataBody.map((value) => value.gugun_name);
      areainfo.value.restaurantAttractions =
        data.dataBody.restaurantAttractions;
      areainfo.value.natureAttractions = data.dataBody.natureAttractions;
      areainfo.value.cultureAttractions = data.dataBody.cultureAttractions;
      console.log("areainfo ", areainfo.value);
    },
    (error) => {
      console.log(error);
    }
  );
};

const selectedCategory = ref("nature");
const selectedAttractions = ref(getSelectedAttractions());

function selectCategory(category) {
  selectedCategory.value = category;
}
watch(
  () => selectedCategory.value,
  () => {
    selectedAttractions.value = getSelectedAttractions();
  }
);

function getSelectedAttractions() {
  switch (selectedCategory.value) {
    case "nature":
      return areainfo.value.natureAttractions;
    case "restaurant":
      return areainfo.value.restaurantAttractions;
    case "culture":
      return areainfo.value.cultureAttractions;
    default:
      return areainfo.value.natureAttractions;
  }
}

function setCategory(value) {
  category.value = value;
  console.log("category :", category.value);
}
</script>

<template>
  <div class="d-flex flex-column align-items-center">
    <div class="mb-5" style="max-width: 1092px; width: 100%">
      <div class="mb-3">여행지 > {{ cityname }} > 홈</div>
      <h3>{{ cityname }}</h3>
      <div class="pt-1">
        <ul class="nav nav-tabs nav-fill">
          <li class="nav-item">
            <a class="nav-link text-dark active" href="#">홈</a>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link border border-secondary text-dark"
              :to="{
                name: 'attraction-area-category',
                params: { areaname: cityname, category: 'hotel' },
              }"
              @click="() => setCategory('hotel')"
              >호텔</router-link
            >
            <!-- <a class="nav-link border border-secondary text-dark" href="#"
              >호텔</a
            > -->
          </li>
          <li class="nav-item">
            <a class="nav-link border border-secondary text-dark" href="#"
              >문화생활</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link border border-secondary text-dark" href="#"
              >음식점</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link border border-secondary text-dark" href="#"
              >마켓</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link border border-secondary text-dark" href="#"
              >액티비티</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link border border-secondary text-dark" href="#"
              >자연</a
            >
          </li>
        </ul>
      </div>
      <div class="d-flex flex-row">
        <img :src="areainfo.img" style="max-height: 362px" />
        <div class="border">map</div>
      </div>
    </div>

    <div class="my-5" style="max-width: 1092px; width: 100%">
      <h4 class="text-center">{{ cityname }} 인기장소</h4>
      <div class="">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a
              class="nav-link border text-dark"
              @click="selectCategory('nature')"
              href="#"
              >자연</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link border text-dark"
              @click="selectCategory('restaurant')"
              href="#"
              >음식점</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link border text-dark"
              @click="selectCategory('culture')"
              href="#"
              >문화생활</a
            >
            <!-- <p class="nav-link text-dark" href="#">문화생활</p> -->
          </li>
        </ul>
      </div>

      <!-- 문제!!! 서울->제주도 이동하면 서울의 인기 자연이 제주도화면에서 보임 -->
      <div class="cityitem d-flex flex-row justify-content-center">
        <AttractionCityItem
          v-for="item in selectedAttractions"
          :key="item.content_id"
          :attraction="item" />
      </div>
    </div>

    <div
      class="my-5 d-flex flex-column align-items-center"
      style="max-width: 1092px; width: 100%">
      <h4 class="text-center mb-2">추천 여행 계획</h4>
      <div class="d-flex">
        <AttractionRecomandPathItem />
        <AttractionRecomandPathItem />
        <AttractionRecomandPathItem />
      </div>
      <button type="button" class="btn btn-outline-secondary mb-5">
        여행 계획 모두보기
      </button>
    </div>
  </div>
</template>

<style scoped></style>
