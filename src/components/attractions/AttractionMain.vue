<script setup>
import TheFooterNavBar from "../layout/TheFooterNavbar.vue";
</script>

<template>
  <div class="screen">
    <div class="search-area">
      <div class="text-wrapper">어디로 여행을 가시나요?</div>
      <div class="div-search-area">
        <input
          type="text"
          class="input"
          value="여행하고 싶은 도시를 입력하세요."
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
    <div class="city-list">
      <h3>도시 리스트</h3>
      <hr />
      <br /><br />
      <div class="city">
        <p>강릉</p>
        <p>구례</p>
        <p>대전광역시</p>
        <p>서귀포</p>
        <p>양양</p>
        <p>울산광역시</p>
        <p>제천</p>
        <p>파주</p>
        <p>강진</p>
        <p>구리</p>
        <p>동두천</p>
        <p>서산</p>
        <p>양주</p>
        <p>울진</p>
        <p>증평</p>
        <p>평창</p>
        <p>거제</p>
        <p>구미</p>
        <p>동해</p>
        <p>서울특별시</p>
        <p>여수</p>
        <p>원주</p>
        <p>진도</p>
        <p>평택</p>
        <p>거창</p>
        <p>군산</p>
        <p>목포</p>
        <p>서천</p>
        <p>여주</p>
        <p>음성</p>
        <p>진안</p>
        <p>포천</p>
        <p>경산</p>
        <p>군위</p>
        <p>무안</p>
        <p>성남</p>
        <p>영광</p>
        <p>의령</p>
        <p>진주</p>
        <p>포항</p>
        <p>경주</p>
        <p>군포</p>
        <p>무주</p>
        <p>성주</p>
        <p>영덕</p>
        <p>의성</p>
        <p>진천</p>
        <p>하남</p>
        <p>계룡</p>
        <p>금산</p>
        <p>문경</p>
        <p>세종</p>
        <p>영동</p>
        <p>의왕</p>
        <p>창녕</p>
        <p>하동</p>
        <p>고령</p>
        <p>김제</p>
        <p>밀양</p>
        <p>속초</p>
        <p>영암</p>
        <p>의정부</p>
        <p>창원</p>
        <p>함안</p>
        <p>고성</p>
        <p>김천</p>
        <p>보령</p>
        <p>수원</p>
        <p>영양</p>
        <p>이천</p>
        <p>천안</p>
        <p>함양</p>
        <p>고양</p>
        <p>김포</p>
        <p>보성</p>
        <p>순창</p>
        <p>영월</p>
        <p>익산</p>
        <p>철원</p>
        <p>함평</p>
        <p>고창</p>
        <p>김해</p>
        <p>보은</p>
        <p>순천</p>
        <p>영주</p>
        <p>인제</p>
        <p>청도</p>
        <p>합천</p>
        <p>고흥</p>
        <p>나주</p>
        <p>봉화</p>
        <p>시흥</p>
        <p>영천</p>
        <p>인천광역시</p>
        <p>청송</p>
        <p>해남</p>
        <p>곡성</p>
        <p>남양주</p>
        <p>부산광역시</p>
        <p>신안</p>
        <p>예산</p>
        <p>임실</p>
        <p>청양</p>
        <p>홍성</p>
        <p>공주</p>
        <p>남원</p>
        <p>부안</p>
        <p>아산</p>
        <p>예천</p>
        <p>장성</p>
        <p>청주</p>
        <p>홍천</p>
        <p>과천</p>
        <p>남해</p>
        <p>부여</p>
        <p>안동</p>
        <p>오산</p>
        <p>장수</p>
        <p>춘천</p>
        <p>화성</p>
        <p>광명</p>
        <p>논산</p>
        <p>부천</p>
        <p>안산</p>
        <p>옥천</p>
        <p>장흥</p>
        <p>충주</p>
        <p>화순</p>
        <p>광양</p>
        <p>단양</p>
        <p>사천</p>
        <p>안성</p>
        <p>완도</p>
        <p>전주</p>
        <p>칠곡</p>
        <p>화천</p>
        <p>광주</p>
        <p>담양</p>
        <p>산청</p>
        <p>안양</p>
        <p>완주</p>
        <p>정선</p>
        <p>태백</p>
        <p>횡성</p>
        <p>광주광역시</p>
        <p>당진</p>
        <p>삼척</p>
        <p>양구</p>
        <p>용인</p>
        <p>정읍</p>
        <p>태안</p>
        <p>괴산</p>
        <p>대구광역시</p>
        <p>상주</p>
        <p>양산</p>
        <p>울릉</p>
        <p>제주</p>
        <p>통영</p>
      </div>
    </div>
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
  background: url(@/assets/img/windmill.jpg) center/cover;
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

.city-list {
  display: block;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.city {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 26px;
  width: 1190px;
  align-items: flex-start;
  justify-content: center;
  margin: 0 auto;
}

.city > p {
  position: relative;
  width: 56px;
  height: 13px;
  margin-top: -1px;
  font-family: 12px "Inter-Bold", Helvetica;
  font-weight: 700;
  color: #555555;
  font-size: 12px;
  letter-spacing: 0;
  line-height: 13px;
  white-space: nowrap;
}
</style>
