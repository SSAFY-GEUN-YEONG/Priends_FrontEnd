<script setup>
import { onMounted, ref } from "vue";
import MainRecommendAttractionItem from "./item/MainRecommendAttractionItem.vue";
import { topGetAttractionListApi } from "@/api/attractionApi";
import { useRouter } from "vue-router";

const router = useRouter();
const attractions = ref([]); // 인기 관광지 목록을 담을 반응형 변수

// API로부터 인기 관광지 목록을 가져오는 함수
const fetchTopAttractions = () => {
  topGetAttractionListApi(
    ({ data }) => {
      attractions.value = data.dataBody;
    },
    (error) => {
      console.error(error);
    }
  );
};

const navigateToAttractionDetail = (contentId) => {
  router.push({
    name: "attraction-area-detail",
    params: { attractionid: contentId },
  });
};

// 컴포넌트가 마운트될 때 인기 관광지 목록을 가져옵니다.
onMounted(fetchTopAttractions);
</script>

<template>
  <div class="container d-flex flex-column align-items-center">
    <div class="my-5">
      <p class="px-3 mb-0 fs-3 fw-bold">다음 휴가를 위한 인기 여행지</p>
      <div
        class="recommend-attraction px-3 d-flex flex-row justify-content-between"
      >
        <!-- API로부터 가져온 인기 관광지 목록을 반복하여 표시 -->
        <MainRecommendAttractionItem
          v-for="attraction in attractions"
          :key="attraction.content_id"
          :title="attraction.title"
          :image="attraction.first_image"
          @click="navigateToAttractionDetail(attraction.content_id)"
        />
      </div>
    </div>

    <div class="my-5">
      <p class="px-3 mb-0 fs-3 fw-bold">이번 주말을 위한 무작위 여행지</p>
      <div
        class="recommend-attraction px-3 d-flex flex-row justify-content-between mb-5"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.recommend-attraction {
  width: 1092px;
}
</style>
