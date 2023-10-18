import { reactive, toRefs, computed } from "vue";

//naming export
export const stateData = () => {
  const state = reactive({
    firstName: "Shakil",
    lastName: "islam",
    fullName: computed(() => {
      return `${state.firstName} ${state.lastName}`;
    }),
  });

  return { ...toRefs(state) };
};
