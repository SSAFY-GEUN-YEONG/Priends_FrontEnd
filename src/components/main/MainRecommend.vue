<script setup>
import MainRecommendAttractionItem from "./item/MainRecommendAttractionItem.vue";
</script>

<template>
  <div class="container d-flex flex-column align-items-center">
    <div class="my-5">
      <p class="px-3 mb-0 fs-3 fw-bold">다음 휴가를 위한 인기 여행지</p>
      <div
        class="recommend-attraction px-3 d-flex flex-row justify-content-between"
      >
        <MainRecommendAttractionItem />
        <MainRecommendAttractionItem />
        <MainRecommendAttractionItem />
        <MainRecommendAttractionItem />
      </div>
    </div>

    <div class="my-5">
      <p class="px-3 mb-0 fs-3 fw-bold">이번 주말을 위한 무작위 여행지</p>
      <div
        class="recommend-attraction px-3 d-flex flex-row justify-content-between mb-5"
      >
        <MainRecommendAttractionItem />
        <MainRecommendAttractionItem />
        <MainRecommendAttractionItem />
        <MainRecommendAttractionItem />
      </div>
    </div>
  </div>
</template>

<style scoped>
.recommend-attraction {
  width: 1092px;
}
</style>
