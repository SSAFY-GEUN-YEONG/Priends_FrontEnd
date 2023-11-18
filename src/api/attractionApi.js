import { localAxios } from "@/util/http-commons";

const local = localAxios();

 
  function listArea(param, success, fail) {
	console.log("word: ", param);
	local.get(`/attraction/main`, { params: param }).then(success).catch(fail);
  }

// 특정 지역 정보 가져오기
function getAreaInfo(param,success, fail) {
	console.log("area : ", `${param.city} ${param.category}`);
	local.get(`/attraction/area/${param.city}/${param.category}`, { params: param }).then(success).catch(fail);
}

export { 
	listArea,
	getAreaInfo
  };
  