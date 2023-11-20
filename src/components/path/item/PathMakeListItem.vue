<script setup>
const props = defineProps({ type: String });
</script>

<template>
  <div class="item-attraction">
    <div class="item-attraction-img"></div>
    <div>
      서울 시청 <br />
      서울시 어쩌고 저쩌고

      <div
        v-if="props.type == `attraction`"
        class="d-flex flex-row align-items-center pt-2"
      >
        <div class="d-flex flex-row align-items-center me-2">
          <font-awesome-icon :icon="['far', 'heart']" style="height: 15px" />
          <p class="m-0 ms-2">234</p>
        </div>
        <div class="d-flex flex-row align-items-center me-4">
          <font-awesome-icon :icon="['far', 'eye']" style="height: 15px" />
          <p class="m-0 ms-2">234</p>
        </div>
      </div>
    </div>

    <div
      class="d-flex flex-column justify-contnet-end align-items-center ms-auto me-1"
    >
      <Button v-if="props.type == `attraction`" class="btn p-0 mb-3"
        ><i class="bi bi-plus-circle justify-content-center fs-4"></i
      ></Button>
      <Button v-else class="btn p-0 mb-3"
        ><i class="bi bi-trash3 justify-content-center fs-4"></i
      ></Button>
      <Button class="btn"
        ><font-awesome-icon
          :icon="['fas', 'circle-info']"
          class="icon icon-info"
      /></Button>
    </div>
  </div>
  <!-- 경로에서 삭제 -->
  <!-- -->
</template>

<style scoped>
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

.icon-info {
  width: 25px;
  height: 25px;
  color: #492268;
}
</style>
