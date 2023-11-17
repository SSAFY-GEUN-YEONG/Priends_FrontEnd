<script setup>
import MyPageHeader from "../layout/MyPageHeader.vue";
</script>

<template>
  <MyPageHeader />
  <div class="d-flex">
    <div class="">
      <ul class="flex-fill p-5 nav d-flex flex-column border-end">
        <li class="nav-item py-3">
          <!-- <a class="nav-link active" aria-current="page" href="#">알림</a> -->
          <router-link :to="{ name: 'mypage-alarm' }" class="nav-link"
            >알림</router-link
          >
        </li>

        <li class="nav-item py-3">
          <!-- <a class="nav-link" href/="#">내가 쓴 글</a> -->
          <router-link :to="{ name: 'mypage-myboard' }" class="nav-link"
            >내가 쓴 글</router-link
          >
        </li>
        <li class="nav-item py-3">
          <!-- <a class="nav-link" href="#">나의 여행 계획</a> -->
          <router-link :to="{ name: 'mypage-mypath' }" class="nav-link"
            >나의 여행 계획</router-link
          >
        </li>
        <li class="nav-item py-3">
          <!-- <a class="nav-link" href="#">회원 정보 수정</a> -->
          <router-link :to="{ name: 'mypage-info' }" class="nav-link"
            >회원 정보 수정</router-link
          >
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
