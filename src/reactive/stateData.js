import { reactive, toRefs, computed } from "vue";

//naming export
export const stateData = () => {
  const state = reactive({
    demoPosts: []
  });

  return { ...toRefs(state) };
};
