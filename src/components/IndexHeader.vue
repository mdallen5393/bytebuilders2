<template>
  <header id="top">
    <img class="header-img" alt="Byte Builders Logo by BumFam" src="../assets/logo flat (lightmode).svg">
    <!-- <h1>{{ title }}</h1> -->
    <nav>
      <a href="#top" class="nav-link">Home</a>
      <a href="#about" class="nav-link">About</a>
      <a href="#initiatives" class="nav-link">Initiatives</a>
      <a href="#contact" class="nav-link">Contact Us</a>
    </nav>
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
  /* background-color: #f8f9fa; */
  padding: 1rem;
}

header-img {
  height: 200px;
}

nav {
  list-style-type: none;
  display: flex;
  justify-content: space-around;
}

.nav-link {
  margin-top: 50px;
  width: 20%;
  padding: 20px;
  text-decoration: none;
  color: black;
  outline: 1px solid gray;
}

.nav-link:hover {
  color: #05a2e5;
  outline-color: #05a2e5;
  background-color: #d9e9e9;
}

.nav-link:active {
  color: var(--color-orange);
  outline-color: var(--color-orange);
  background-color: #ffe3cf;
}

</style>
