<script setup>
import TheHeaderNavbar from "../layout/TheHeaderNavbar.vue";
import TheFooterNavBar from "../layout/TheFooterNavbar.vue";
import AttractionCityItem from "./item/AttractionCityItem.vue";
import AttractionRecomandPathItem from "./item/AttractionRecommandPathItem.vue";
</script>

<template>
  <TheHeaderNavbar />
  <div class="screen">
    <div class="city-home">
      <h3>부산</h3>
      <div class="city-home-nav">
        <p>홈</p>
        <p>호텔</p>
        <p>문화생활</p>
        <p>음식점</p>
        <p>마켓</p>
        <p>액티비티</p>
        <p>자연</p>
      </div>
      <div class="city-home-content">
        <div class="city-home-cover">
          <img height="364px" src="@/assets/img/building.jpg" />
        </div>
        <div class="city-home-weather">날씨</div>
      </div>
    </div>
    <div class="city-popular">
      <h4>부산 인기장소</h4>
      <div class="city-popular-nav">
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
      <div class="city-popular-content">
        <AttractionCityItem />
        <AttractionCityItem />
        <AttractionCityItem />
      </div>
    </div>
    <div class="city-recommand-path">
      <h4>추천 여행 계획</h4>
      <div class="city-recommand-path-item"><AttractionRecomandPathItem /></div>
      <button type="button" class="btn btn-outline-secondary">
        여행 계획 모두보기
      </button>
    </div>
    <TheFooterNavBar />
  </div>
</template>

<style scoped>
.screen {
  background-color: transparent;
  display: inline-flex;
  flex-direction: column;
  align-items: center; /* 수직 가운데 정렬 */
  justify-content: center;
  width: 100%;
}

.city-home-nav {
  width: 100%;
  background-color: #6d4e86;
  font-size: 15px;
  display: flex;
  justify-content: space-around; /* 각 항목을 동일한 간격으로 배치 */
  color: white; /* 폰트 색상을 흰색으로 설정 */
  padding-top: 16px;
  border-radius: 15px; /* 둥글게 만들기 */
  overflow: hidden; /* 둥글게 만들 때 생길 수 있는 이슈 해결을 위해 추가*/
}

.city-home,
.city-popular,
.city-recommand-path {
  margin-top: 20px; /* 각 섹션 위에 여백 추가 */
  width: 80%; /* 각 섹션의 너비 설정 */
  max-width: 1092px; /* 최대 너비 설정 */
}
.city-home > h3 {
  margin-left: 20px;
  font-weight: bold;
}
.city-home-content {
  margin-top: 20px;
  display: flex; /* 자식 요소를 수평으로 배치 */
  height: 364px; /* 높이 설정 */
}

.city-home-cover {
  flex: 2;
}
.city-home-weather {
  flex: 1;
  border: 1px solid black; /* 테두리 추가 (테스트용) */
}

.city-popular {
  margin-top: 100px;
}
.city-popular > h4 {
  text-align: center;
}

.city-popular-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap; /* 내용이 넘칠 경우 다음 줄에 배치 */
}

.city-recommand-path {
  text-align: center;
}
.city-recommand-path > h4 {
  text-align: center;
}
</style>
