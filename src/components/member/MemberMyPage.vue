<script setup>
import { onMounted } from 'vue';
import { useMemberStore } from "@/stores/memberStore";
import { storeToRefs } from 'pinia';

const memberStore = useMemberStore();
const { memberInfo } = storeToRefs(memberStore);

onMounted(() => {
  memberStore.memberGet();
});
</script>

<template>
  <div>
    MyPage
    <!-- 내정보 표시 -->
    <div v-if="memberInfo">
      <!-- memberInfo 객체의 속성을 사용하여 정보를 표시합니다. -->
      <p>이메일: {{ memberInfo.email }}</p>
      <p>닉네임: {{ memberInfo.nickname }}</p>
      <!-- <p>이미지 url: {{ memberInfo.image }}</p> -->
      <p>알람여부: {{ memberInfo.alarm }}</p>
      <!-- 기타 필요한 정보를 여기에 추가합니다. -->
    </div>
  </div>
</template>
