<script setup></script>

<template>
  <div>
    <div class="recommand-path-map"></div>
    <div class="recommand-path-info">
      <p>2023.11.11 출발</p>
      <p>2일간</p>
      <div class="icon-text">
        <font-awesome-icon :icon="['far', 'eye']" style="height: 15px" />
        <div>898</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.recommand-path-map {
  width: 260px;
  height: 260px;
  background-color: lightgray;
}
.icon-text {
  flex-direction: row;
  display: flex;
  align-items: center;
}
</style>
