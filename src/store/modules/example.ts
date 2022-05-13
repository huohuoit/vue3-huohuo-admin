import { store } from "/@/store";
import { defineStore } from "pinia";

export const useTestStore = defineStore({
  id: "huohuo-test",
  state: () => ({
    msg: "I am HuoHuo!"
  }),
  getters: {
    getMsg() {
      return this.msg;
    }
  },
  actions: {
    handleMsg(val) {
      this.msg = val;
    }
  }
});

export function useTestStoreHook() {
  return useTestStore(store);
}
