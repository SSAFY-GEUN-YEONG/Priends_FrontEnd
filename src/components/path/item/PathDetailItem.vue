<script setup>
import PathDetailItemAttraction from "./PathDetailItemAttraction.vue";
</script>

<template>
  <div class="path-detail-item">
    <div class="path-detail-title">
      <h4>DAY1</h4>
      <div class="path-detail-date-city">
        <p>2023.11.11(일)</p>
        <p>서울</p>
      </div>
    </div>
    <PathDetailItemAttraction />
    <PathDetailItemAttraction />
    <PathDetailItemAttraction />
    <PathDetailItemAttraction />
  </div>
</template>

<style scoped>
.path-detail-item {
  margin-bottom: 20px;
}
.path-detail-title {
  display: flex;
  align-items: center;
  border: 1px solid black;
}

.path-detail-title h4 {
  padding: 10px;
  margin: 0 15px;
}

.path-detail-date-city {
  border-left: 1px solid black;
  font-size: 15px;
  padding-left: 10px;
  padding-top: 10px;
}
</style>
