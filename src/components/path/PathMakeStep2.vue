<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import VSelect from "@/components/common/VSelect.vue";
const router = useRouter();

const selectOption = ref([
  { text: "시 or 도", value: "" },
  { text: "글번호", value: "id" },
  { text: "제목", value: "title" },
  { text: "작성자", value: "nickname" },
]);

const cancelMakePath = () => {
  router.push({ name: "main" });
};
</script>

<template>
  <div class=" " style="width: 100%">
    <!--상단 네비-->
    <nav class="navbar navbar-expand-lg bg-body-tertiary p-0">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">여행 이름</a>
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
    <div class="d-flex flex-row border border-primary">
      <div class="border border-warning">
        <h3>관광지들</h3>
        <VSelect :selectOption="selectOption" @onKeySelect="changeKey" />
      </div>
      <div class="border border-black">
        <h3>내 여행 경로</h3>
        <div class="scrollable-container overflow-auto-x">
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Active</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="border border-danger" style="width: 500px; height: 100%">
        map
      </div>
    </div>
  </div>
</template>

<style scoped></style>
