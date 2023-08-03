<template>
  <div>
    <div>
      <!-- data showing  -->
      {{ name }}
    </div>

    <!-- v text  -->
    <div v-text="vText"></div>

    <!-- v-html  -->
    <div v-html="Vhtml"></div>

    <!-- dynamic class  -->
    <div :class="color">testing</div>

    <!-- dynamic string class  -->
    <div :class="colorChange ? 'green' : 'red'">change color</div>

    <!-- dynamic array class  -->
    <div :class="[soldOut ? 'blue' : 'green']">IsSoldOut?</div>

    <div :class="{ 'red': soldOut, 'green': !soldOut }">Avaliable</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "shakil",
      vText: "vText",
      Vhtml: "<b>hello, i am html from backend. </b>",
      color: "red",
      colorChange: true,
      soldOut: true,
    };
  },
};
</script>

<style>
.green {
  color: green;
}
.red {
  color: red;
}
.blue {
  color: blue;
}
</style>
