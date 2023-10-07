<template>
  <div>
    <div><button @click="increment()">Click</button></div>
    <div>{{ $store.state.bookList }}</div>
  </div>
</template>

<script>
export default {
 setup(){
  console.log('setup');
 }
}
</script>

<style>
.w-100-custom {
  width: 100%;
}
</style>
