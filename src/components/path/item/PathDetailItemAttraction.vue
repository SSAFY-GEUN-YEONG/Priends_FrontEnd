<script setup></script>

<template>
  <div class="path-distance">
    <font-awesome-icon
      :icon="['fasl', 'ellipsis-vertical']"
      class="icon distance"
    />11.11km
  </div>
  <div class="item-attraction">
    <div class="item-attraction-img"></div>
    <p>서울 시청</p>
    <div class="item-attraction-info">
      <font-awesome-icon
        :icon="['fas', 'circle-info']"
        class="icon icon-info"
      />
      <font-awesome-icon
        :icon="['fas', 'location-dot']"
        class="icon icon-info"
      />
    </div>
  </div>
</template>

<style scoped>
.path-distance {
  border: 1px solid lightgray;
  font-size: 10px;
}

.item-attraction {
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
}

.item-attraction-img {
  width: 100px;
  height: 100px;
  background-image: url("@/assets/img/building.jpg");
  background-size: cover;
  background-position: center;
  margin: 10px;
}
.item-attraction-info {
  display: flex;
  margin-left: auto;
  margin-right: 20px;
}

.icon {
  margin: 0 5px;
}

.icon-info {
  width: 25px;
  height: 25px;
  color: #492268;
}

.distance {
  margin-left: 50px;
  width: 4px;
}
</style>
