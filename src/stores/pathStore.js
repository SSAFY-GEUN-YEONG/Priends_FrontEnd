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

  return { pathInfo };
});
