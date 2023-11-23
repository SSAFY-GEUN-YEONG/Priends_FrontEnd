import { localAxios } from "@/util/http-commons";

const local = localAxios();

function listArea(param, success, fail) {
  console.log("word: ", param);
  local.get(`/attraction/main`, { params: param }).then(success).catch(fail);
}

function getAttractionDetailApi(attractionId, success, fail) {
  return local
    .get(`/attraction/${attractionId}/view`)
    .then(success)
    .catch(fail);
}

// 특정 지역 정보 home 가져오기
function getAreaInfo(param, success, fail) {
  console.log("area : ", `${param.city} ${param.category}`);
  return local
    .get(`/attraction/area/${param.city}/home`, { params: param })
    .then(success)
    .catch(fail);
}

// 특정 지역 정보 category별 list 가져오기
function getAreaListByCategory(param, success, fail) {
  console.log("area : ", `${param.city} ${param.category}`);
  local
    .get(`/attraction/area/${param.city}/${param.category}`, { params: param })
    .then(success)
    .catch(fail);
}

function getAreaName(param, success, fail) {
  console.log("area : ", param);
  local
    .get(`/attraction/area/get/name`, { params: param })
    .then(success)
    .catch(fail);
}

export {
  listArea,
  getAreaInfo,
  getAreaListByCategory,
  getAttractionDetailApi,
  getAreaName,
};
