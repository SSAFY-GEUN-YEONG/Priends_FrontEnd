<script setup>
import { ref, watch, onMounted } from "vue";
import { useAttractionStore } from "@/stores/attractionStore";
import { storeToRefs } from "pinia";
import { getAreaListByCategory } from "@/api/attractionApi.js";
import { useRoute } from "vue-router";
import AttractionListItem from "./item/AttractionListItem.vue";
import VSelect from "@/components/common/VSelect.vue";
const route = useRoute();

const attractionStore = useAttractionStore();
const { category } = storeToRefs(attractionStore);
// const { category, attractionList } = storeToRefs(attractionStore);

const param = ref({
  city: route.params.areaname,
  category: route.params.category,
  order: 2, //1:이름순 2:인기순
});

const selectOption = ref([
  { text: "이름순", value: 1 },
  { text: "인기순", value: 2 },
]);

const attractionList = ref([]);

onMounted(() => {
  console.log(param.value);
  ListByCategory();
});

const ListByCategory = () => {
  console.log("카테고리별 리스트 얻어오자!!!", param.value);
  getAreaListByCategory(
    param.value,
    ({ data }) => {
      console.log(data.dataBody);
      attractionList.value = data.dataBody;
      console.log(attractionList.value);
    },
    (error) => {
      console.log(error);
    }
  );
};

watch(
  () => category.value,
  () => {
    ListByCategory();
  }
);

function setCategory(value) {
  const newCategory = value;
  category.value = newCategory;
  console.log("category :", category.value);
  param.value.category = category.value;
  console.log(param.value.category);
}

// const onChangeOrder = (val) => {
//   param.value.order = val;
//   console.log("onchange gugun ", param.value.order);
// };
</script>

<template>
  <div class="d-flex flex-column align-items-center">
    <div class=" " style="max-width: 1092px; width: 100%">
      <div class="mb-3">여행지 > {{ param.city }} > {{ param.category }}</div>
      <h3>{{ param.city }}</h3>
      <div class="pt-1">
        <ul class="nav nav-tabs nav-fill">
          <li class="nav-item">
            <router-link
              class="nav-link text-dark"
              :to="{
                name: 'attraction-area',
                params: { areaname: param.city },
              }"
              @click="() => setCategory('')"
              >홈</router-link
            >
            <!-- <a class="nav-link text-dark active" href="#">홈</a> -->
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
            <!-- <a class="nav-link border border-secondary text-dark" href="#"
              >문화생활</a
            > -->
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
            <!-- <a class="nav-link border border-secondary text-dark" href="#"
              >음식점</a
            > -->
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
    </div>

    <div
      class="d-flex flex-row justify-content-between pt-4 pb-2 px-2"
      style="max-width: 1092px; width: 100%">
      <p class="my-auto">총 {{ attractionList.length }}개</p>
      <VSelect
        class="mx-3"
        :selectOption="selectOption"
        @onKeySelect="onChangeOrder" />

      <!-- <select
        class="form-select"
        style="width: fit-content"
        aria-label="Default select example">
        <option selected value="1">인기순</option>
        <option value="2">이름순</option>
      </select> -->
    </div>

    <div class="mb-5" style="max-width: 1092px; width: 100%">
      <AttractionListItem
        v-for="item in attractionList"
        :key="item.content_id"
        :attraction="item" />
    </div>
  </div>
</template>

<style scoped></style>
