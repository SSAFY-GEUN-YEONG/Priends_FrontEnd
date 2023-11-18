import { ref } from "vue";
import { defineStore } from "pinia";

export const useAttractionStore = defineStore("attractionStore", () => {
	const cityname = ref("");

	const areainfo = ref({
		img: "",
		natureAttractions: [],
		restaurantAttractions: [],
		cultureAttractions: [],
	  });
	
	return {
		cityname, 
		areainfo
	};
});
	