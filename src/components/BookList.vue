<template>
  <div>
    <div>{{ studentFullName }}</div>
    <div>{{ $store.state.bookList }}</div>
  </div>
</template>

<script>
import {computed, ref} from 'vue'
export default {
 setup(){
  const studentFirstName = ref('Shakil')
  const studentLastName = ref('Islam')

  const studentFullName = computed(()=> {
    return `${studentFirstName.value} ${studentLastName.value}`
  })
  return {studentFullName}
 }
}
</script>

<style>
.w-100-custom {
  width: 100%;
}
</style>
