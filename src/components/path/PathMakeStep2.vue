<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

import { listSido, listGugun } from "@/api/pathApi";
import PathMakeListItem from "@/components/path/item/PathMakeListItem.vue";

import VSelect from "@/components/common/VSelect.vue";
const router = useRouter();

const props = defineProps({
  path: {
    title: String,
    start_date: String,
    end_date: String,
  },
});

const sidoList = ref([]);
const gugunList = ref([{ text: "구군선택", value: "" }]);
const gugunDisable = ref(false);
const param = ref({
  // serviceKey: VITE_OPEN_API_SERVICE_KEY,
  // pageNo: 1,
  // numOfRows: 20,
  zscode: 0,
});

onMounted(() => {
  console.log("on mounted", props.path);
  getSidoList();
});

const getSidoList = () => {
  listSido(
    ({ data }) => {
      console.log("sido data : ", data.dataBody);
      let options = [];
      options.push({ text: "시도선택", value: "" });
      data.dataBody.forEach((sido) => {
        options.push({ text: sido.sido_name, value: sido.sido_code });
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
  if (val < 10) {
    gugunDisable.value = true;
    return;
  }
  listGugun(
    { sido: val },
    ({ data }) => {
      console.log("gugun data : ", data.dataBody);
      let options = [];
      options.push({ text: "시군선택", value: "" });
      data.dataBody.forEach((gugun) => {
        options.push({ text: gugun.gugun_name, value: gugun.gugun_code });
      });
      gugunList.value = options;
    },
    (err) => {
      console.log(err);
    }
  );
};

const onChangeGugun = (val) => {
  param.value.zscode = val;
  // getChargingStations();
};

const cancelMakePath = () => {
  router.push({ name: "main" });
};
</script>

<template>
  <div class="container-fluidp-0 border border-primary">
    <!--상단 네비-->
    <nav class="navbar navbar-expand-lg bg-body-tertiary p-0">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">{{ props.path.title }}</a>

        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <form class="d-flex" role="search">
            <button class="btn btn-outline-success me-2" type="submit">
              저장
            </button>
            <button
              class="btn btn-outline-success"
              type="button"
              @click="cancelMakePath"
            >
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
              @onKeySelect="onChangeSido"
            />

            <VSelect
              class="mx-3"
              :disabled="gugunDisable"
              :selectOption="gugunList"
              @onKeySelect="onChangeGugun"
            />
          </div>
          <nav class="navbar navbar-expand-lg">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mx-auto fw-bold">
                <li class="nav-item mx-1">
                  <router-link
                    :to="{ name: 'attraction' }"
                    class="nav-link d-flex flex-column align-items-center"
                    ><i class="bi bi-moon-stars me-1"></i>호텔</router-link
                  >
                </li>
                <li class="nav-item mx-1">
                  <router-link
                    :to="{ name: 'attraction' }"
                    class="nav-link d-flex flex-column align-items-center"
                    ><i class="bi bi-ticket-perforated me-1"></i
                    >문화생활</router-link
                  >
                </li>
                <li class="nav-item mx-1">
                  <router-link
                    :to="{ name: 'attraction' }"
                    class="nav-link d-flex flex-column align-items-center"
                  >
                    <img
                      class="icon-svg me-1"
                      src="@/assets/img/utensils.svg"
                    />음식점</router-link
                  >
                </li>
                <li class="nav-item mx-1">
                  <router-link
                    :to="{ name: 'attraction' }"
                    class="nav-link d-flex flex-column align-items-center"
                    ><i class="bi bi-shop-window me-1"></i>마켓</router-link
                  >
                </li>
                <li class="nav-item mx-1">
                  <router-link
                    :to="{ name: 'attraction' }"
                    class="nav-link d-flex flex-column align-items-center"
                    ><i class="bi bi-tsunami me-1"></i>액티비티</router-link
                  >
                </li>
                <li class="nav-item mx-1">
                  <router-link
                    :to="{ name: 'attraction' }"
                    class="nav-link d-flex flex-column align-items-center"
                    ><i class="bi bi-tree me-1"></i> 자연</router-link
                  >
                </li>
              </ul>
            </div>
          </nav>
          <div><PathMakeListItem type="attraction"></PathMakeListItem></div>
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
        <div><PathMakeListItem type="mypath"></PathMakeListItem></div>
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
</style>
