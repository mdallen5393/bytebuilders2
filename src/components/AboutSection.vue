<template>
  <section id="about">
    <div class="hero">
      <div class="hero-card">
        <img class="animated_image" alt="animated coding image" src="../assets/coding.gif">
      </div>
      <div class="hero-card">
        <img class="animated_image" alt="animated coding image" src="../assets/robotic-arm.gif">
      </div>
      <div class="hero-card">
        <img class="animated_image" alt="animated coding image" src="../assets/book.gif">
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
.hero {
  display: flex;
}

.hero-card {
  flex: 1; /* Ensures each card takes up equal space */
  display: flex;
  justify-content: center;
  align-items: center;
}

.animated_image {
  width: 100%;
  height: auto; /* Maintains the aspect ratio */
}
</style>
