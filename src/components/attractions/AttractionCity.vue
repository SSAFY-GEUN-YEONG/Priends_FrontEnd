<script setup>
import AttractionCityItem from "./item/AttractionCityItem.vue";
import AttractionRecomandPathItem from "./item/AttractionRecommandPathItem.vue";
import { ref, onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";
import VKakaoMap from "@/components/common/VKakaoMap.vue";
import { getAreaInfo } from "@/api/attractionApi.js";

const route = useRoute();
const router = useRouter();

const areainfo = ref({
  img: "",
  natureAttractions: [],
  restaurantAttractions: [],
  cultureAttractions: [],
});

const selectedCategory = ref("nature");
const selectedAttractions = ref([]);

const fetchAreaInfo = async () => {
  const city = route.params.areaname;
  try {
    const response = await getAreaInfo({ city, category: "home" });
    // console.log(response);
    areainfo.value = response.data.dataBody;
    updateSelectedAttractions();
  } catch (error) {
    console.error("지역 정보를 가져오는 데 실패했습니다.", error);
  }
};

// 선택된 카테고리에 따라 관광지 목록을 업데이트하는 함수
const updateSelectedAttractions = () => {
  switch (selectedCategory.value) {
    case "nature":
      selectedAttractions.value = areainfo.value.natureAttractions;
      break;
    case "restaurant":
      selectedAttractions.value = areainfo.value.restaurantAttractions;
      break;
    case "culture":
      selectedAttractions.value = areainfo.value.cultureAttractions;
      break;
    default:
      selectedAttractions.value = areainfo.value.natureAttractions;
  }
};

function selectCategory(category) {
  selectedCategory.value = category;
  updateSelectedAttractions();
}

function goToAttracitionDetail(contentId) {
  router.push({
    name: "attraction-area-detail",
    params: { attractionid: contentId },
  });
}

// function setCategory(value) {
//   const newCategory = value;
//   category.value = newCategory;
//   console.log("category :", category.value);
//   param.value.category = category.value;
//   console.log(param.value.category);
// }

function moveToPathList() {
  router.push({
    name: "path-list",
  });
}

onBeforeMount(() => {
  fetchAreaInfo();
});
</script>

<template>
  <div class="d-flex flex-column align-items-center">
    <div class="mb-5" style="max-width: 1092px; width: 100%">
      <div class="mb-3">여행지 > {{ route.params.areaname }} > 홈</div>
      <h3>{{ route.params.areaname }}</h3>
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
                params: { areaname: route.params.areaname, category: 'hotel' },
              }"
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
                params: {
                  areaname: route.params.areaname,
                  category: 'culture',
                },
              }"
              >문화생활</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link text-dark"
              :to="{
                name: 'attraction-area-category',
                params: {
                  areaname: route.params.areaname,
                  category: 'restaurant',
                },
              }"
              >음식점</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link text-dark"
              :to="{
                name: 'attraction-area-category',
                params: { areaname: route.params.areaname, category: 'market' },
              }"
              >마켓</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link text-dark"
              :to="{
                name: 'attraction-area-category',
                params: {
                  areaname: route.params.areaname,
                  category: 'activity',
                },
              }"
              >액티비티</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link text-dark"
              :to="{
                name: 'attraction-area-category',
                params: { areaname: route.params.areaname, category: 'nature' },
              }"
              >자연</router-link
            >
          </li>
        </ul>
      </div>
      <div class="d-flex flex-row">
        <img :src="areainfo.img" style="max-height: 362px" />
        <VKakaoMap
          :attractions="selectedAttractions"
          style="height: 362px"></VKakaoMap>
      </div>
    </div>

    <div class="my-5" style="max-width: 1092px; width: 100%">
      <h4 class="text-center">{{ route.params.areaname }} 인기장소</h4>
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
          :attraction="item"
          @click="goToAttracitionDetail(item.content_id)">
        </AttractionCityItem>
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
      <button
        type="button"
        class="btn btn-outline-secondary mb-5"
        @click="moveToPathList">
        여행 계획 모두보기
      </button>
    </div>
  </div>
</template>

<style scoped></style>
