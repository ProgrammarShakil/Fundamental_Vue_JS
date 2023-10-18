<template>
  <div>
    <!-- <button @click="callDemoPosts()">Call Demo Posts</button>
    <div>{{ demoPosts }}</div>
    <div>{{ $store.state.bookList }}</div> -->
    <div>{{ state.firstName }}</div>
    <div>{{ state.lastName }}</div>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
export default {
  setup() {

    const state=reactive({
      firstName: 'Shakil',
      lastName: 'islam',
      fullName:computed(()=>{
        return `${state.firstName} ${state.lastName}`
      })
    })

    // const demoPosts = ref([]);

    // function callDemoPosts(){
    //   fetch("https://jsonplaceholder.typicode.com/todos/1")
    //     .then((response) => response.json())
    //     .then((data) => {
    //       demoPosts.value = data
    //     });
    // }

    return { state };
  },
};
</script>

<style>
.w-100-custom {
  width: 100%;
}
</style>
