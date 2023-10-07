<template>
  <div>
    <button @click="callDemoPosts()">Call Demo Posts</button>
    <div>{{ demoPosts }}</div>
    <div>{{ $store.state.bookList }}</div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {

    const demoPosts = ref([]);

    function callDemoPosts(){
      fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => response.json())
        .then((data) => {
          demoPosts.value = data
        });
    }

    return { callDemoPosts, demoPosts };
  },
};
</script>

<style>
.w-100-custom {
  width: 100%;
}
</style>
