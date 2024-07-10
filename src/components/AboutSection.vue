<template>
  <section id="about">
    <h1 class="about-heading">Meet our founders</h1>
    <div v-for="(panel, index) in panels" :key="index" class="about-panel">
      <div class="about__content">
        <img class="panel-img" :alt="panel.alt" :src="panel.image" />
        <div class="panel-text">
          <h2>Troy & DeEtta Bumgardner</h2>
          <p>{{ panel.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const panels = [
      {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nostrum voluptatem ducimus quod laborum reprehenderit aspernatur nulla soluta. Ea, vel.",
        image: require("../assets/Troy-DeEtta.jpg"),
        alt: "image of Troy and DeEtta",
      },
    ];
    return { panels };
  },
});
</script>

<style scoped>
  .about-heading {
    font-size: 2em;
    margin: 70px;
  }

  .about-panel {
    width: 50%;
    margin: 0 auto 50px auto;
    z-index: 1;
    position: relative;
  }

  .about__content {
    position: relative;
    background-color: white;
    z-index: 1;
    box-shadow: 5px 5px 10px black;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .about-panel::before,
  .about-panel::after {
    content: '';
    position: absolute;
    z-index: -1;
    border-radius: 10px;
  }

  .about-panel::before {
    top: -20px;
    left: -20px;
    right: 20px;
    bottom: 20px;
    border: 5px solid var(--color-blue);
    box-shadow: 2px 2px 2px black, inset 2px 2px 2px black;
    transform: skew(2deg);
  }

  .about-panel::after {
    top: 20px;
    left: 20px;
    right: -20px;
    bottom: -20px;
    border: 5px solid var(--color-orange);
    box-shadow: 2px 2px 2px black, inset 2px 2px 2px black;
    transform: skew(-2deg);
  }

  .panel-img {
    max-height: 200px;
    padding: 12px;
  }

  .panel-text {
    width: 50%
  }

  @media (max-width: 768px) {
    .about-heading {
      margin-left: 0;
      margin-right: 0;
      max-width: 90%;
    }

    .about__content {
      flex-direction: column;
    }

    .about__content p {
      padding: 20px;
    }

    .about-panel {
      width: 80%;
    }

    .panel-text {
      width: 90%;
    }

    .panel-text p {
      text-align: justify;
    }

    .panel-img {
      width: 60%;
      max-height: 100%;
      padding-top: 30px;
    }
  }

</style>
