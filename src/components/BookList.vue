<template>
  <div>
    <div>{{ demoPosts }}</div>
    <div>{{ $store.state.bookList }}</div>
  </div>
</template>

<script>
import { onMounted, computed, ref } from "vue";
export default {
  setup() {
    const studentFirstName = ref("Shakil");
    const studentLastName = ref("Islam");

    const demoPosts = ref([]);

    const studentFullName = computed(() => {
      return `${studentFirstName.value} ${studentLastName.value}`;
    });

    onMounted(() => {
      fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => response.json())
        .then((data) => {
          demoPosts.value = data
        });
    });

    return { demoPosts, studentFullName };
  },
};
</script>

<style>
.w-100-custom {
  width: 100%;
}
</style>
