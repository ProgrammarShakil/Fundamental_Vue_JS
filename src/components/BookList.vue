<template>
  <div>
    <div>{{ studentName }}</div>
    <div>{{ $store.state.bookList }}</div>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
 setup(){
  const studentName = ref('Shakil Islam')

  return {studentName}
 }
}
</script>

<style>
.w-100-custom {
  width: 100%;
}
</style>
