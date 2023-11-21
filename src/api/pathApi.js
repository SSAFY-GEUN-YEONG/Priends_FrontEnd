import { localAxios } from "@/util/http-commons";

const local = localAxios();

function listSido(success, fail) {
  local.get(`/path/make/sido`).then(success).catch(fail);
}

function listGugun(param, success, fail) {
  local.get(`/path/make/gugun`, { params: param }).then(success).catch(fail);
}

function createPath(param, success, fail) {
  // console.log("param", param);
  local.post(`/path/create`, JSON.stringify(param)).then(success).catch(fail);
}

function createAndUpdatePathDetails(param, success, fail) {
  console.log("param", param);
  local
    .post(
      `/path/detail/create/${param.id}`,
      JSON.stringify(param.myAttractionList)
    )
    .then(success)
    .catch(fail);
}

function getPathList(param, success, fail) {
  local.get(`/path/get/list`, { params: param }).then(success).catch(fail);
}

export {
  listSido,
  listGugun,
  createPath,
  createAndUpdatePathDetails,
  getPathList,
};
