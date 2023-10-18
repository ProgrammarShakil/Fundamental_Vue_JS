<template>
  <div>
    <button @click="callDemoPosts()">Call Demo Posts</button>
    <div>{{ demoPosts }}</div>
  </div>
</template>

<script>
import { stateData } from "../reactive/stateData";
export default {
  setup() {
    const { demoPosts } = stateData();

    function callDemoPosts() {
      fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          demoPosts.value = data;
        });
    }

    return {callDemoPosts, demoPosts}
  },
};
</script>

<style>
.w-100-custom {
  width: 100%;
}
</style>
