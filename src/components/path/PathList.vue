<script setup>
import PathListItem from "./item/PathListItem.vue";
</script>

<template>
  <div class="d-flex flex-column align-items-center">
    <div
      class="search-area d-flex flex-column align-items-center justify-content-center"
    >
      <div class="text-wrapper text-center pb-5">
        Priends의 여행 계획을 살펴보세요!
      </div>
      <div
        class="div-search-area d-flex flex-column justify-content-center align-items-center"
      >
        <div>
          <input
            type="text"
            class="input"
            placeholder="계획하고 싶은 도시를 입력하세요."
          />
          <p class="recommand_city pt-3 mb-0">추천도시 : 제주, 부산, 서울</p>
        </div>
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

    <div class="d-flex flex-column">
      <div
        class="d-flex justify-content-between align-items-center mb-2 path-list-item"
      >
        <div class="">
          <button class="btn">인기</button> |
          <button class="btn">신규</button>
        </div>
        <p class="plan-count mb-0 me-1">총 1234개의 계획</p>
      </div>
      <div class="d-flex flex-row justify-content-between mb-5">
        <PathListItem />
        <PathListItem />
        <PathListItem />
      </div>
    </div>
  </div>
</template>

<style scoped>
.search-area {
  width: 100%;
  height: 400px;
  background: url(@/assets/img/field.jpg) center/cover;
}

.search-area .text-wrapper {
  font: 700 34.6px/36px "Inter-Bold", Helvetica;
  color: #ffffff;
  text-shadow: 0px 0px 5px #00000080;
}

.div-search-area {
  width: 698px;
  height: 138px;
  background-color: #363636b2;
  border-radius: 3px;
}

.search-area .input {
  width: 650px;
  height: 50px;
  background-color: white;
}

.search-area .recommand_city {
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

.path-list-item {
  width: 1200px;
}

.plan-count {
  color: #5a3886;
}
</style>
