<script setup>
import { ref, watch, onMounted } from "vue";
import { useRouter } from "vue-router";

import { usePathStore } from "@/stores/pathStore";
import { useAttractionStore } from "@/stores/attractionStore";
import { storeToRefs } from "pinia";

import { listSido, listGugun } from "@/api/pathApi";
import { getAreaListByCategory } from "@/api/attractionApi";

import PathMakeListItem from "@/components/path/item/PathMakeListItem.vue";
import VSelect from "@/components/common/VSelect.vue";

const router = useRouter();

const pathStore = usePathStore();
const { pathInfo } = storeToRefs(pathStore);

const attractionStore = useAttractionStore();
const { attractionList } = storeToRefs(attractionStore);

const sidoList = ref([]);
const gugunList = ref([{ text: "구군선택", value: "" }]);
const gugunDisable = ref(false);

const param = ref({
  // serviceKey: VITE_OPEN_API_SERVICE_KEY,
  // pageNo: 1,
  // numOfRows: 20,
  zscode: 0,
  city: "",
  category: "",
  litmit: 0,
});

onMounted(() => {
  attractionStore.attractionList = [];
  console.log("on mounted", pathInfo.value);
  console.log("attraction list ", attractionList.value);
  getSidoList();
});

const getSidoList = () => {
  listSido(
    ({ data }) => {
      console.log("sido data : ", data.dataBody);
      let options = [];
      options.push({ text: "시도선택", value: { code: 0, name: "" } });
      data.dataBody.forEach((sido) => {
        options.push({
          text: sido.sido_name,
          value: { code: sido.sido_code, name: sido.sido_name },
        });
      });
      sidoList.value = options;
      console.log(sidoList.value);
    },
    (err) => {
      console.log(err);
    }
  );
};
const onChangeSido = (val) => {
  console.log("val", val); //시도 코드
  if (val.code < 10) {
    gugunList.value = [{ text: "시군선택", value: { code: 0, name: "" } }]; // 초기화
    onChangeGugun({ code: 0 });
    gugunDisable.value = true;
    param.value.city = val.name;
    console.log(param.value);
    return;
  } else {
    gugunDisable.value = false;
  }
  listGugun(
    { sido: val.code },
    ({ data }) => {
      console.log("gugun data : ", data.dataBody);
      let options = [];
      options.push({ text: "시군선택", value: { code: 0, name: "" } });
      data.dataBody.forEach((gugun) => {
        options.push({
          text: gugun.gugun_name,
          value: { code: gugun.gugun_code, name: gugun.gugun_name },
        });
      });
      gugunList.value = options;
    },
    (err) => {
      console.log(err);
    }
  );
};

const onChangeGugun = (val) => {
  param.value.zscode = val.code;
  param.value.city = val.name;
  console.log("onchange gugun ", param.value);
};

//관광지 검색 카테고리
function selectCategory(category) {
  param.value.category = category;
  console.log("selectCategory", param.value);
}
//카테고리가 변경되면 db에서 새로 가져와야함
watch(
  () => param.value.category,
  () => {
    console.log("watch : ", param.value.category);
    getAreaListByCategory(
      param.value,
      ({ data }) => {
        console.log(data.dataBody);
        attractionList.value = data.dataBody;
        console.log("watch attractionList", attractionList.value);
      },
      (error) => {
        console.log(error);
      }
    );
  }
);

const cancelMakePath = () => {
  router.push({ name: "main" });
};
</script>

<template>
  <div
    class="container-fluid p-0 border border-primary"
    style="height: fit-content">
    <!--상단 네비-->
    <nav class="navbar navbar-expand-lg bg-body-tertiary p-0">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">{{ pathInfo.title }}</a>

        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <button class="btn btn-outline-success me-2" type="submit">
              저장
            </button>
            <button
              class="btn btn-outline-success"
              type="button"
              @click="cancelMakePath">
              취소
            </button>
          </form>
        </div>
      </div>
    </nav>
    <div class="row">
      <div class="col-3 border">
        <h3 class="my-3 ms-2">관광지 검색</h3>
        <div class=" ">
          <div class="d-flex m-auto">
            <VSelect
              class="mx-3"
              :selectOption="sidoList"
              @onKeySelect="onChangeSido" />

            <VSelect
              class="mx-3"
              :disabled="gugunDisable"
              :selectOption="gugunList"
              @onKeySelect="onChangeGugun" />
          </div>
          <nav class="navbar navbar-expand-lg">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mx-auto fw-bold">
                <li class="nav-item mx-1">
                  <a
                    class="nav-link d-flex flex-column align-items-center"
                    @click="selectCategory('hotel')"
                    href="#"
                    ><i class="bi bi-moon-stars me-1"></i>호텔</a
                  >
                </li>
                <li class="nav-item mx-1">
                  <a
                    class="nav-link d-flex flex-column align-items-center"
                    @click="selectCategory('culture')"
                    href="#"
                    ><i class="bi bi-ticket-perforated me-1"></i>문화생활</a
                  >
                </li>
                <li class="nav-item mx-1">
                  <a
                    class="nav-link d-flex flex-column align-items-center"
                    @click="selectCategory('restaurant')"
                    href="#"
                    ><img
                      class="icon-svg me-1 my-1"
                      src="@/assets/img/utensils.svg" />음식점</a
                  >
                </li>
                <li class="nav-item mx-1">
                  <a
                    class="nav-link d-flex flex-column align-items-center"
                    @click="selectCategory('market')"
                    href="#"
                    ><i class="bi bi-shop-window me-1"></i>마켓</a
                  >
                </li>
                <li class="nav-item mx-1">
                  <a
                    class="nav-link d-flex flex-column align-items-center"
                    @click="selectCategory('activity')"
                    href="#"
                    ><i class="bi bi-tsunami me-1"></i>액티비티</a
                  >
                </li>
                <li class="nav-item mx-1">
                  <a
                    class="nav-link d-flex flex-column align-items-center"
                    @click="selectCategory('nature')"
                    href="#"
                    ><i class="bi bi-tree me-1"></i>자연</a
                  >
                </li>
              </ul>
            </div>
          </nav>
          <div
            v-if="attractionList && attractionList.length > 0"
            class="attraction-list">
            <PathMakeListItem
              v-for="item in attractionList"
              :key="item.content_id"
              :attraction="item"
              itemType="attraction"></PathMakeListItem>
          </div>
          <div v-else></div>
        </div>
      </div>
      <div class="border col-3">
        <h3 class="my-3 ms-2">내 여행 경로</h3>
        <div class="scrollable-container overflow-auto-x">
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Day1</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Day2</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Day3</a>
            </li>
          </ul>
        </div>
        <!-- <div><PathMakeListItem itemType="mypath"></PathMakeListItem></div> -->
      </div>
      <div class="col-6 border border-danger">map</div>
    </div>
  </div>
</template>

<style scoped>
.icon-svg {
  width: 16px;
  height: 16px;
  margin-top: 8px;
}

.attraction-list {
  max-height: 800px; /* 스크롤이 나타날 최대 높이 */
  overflow-y: auto; /* 세로 스크롤 활성화 */
}
</style>
