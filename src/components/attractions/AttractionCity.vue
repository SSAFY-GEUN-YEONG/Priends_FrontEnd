<script setup>
import AttractionCityItem from "./item/AttractionCityItem.vue";
import AttractionRecomandPathItem from "./item/AttractionRecommandPathItem.vue";
import { ref, watch, onBeforeMount } from "vue";
import { useAttractionStore } from "@/stores/attractionStore";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";

import { getAreaInfo } from "@/api/attractionApi.js";
const attractionStore = useAttractionStore();
const { category } = storeToRefs(attractionStore);

const route = useRoute();

const areainfo = ref({
  img: "",
  natureAttractions: [],
  restaurantAttractions: [],
  cultureAttractions: [],
});

const param = ref({
  city: "",
  category: "home",
});

onBeforeMount(async () => {
  // city에 대한 초기값을 설정
  param.value.city = route.params.areaname;
  await getAreaInfo1();
  console.log(param.value.city);
});

const getAreaInfo1 = async () => {
  console.log("attraction city   얻어오자!!!", param.value.city);
  await getAreaInfo(
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
      selectCategory("nature");
    },
    (error) => {
      console.log(error);
    }
  );
};

const selectedCategory = ref("");
const selectedAttractions = ref(() => getSelectedAttractions());

function selectCategory(category) {
  selectedCategory.value = category;
}
watch(
  () => selectedCategory.value,
  () => {
    selectedAttractions.value = getSelectedAttractions();
    console.log("watch : ", selectedAttractions.value);
  }
);

function getSelectedAttractions() {
  console.log("getSelectedAttractions() : " + selectedCategory.value);
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
      <div class="mb-3">여행지 > {{ param.city }} > 홈</div>
      <h3>{{ param.city }}</h3>
      <div class="pt-1">
        <ul class="nav nav-tabs nav-fill">
          <li class="nav-item">
            <a class="nav-link text-dark active" aria-current="page" href="#"
              >홈</a
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link text-dark"
              :to="{
                name: 'attraction-area-category',
                params: { areaname: param.city, category: 'hotel' },
              }"
              @click="() => setCategory('hotel')"
              >호텔</router-link
            >

            <!-- <a class="nav-link border border-secondary text-dark" href="#"
              >호텔</a
            > -->
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link text-dark"
              :to="{
                name: 'attraction-area-category',
                params: { areaname: param.city, category: 'culture' },
              }"
              @click="() => setCategory('culture')"
              >문화생활</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link text-dark"
              :to="{
                name: 'attraction-area-category',
                params: { areaname: param.city, category: 'restaurant' },
              }"
              @click="() => setCategory('restaurant')"
              >음식점</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link text-dark"
              :to="{
                name: 'attraction-area-category',
                params: { areaname: param.city, category: 'market' },
              }"
              @click="() => setCategory('market')"
              >마켓</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link text-dark"
              :to="{
                name: 'attraction-area-category',
                params: { areaname: param.city, category: 'activity' },
              }"
              @click="() => setCategory('activity')"
              >액티비티</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link text-dark"
              :to="{
                name: 'attraction-area-category',
                params: { areaname: param.city, category: 'nature' },
              }"
              @click="() => setCategory('nature')"
              >자연</router-link
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
      <h4 class="text-center">{{ param.city }} 인기장소</h4>
      <div class="">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a
              class="nav-link text-dark"
              @click="selectCategory('nature')"
              href="#"
              >자연</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link text-dark"
              @click="selectCategory('restaurant')"
              href="#"
              >음식점</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link text-dark"
              @click="selectCategory('culture')"
              href="#"
              >문화생활</a
            >
            <!-- <p class="nav-link text-dark" href="#">문화생활</p> -->
          </li>
        </ul>
      </div>

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
