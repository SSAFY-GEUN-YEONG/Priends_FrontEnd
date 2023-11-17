import { localAxios } from "@/util/http-commons";

const local = localAxios();

async function memberLoginApi(param, success, fail) {
  console.log("param", param);
  await local.post(`/member/login`, param).then(success).catch(fail);
  console.log("meberConfirm ok");
}

async function tokenRegeneration(user, success, fail) {
  local.defaults.headers["refreshToken"] = sessionStorage.getItem("refreshToken"); //axios header에 refresh-token 셋팅
  await local.post(`/user/refresh`, user).then(success).catch(fail);
}

async function memberLogoutApi(success, fail) {
  await local.get(`/member/logout`).then(success).catch(fail);
}

async function memberGetApi(success, fail) {
  await local.get(`/member/get`).then(success).catch(fail);
}

export { memberLoginApi, memberLogoutApi, tokenRegeneration, memberGetApi };
