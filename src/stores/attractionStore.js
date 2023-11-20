import { ref } from "vue";
import { defineStore } from "pinia";
import { getAttractionDetailApi } from "@/api/attractionApi";

export const useAttractionStore = defineStore("attractionStore", () => {
  const cityname = ref("");
  const category = ref("");
  const attractionDetail = ref(null);

  const areainfo = ref({
    img: "",
    natureAttractions: [],
    restaurantAttractions: [],
    cultureAttractions: [],
  });

  const attractionList = ref([]);

  const getAttractionDetail = async (attractionId) => {
    await getAttractionDetailApi(
      attractionId,
      (response) => {
        console.log(response.data);
        attractionDetail.value = response.data.dataBody;
        // // 서버에서 성공적인 응답을 받았을 때
        // if (response.data.dataHeader.successCode === 0) {
        //   attractionDetail.value = response.data.dataBody;
        // }
        // // 서버에서 실패 응답을 받았을 경우
        // else {
        // }
      },
      (error) => {
        console.error("여행지 관광정보 상세 받아오기 실패: ", error);
      }
    );
  };

  return {
    cityname,
    category,
    areainfo,
    attractionDetail,
    attractionList,
    getAttractionDetail,
  };
});
