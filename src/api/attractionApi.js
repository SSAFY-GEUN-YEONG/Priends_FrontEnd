import { localAxios } from "@/util/http-commons";

const local = localAxios();

function listArea(param, success, fail) {
  console.log("word: ", param);
  local.get(`/attraction/main`, { params: param }).then(success).catch(fail);
}

function getAttractionDetailApi(attractionId, success, fail) {
  local.get(`/attraction/${attractionId}/view`).then(success).catch(fail);
}

export { listArea, getAttractionDetailApi };
