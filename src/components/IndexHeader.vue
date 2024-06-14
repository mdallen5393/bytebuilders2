<template>
  <header>
    <img alt="Byte Builders Logo by BumFam" src="../assets/logo (lightmode).svg">
    <!-- <h1>{{ title }}</h1> -->
  </header>
</template>

<script>
// import { defineComponent, ref } from 'vue';
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    // const title = ref('ByteBuilders Homepage')
    return {
      // title,
    }
  },
})
</script>

<style scoped>
header {
  background-color: #f8f9fa;
  padding: 1rem;
  display: flex;
  align-items: center;
}

img {
  height: 200px;
}
</style>
