<script setup>
import PathListItem from "./item/PathListItem.vue";
import { ref, onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getPathList } from "@/api/pathApi.js";

const route = useRoute();
const router = useRouter();

const pathList = ref([]);

onBeforeMount(() => {
  getListPath();
});

const getListPath = () => {
  console.log("path 목록 가져오기!");
  getPathList(
    { isMy: false },
    ({ data }) => {
      // console.log(data.dataBody);
      pathList.value = data.dataBody;
      console.log("pathList : ", pathList.value);
    },
    (error) => {
      console.log(error);
    }
  );
};

function goToPathDetail(id) {
  router.push({
    name: "path-detail",
    params: { pathId: id },
  });
}
</script>

<template>
  <div class="d-flex flex-column align-items-center">
    <div
      class="search-area d-flex flex-column align-items-center justify-content-center">
      <div class="text-wrapper text-center pb-5">
        Priends의 여행 계획을 살펴보세요!
      </div>
      <div
        class="div-search-area d-flex flex-column justify-content-center align-items-center">
        <div>
          <input
            type="text"
            class="input"
            placeholder="계획하고 싶은 도시를 입력하세요." />
          <p class="recommend_city pt-3 mb-0">추천도시 : 제주, 부산, 서울</p>
        </div>
      </div>
    </div>

    <div class="major-city">
      <table class="table">
        <tbody>
          <tr>
            <th scope="row">주요도시</th>
            <td>
              <router-link
                class="text-dark"
                :to="{
                  name: 'attraction-area',
                  params: { areaname: '서울' },
                }"
                @click="() => setCityName('서울')"
                >서울</router-link
              >
            </td>
            <td>
              <router-link
                class="text-dark"
                :to="{ name: 'attraction-area', params: { areaname: '제주' } }"
                @click="() => setCityName('제주')"
                >제주</router-link
              >
            </td>
            <td>
              <router-link
                class="text-dark"
                :to="{ name: 'attraction-area', params: { areaname: '부산' } }"
                @click="() => setCityName('부산')"
                >부산</router-link
              >
            </td>
            <td>
              <router-link
                class="text-dark"
                :to="{ name: 'attraction-area', params: { areaname: '대구' } }"
                @click="() => setCityName('대구')"
                >대구</router-link
              >
            </td>
            <td>
              <router-link
                class="text-dark"
                :to="{ name: 'attraction-area', params: { areaname: '인천' } }"
                @click="() => setCityName('인천')"
                >인천</router-link
              >
            </td>
            <td>
              <router-link
                class="text-dark"
                :to="{ name: 'attraction-area', params: { areaname: '광주' } }"
                @click="() => setCityName('광주')"
                >광주</router-link
              >
            </td>
            <td>
              <router-link
                class="text-dark"
                :to="{ name: 'attraction-area', params: { areaname: '울산' } }"
                @click="() => setCityName('울산')"
                >울산</router-link
              >
            </td>
            <td>
              <router-link
                class="text-dark"
                :to="{ name: 'attraction-area', params: { areaname: '대전' } }"
                @click="() => setCityName('대전')"
                >대전</router-link
              >
            </td>
          </tr>
          <tr>
            <th scope="row" rowspan="2">주요지역</th>
            <td @click="clickDoEvent('강원도')">
              <a>강원도</a>
            </td>
            <td @click="clickDoEvent('경기도')">
              <a>경기도</a>
            </td>
            <td @click="clickDoEvent('경상남도')">
              <a>경상남도</a>
            </td>
            <td @click="clickDoEvent('경상북도')">
              <a>경상북도</a>
            </td>
            <td @click="clickDoEvent('전라남도')">
              <a>전라남도</a>
            </td>
            <td @click="clickDoEvent('전라북도')">
              <a>전라북도</a>
            </td>
            <td @click="clickDoEvent('충청남도')">
              <a>충청남도</a>
            </td>
            <td @click="clickDoEvent('충청북도')">
              <a>충청북도</a>
            </td>
          </tr>
          <tr>
            <td>
              <router-link
                class="text-dark"
                :to="{
                  name: 'attraction-area',
                  params: { areaname: '가평' },
                }"
                @click="() => setCityName('가평')"
                >가평</router-link
              >
            </td>
            <td>
              <router-link
                class="text-dark"
                :to="{
                  name: 'attraction-area',
                  params: { areaname: '강릉' },
                }"
                @click="() => setCityName('강릉')"
                >강릉</router-link
              >
            </td>
            <td>
              <router-link
                class="text-dark"
                :to="{
                  name: 'attraction-area',
                  params: { areaname: '경주' },
                }"
                @click="() => setCityName('경주')"
                >경주</router-link
              >
            </td>
            <td>
              <router-link
                class="text-dark"
                :to="{
                  name: 'attraction-area',
                  params: { areaname: '목포' },
                }"
                @click="() => setCityName('목포')"
                >목포</router-link
              >
            </td>
            <td>
              <router-link
                class="text-dark"
                :to="{
                  name: 'attraction-area',
                  params: { areaname: '속초' },
                }"
                @click="() => setCityName('속초')"
                >속초</router-link
              >
            </td>
            <td>
              <router-link
                class="text-dark"
                :to="{
                  name: 'attraction-area',
                  params: { areaname: '양양' },
                }"
                @click="() => setCityName('양양')"
                >양양</router-link
              >
            </td>
            <td>
              <router-link
                class="text-dark"
                :to="{
                  name: 'attraction-area',
                  params: { areaname: '여수' },
                }"
                @click="() => setCityName('여수')"
                >여수</router-link
              >
            </td>
            <td>
              <router-link
                class="text-dark"
                :to="{
                  name: 'attraction-area',
                  params: { areaname: '전주' },
                }"
                @click="() => setCityName('전주')"
                >전주</router-link
              >
            </td>
            <td>
              <router-link
                class="text-dark"
                :to="{
                  name: 'attraction-area',
                  params: { areaname: '춘천' },
                }"
                @click="() => setCityName('춘천')"
                >춘천</router-link
              >
            </td>
            <td>
              <router-link
                class="text-dark"
                :to="{
                  name: 'attraction-area',
                  params: { areaname: '포항' },
                }"
                @click="() => setCityName('포항')"
                >포항</router-link
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="d-flex flex-column">
      <div
        class="d-flex justify-content-between align-items-center mb-2 path-list-item">
        <div class="">
          <button class="btn">인기</button> |
          <button class="btn">신규</button>
        </div>
        <p class="plan-count mb-0 me-1">총 1234개의 계획</p>
      </div>
      <div class="d-flex flex-row justify-content-between mb-5">
        <!-- <AttractionCityItem
          v-for="item in selectedAttractions"
          :key="item.content_id"
          :attraction="item"
          @click="goToAttracitionDetail(item.content_id)">
        </AttractionCityItem> -->

        <PathListItem
          v-for="item in pathList"
          :key="item.id"
          :pathInfo="item"
          @click="goToPathDetail(item.id)">
        </PathListItem>
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

.search-area .recommend_city {
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
