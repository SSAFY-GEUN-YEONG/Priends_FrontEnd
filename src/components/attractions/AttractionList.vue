<script setup>
import AttractionListItem from "./item/AttractionListItem.vue";
</script>

<template>
  <div class="d-flex flex-column align-items-center">
    <div class=" " style="max-width: 1092px; width: 100%">
      <div class="mb-3">여행지 > 부산 > 음식점</div>
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
    </div>

    <div
      class="d-flex flex-row justify-content-between pt-4 pb-2 px-2 border-top"
      style="max-width: 1092px; width: 100%">
      <p class="my-auto">총 100개</p>
      <select
        class="form-select"
        style="width: fit-content"
        aria-label="Default select example">
        <option selected value="1">인기순</option>
        <option value="2">이름순</option>
      </select>
    </div>

    <div class="mb-5" style="max-width: 1092px; width: 100%">
      <AttractionListItem />
      <AttractionListItem />
      <AttractionListItem />
      <AttractionListItem />
      <AttractionListItem />
      <AttractionListItem />
    </div>
  </div>
</template>

<style scoped></style>
