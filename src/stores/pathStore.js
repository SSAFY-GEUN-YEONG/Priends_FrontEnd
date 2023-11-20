import { ref } from "vue";
import { defineStore } from "pinia";

export const usePathStore = defineStore("pathStore", () => {
  const pathInfo = ref({
    title: "",
    start_date: "",
    end_date: "",
    id: "",
  });

  return { pathInfo };
});
