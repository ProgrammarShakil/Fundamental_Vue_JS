<template>
  <div>
    <div>{{ firstName }}</div>
    <div>{{ lastName }}</div>
  </div>
</template>

<script>
import {stateData} from "../reactive/stateData"; //naming import
export default {
  setup() {
    let { firstName, lastName } = stateData(); //destructuring
    return {firstName, lastName}
  },
};
</script>

<style>
.w-100-custom {
  width: 100%;
}
</style>
