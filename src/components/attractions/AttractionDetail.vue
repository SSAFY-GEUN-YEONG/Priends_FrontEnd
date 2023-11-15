<script setup>
import TheHeaderNavbar from "../layout/TheHeaderNavbar.vue";
import TheFooterNavBar from "../layout/TheFooterNavbar.vue";
</script>

<template>
  <TheHeaderNavbar />
  <div class="screen">
    <div class="detail-info">
      <div class="detail-category">여행지 > 부산 > 자연</div>
      <div class="detail-info-title">
        <h3>해운대</h3>
        <div class="icon-text">
          <div>
            <font-awesome-icon :icon="['fas', 'location-dot']" />
            <div>대한민국 부산광역시 해운대구 중1동 1415</div>
          </div>
          <div>
            <font-awesome-icon :icon="['far', 'eye']" style="height: 15px" />
            <div>874</div>
          </div>
        </div>
      </div>
      <div class="detail-content flex-column align-items-center">
        <div class="">
          <img
            src="@/assets/img/building.jpg"
            class="px-4"
            alt="..."
            style="width: 500px"
          />
          <img
            src="@/assets/img/building.jpg"
            class="px-4"
            alt="..."
            style="width: 500px"
          />
        </div>
        <div class="mt-5 px-4">
          * 부산 대표 해수욕장, 해운대해수욕장 부산의 대표 해수욕장인
          해운대해수욕장. 백사장의 길이 1.5km, 너비 30~50m, 평균수심 1m, 면적
          58,400㎥의 규모로 넓은 백사장과 아름다운 해안선을 자랑하고 있으며 얕은
          수심과 잔잔한 물결로 해수욕장의 최적 조건을 갖추고 있다.'부산' 하면
          제일 먼저 떠올리는 곳이 해운대 해수욕장이라고 할 만큼 부산을 대표하는
          명소이며, 해마다 여름철 피서객을 가늠하는 척도로 이용될 만큼 국내 최대
          인파가 몰리는 곳이기도 하다. 특히, 해안선 주변에 크고 작은 빌딩들과
          고급 호텔들이 우뚝 솟아있어 현대적이고 세련된 분위기의 해수욕장으로
          유명하기 때문에 여름 휴가철뿐만 아니라 사시사철 젊은 열기로 붐비고
          해외 관광객들에게도 잘 알려져 있어 외국인들이 많이 찾는 곳이다. *
          해운대해수욕장의 다양한 축제와 즐길거리 해운대해수욕장에서는 매년 정월
          대보름날의 달맞이 축제를 진행하고 있다. 또한, 매년 겨울 주최하고 있는
          북극곰수영대회는 이미 겨울철 대표 축제로 자리잡았다. 이외에도 모래
          작품전, 부산 바다 축제 등 각종 크고 작은 행사들이 열리고 있다. 또한,
          해수욕장 주변에 동백섬, 오륙도, 아쿠아리움 , 요트경기장, 벡스코
          달맞이고개, 드라이브코스 등 볼거리가 많으며, 국내 1급 해수욕장답게
          주변에는 일급 호텔을 비롯한 숙박, 오락시설 및 유흥 시설들이 잘
          정비되어 있어 편안한 휴식을 즐길 수 있다.
        </div>
      </div>
      <div class="mt-4 mx-4 p-3 d-flex flex-column border border-dark-subtle">
        <div class="d-flex flex-column mt-3">
          <div class="mx-4 align-self-start">
            <p>전화번호 010-7777-8888</p>
          </div>
          <div class="mx-4 align-self-start">
            <p>웹사이트 www.sssss.com</p>
          </div>
        </div>
        <button
          type="button"
          class="justify-content-end btn btn-outline-secondary ms-auto mb-3 me-3"
        >
          정보 수정 업데이트
        </button>
      </div>
      <div class="mx-4 p-3 d-flex flex-column border border-dark-subtle">
          <div class="card" style="width: 18rem;">
          <img src="@/assets/img/building.jpg" class="card-img-top"  >
          <div class="card-body">
            <h5 class="card-title">어쩌고 다리</h5>
            <div class="d-flex flex-row justify-content-start">
              <font-awesome-icon :icon="['far', 'eye']" style="height: 15px " class="align-bottom pt-1"/>
              <div class="ms-2  align-top ">874</div>
              <button type="button" class="btn btn-secondary ms-auto">음식점</button>
            </div>
          </div>
        </div>

      </div>
      <div class="mx-4 p-3 d-flex flex-column border border-dark-subtle">
        map
      </div>
    
    </div>  
    <TheFooterNavBar />
  </div>
</template>

<style scoped>
.screen {
  background-color: transparent;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.detail-category {
  font-size: 12px;
  margin-left: 20px;
  align-self: flex-start; /* 수정된 부분 */
}

.detail-info,
.city-popular,
.city-recommand-path {
  margin-top: 20px;
  width: 80%;
  max-width: 1092px;
  margin-bottom: 100px;
}

.detail-info-title {
  background-color: #d7dbff;
  border-radius: 15px; /* 값을 조절하여 더 둥글게 만들 수 있습니다. */
  padding: 10px; /* 추가로 내용과의 간격을 조절할 수 있습니다. */
}

.detail-info-title > h3 {
  margin-left: 20px;
  margin-bottom: 20px;
  font-weight: bold;
}

.icon-text {
  flex-direction: column;
  display: flex;
  align-items: flex-start; /* 왼쪽 정렬을 유지하려면 추가 */
  margin-left: 20px;
}
.icon-text > div {
  flex-direction: row;
  display: flex;
  align-items: center;
}
.icon-text > div > * {
  margin-right: 10px;
}

.detail-content {
  margin-top: 20px;
  display: flex;
  /* border: 1px solid red; */
}

.icon-text > * {
  margin-left: 5px;
}
</style>
