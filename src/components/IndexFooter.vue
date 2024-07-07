<template>
  <footer id="bottom">
    <div><a href="#top">return to top</a></div>
    <div>
      <a href="https://www.flaticon.com/free-animated-icons/education" title="education animated icons"><small>Animated icons created by Freepik - Flaticon</small></a>
    </div>
    <small>&copy; Matthew Allen 2024</small>
  </footer>
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
footer {
  background-color: black;
  color: white;
  font-size: 12px;
  padding: 1rem;
}

a {
  color: darkgray;
}


a:hover {
  color: var(--color-blue);
}

a:active {
  color: var(--color-orange);
}

</style>
