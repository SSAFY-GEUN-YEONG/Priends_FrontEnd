import { ref } from "vue";
import { defineStore } from "pinia";

export const usePathStore = defineStore("pathStore", () => {
  const pathInfo = ref({
    title: "",
    content: "",
    startDate: "",
    endDate: "",
    id: "",
  });

  const reset = () => {
    pathInfo.value.title = "";
    pathInfo.value.content = "";
    pathInfo.value.startDate = "";
    pathInfo.value.endDate = "";
    pathInfo.value.id = "";
  };

  return { pathInfo, reset };
});
