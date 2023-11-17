import { createApp } from "vue";
import { createPinia } from "pinia";
import { useMemberStore } from "@/stores/memberStore";
import VueCookies from "vue3-cookies";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap";

// fontawesome import
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(fas, far, fab);

const app = createApp(App);
const pinia = createPinia();

pinia.use(piniaPluginPersistedstate);

app.use(pinia);

const memberStore = useMemberStore();
memberStore.memberCheckLoginStatus(); // 애플리케이션 시작 시 로그인 상태 확인
// 라우터 가드에서 호출할 로그인 상태 초기화 함수
const initializeLoginStatus = () => {
  const memberStore = useMemberStore();
  const accessToken = sessionStorage.getItem("accessToken");
  //   const menuStore = useMenuStore();

  if (accessToken) {
    memberStore.isLogin = true;
    // menuStore.changeMenuState();
    // 필요하다면 여기에서 accessToken을 사용하여 사용자 정보를 가져오는 로직 추가
  }
};

router.beforeEach((to, from, next) => {
  initializeLoginStatus(); // 라우팅 전 로그인 상태 확인
  next();
});

// const memberStore = useMemberStore();
// memberStore.initializeLoginStatus(); // 로그인 상태 초기화

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router);

app.use(VueCookies);
app.mount("#app");
