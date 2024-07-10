<template>
  <section id="about">
    <div class="hero">
      <a v-for="(card, index) in cards" :key="index" class="hero-card" :href="card.link">
        <img class="animated_image" :alt="card.alt" :src="card.image" />
        <h1 class="hero-text">{{ card.text }}</h1>
      </a>
    </div>
    <p class="hero-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium temporibus, itaque nulla at eius molestiae voluptatum! Ducimus libero culpa quo? Aspernatur, delectus iusto, repudiandae et magnam non, sequi culpa eligendi adipisci dignissimos perferendis cumque voluptatum voluptate. Nihil velit quod minus.</p>
  </section>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const cards = [
      { text: "Coding.", image: require("../assets/coding.gif"), alt: "animated coding image", },
      { text: "Robotics.", image: require("../assets/robotic-arm.gif"), alt: "animated robotic arm image", },
      { text: "Education.", image: require("../assets/book.gif"), alt: "animated book image", },
    ];
    return { cards };
  },
});
</script>

<style scoped>
.hero {
  display: flex;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
}

.hero-card {
  flex: 1; /* Ensures each card takes up equal space */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative; /* For positioning the text over the image */
}

.hero-card:hover .animated_image {
  opacity: 0.4; /* Make the image slightly transparent */
}

.hero-card:hover .hero-text {
  font-size: 2.5rem;
}

.animated_image {
  width: 100%;
  height: auto; /* Maintains the aspect ratio */
  transition: opacity 0.3s ease; /* Smooth transition for opacity */
}

h1.hero-text {
  font-size: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Center the text */
  margin: 0;
  color: white; /* Ensure the text is visible over the image */
  background: rgba(0, 0, 0, 0.6); /* Slightly transparent black background */
  padding: 0.5em 1em; /* Padding around the text */
  border-radius: 10px; /* Rounded corners */
  transition: font-size 0.3s ease; /* Smooth transition for font size */
  pointer-events: none; /* Ensure the text does not interfere with hover effects */
}

.hero-paragraph {
  width: 70%;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    max-width: 400px;
    margin: 10px;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
  }

  .hero-paragraph {
    width: 90%;
    text-align: justify;
  }
}
</style>
