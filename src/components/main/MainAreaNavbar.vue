<script setup>
import "@/assets/css/mainAreaNavbar.css";
</script>

<template>
  <div class="container">
    <nav
      class="container d-flex flex-column align-items-center navbar navbar-expand-lg"
    >
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav p-3 ul-border">
          <li class="nav-item mx-2 rounded-pill li-back">
            <router-link
              :to="{ name: 'attraction' }"
              class="nav-link text-dark bg-opacity-25"
              >서울</router-link
            >
          </li>
          <li class="nav-item mx-2 rounded-pill li-back">
            <router-link
              :to="{ name: 'attraction' }"
              class="nav-link text-dark bg-opacity-25"
              >부산</router-link
            >
          </li>
          <li class="nav-item mx-2 rounded-pill li-back">
            <router-link
              :to="{ name: 'attraction' }"
              class="nav-link text-dark bg-opacity-25"
              >대구</router-link
            >
          </li>
          <li class="nav-item mx-2 rounded-pill li-back">
            <router-link
              :to="{ name: 'attraction' }"
              class="nav-link text-dark bg-opacity-25"
              >인천</router-link
            >
          </li>
          <li class="nav-item mx-2 rounded-pill li-back">
            <router-link
              :to="{ name: 'attraction' }"
              class="nav-link text-dark bg-opacity-25"
              >광주</router-link
            >
          </li>
          <li class="nav-item mx-2 rounded-pill li-back">
            <router-link
              :to="{ name: 'attraction' }"
              class="nav-link text-dark bg-opacity-25"
              >울산</router-link
            >
          </li>
          <li class="nav-item mx-2 rounded-pill li-back">
            <router-link
              :to="{ name: 'attraction' }"
              class="nav-link text-dark bg-opacity-25"
              >세종</router-link
            >
          </li>
          <li class="nav-item mx-2 rounded-pill li-back">
            <router-link
              :to="{ name: 'attraction' }"
              class="nav-link text-dark bg-opacity-25"
              >경기</router-link
            >
          </li>
          <li class="nav-item mx-2 rounded-pill li-back">
            <router-link
              :to="{ name: 'attraction' }"
              class="nav-link text-dark bg-opacity-25"
              >강원</router-link
            >
          </li>
          <li class="nav-item mx-2 rounded-pill li-back">
            <router-link
              :to="{ name: 'attraction' }"
              class="nav-link text-dark bg-opacity-25"
              >충북</router-link
            >
          </li>
          <li class="nav-item mx-2 rounded-pill li-back">
            <router-link
              :to="{ name: 'attraction' }"
              class="nav-link text-dark bg-opacity-25"
              >충남</router-link
            >
          </li>
          <li class="nav-item mx-2 rounded-pill li-back">
            <router-link
              :to="{ name: 'attraction' }"
              class="nav-link text-dark bg-opacity-25"
              >전북</router-link
            >
          </li>
          <li class="nav-item mx-2 rounded-pill li-back">
            <router-link
              :to="{ name: 'attraction' }"
              class="nav-link text-dark bg-opacity-25"
              >전남</router-link
            >
          </li>
          <li class="nav-item mx-2 rounded-pill li-back">
            <router-link
              :to="{ name: 'attraction' }"
              class="nav-link text-dark bg-opacity-25"
              >경북</router-link
            >
          </li>
          <li class="nav-item mx-2 rounded-pill li-back">
            <router-link
              :to="{ name: 'attraction' }"
              class="nav-link text-dark bg-opacity-25"
              >경남</router-link
            >
          </li>
          <li class="nav-item mx-2 rounded-pill li-back">
            <router-link
              :to="{ name: 'attraction' }"
              class="nav-link text-dark bg-opacity-25"
              >제주</router-link
            >
          </li>
        </ul>
      </div>
      <div class="test input-group my-3 px-5">
        <span class="input-group-text" style="background-color: transparent">
          <i class="bi bi-search my-auto mx-2"></i>
        </span>
        <input type="text" class="form-control" />
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          검색
        </button>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.ul-border {
  border-radius: 10px;
  border: 1px solid #b185db;
}
.li-back {
  background-color: #d2b7e5;
  padding: 0 1px;
  font-size: 12px;
}

.test {
  width: 81.5%;
}
</style>
