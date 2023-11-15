<script setup>
import PathListItem from "./item/PathListItem.vue";
import TheHeaderNavbar from "../layout/TheHeaderNavbar.vue";
import TheFooterNavBar from "../layout/TheFooterNavbar.vue";
</script>

<template>
  <TheHeaderNavbar />
  <div class="screen">
    <div class="search-area">
      <div class="text-wrapper">Priends의 여행 계획을 살펴보세요!</div>
      <div class="div-search-area">
        <input
          type="text"
          class="input"
          value="계획 하고싶은 도시를 입력하세요."
        />
        <div class="recommand_city">추천도시 : 제주, 부산, 서울</div>
      </div>
    </div>

    <div class="major-city">
      <table class="table">
        <tbody>
          <tr>
            <th scope="row">주요도시</th>
            <td>서울</td>
            <td>제주</td>
            <td>부산</td>
            <td>대구</td>
            <td>인천</td>
            <td>광주</td>
            <td>울산</td>
            <td>대전</td>
          </tr>
          <tr>
            <th scope="row" rowspan="2">주요지역</th>
            <td>강원도</td>
            <td>경기도</td>
            <td>경상북도</td>
            <td>전라남도</td>
            <td>전라북도</td>
            <td>충청남도</td>
            <td>충청북도</td>
          </tr>
          <tr>
            <td>가평</td>
            <td>강릉</td>
            <td>경주</td>
            <td>목포</td>
            <td>속초</td>
            <td>양양</td>
            <td>여수</td>
            <td>전주</td>
            <td>춘천</td>
            <td>포항</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="plan-list">
      <div class="d-flex justify-content-between align-items-center mb-2">
        <div class="plan-change-btn">
          <button class="btn me-2">인기</button> |
          <button class="btn">신규</button>
        </div>
        <p class="plan-count mb-0 me-2">총 1234개의 계획</p>
      </div>
      <PathListItem />

      <PathListItem />

      <PathListItem />
    </div>
    <TheFooterNavBar />
  </div>
</template>

<style scoped>
.screen {
  background-color: transparent;
  display: block;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  position: -webkit-sticky;
  position: sticky;
  top: 50px; /* 헤더의 높이만큼 여백 추가 */
}

.search-area {
  display: block;
  position: relative;
  width: 1920px;
  height: 407px;
  background: url(@/assets/img/field.jpg) center/cover;
  justify-content: center;
  margin: 0 auto;
}

.search-area .text-wrapper {
  position: absolute;
  top: 56px;
  left: 779px;
  width: 400px;
  height: 42px;
  font: 700 34.6px/36px "Inter-Bold", Helvetica;
  color: #ffffff;
  text-align: center;
  text-shadow: 0px 0px 5px #00000080;
}

.div-search-area {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* 가운데 정렬을 위한 트랜스폼 */
  width: 698px;
  height: 138px;
  background-color: #363636b2;
  border-radius: 3px;
}

.search-area .input {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 650px;
  height: 50px;
  background-color: white;
}

.search-area .recommand_city {
  position: absolute;
  top: 90px;
  left: 20px;
  height: 14px;
  font: 400 14px/14px "Inter-Regular", Helvetica;
  color: #ffffff;
}

.search-area {
  font: 400 14px "Inter-Regular", Helvetica;
  color: #ffffff;
  white-space: nowrap;
}

.major-city {
  width: 1200px;
  height: 300px;
  border: 1px solid black;
  font: 16px;
  margin: 100px auto;
  align-items: center;
  justify-content: center;
  text-align: center; /* 텍스트 중앙 정렬을 위한 추가 */
}
table {
  border-collapse: collapse;
  width: 100%;
  border: 1px solid black;
  vertical-align: middle; /* 텍스트를 수직으로 가운데 정렬 */
}
tr {
  height: 100px;
  border-bottom: 1px solid black;
}
th {
  border: 1px solid black;
}
td {
  text-align: center;
  width: 100px;
}

.plan-count {
  color: #5a3886;
}
</style>
