<script setup>
// 받을 props를 정의
const props = defineProps({
  title: String,
  image: String,
  addr1: String
});
</script>

<template>
  <div class="my-5 recommend-attraction-cover d-flex align-items-end" :style="{ backgroundImage: `url(${props.image})` }">
    <div class="ps-3">
      <p class="text-white fw-bolder">{{ props.title }}</p>
    </div>
  </div>
</template>

<style scoped>
.recommend-attraction-cover {
  width: 250px;
  height: 250px;
  /* background-image: url("@/assets/img/field.jpg"); */
  background-size: cover;
}

</style>
