<script setup>
import AttractionCityItem from "./item/AttractionCityItem.vue";
import AttractionRecomandPathItem from "./item/AttractionRecommandPathItem.vue";
</script>

<template>
  <div class="d-flex flex-column align-items-center">
    <div class="mb-5" style="max-width: 1092px; width: 100%">
      <div class="mb-3">여행지 > 부산 > 홈</div>
      <h3>부산</h3>
      <div class="pt-1">
        <ul class="nav nav-tabs nav-fill">
          <li class="nav-item">
            <a class="nav-link text-dark active" href="#">홈</a>
          </li>
          <li class="nav-item">
            <a class="nav-link border border-secondary text-dark" href="#"
              >호텔</a
            >
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
        <img src="@/assets/img/building.jpg" style="max-height: 362px" />
        <div class="border">map</div>
      </div>
    </div>

    <div class="my-5" style="max-width: 1092px; width: 100%">
      <h4 class="text-center">부산 인기장소</h4>
      <div class="">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <p class="nav-link active text-dark" aria-current="page">자연</p>
          </li>
          <li class="nav-item">
            <p class="nav-link text-dark" href="#">음식점</p>
          </li>
          <li class="nav-item">
            <p class="nav-link text-dark" href="#">문화생활</p>
          </li>
        </ul>
      </div>

      <div class="d-flex flex-row justify-content-center">
        <AttractionCityItem />
        <AttractionCityItem />
        <AttractionCityItem />
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
