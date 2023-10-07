<template>
  <div>
    <div><button @click="increment()">Click</button></div>
    <div>{{ $store.state.bookList }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "shakil islam",
    };
  },

  methods: {
   
  },
};
</script>

<style>
.w-100-custom {
  width: 100%;
}
</style>
