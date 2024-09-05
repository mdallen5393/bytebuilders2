<template>
  <section id="family" aria-labelledby="family-heading">
    <h1 class="family-heading">Meet the Bumgardners</h1>
    <div v-for="(panel, index) in panels" :key="index" class="family-panel">
      <div class="family__content">
        <h2>DeEtta & Troy Bumgardner</h2>
        <img class="panel-img" :alt="panel.alt" :src="panel.image" />
        <div class="panel-text">
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
        text: "DeEtta is a Veteran of the U.S. Marine Corps. with an extensive career in logistics and transportation. Troy is a GISP (Geographic Information Systems Professional, GISCI) who works in IT for a local Fortune 500 natural gas pipeline company supporting their geographic information systems (GIS, ESRI's ArcGIS platform). Through their endeavors, they want to be part of YOUR tech journey.",
        image: require("../assets/Troy-DeEtta.jpg"),
        alt: "image of DeEtta and Troy Bumgardner",
      },
    ];
    return { panels };
  },
});
</script>

<style scoped>
  .family-heading {
    font-size: 2em;
    margin: 70px;
  }

  .family-panel {
    width: 50%;
    margin: 0 auto 50px auto;
    z-index: 1;
    position: relative;
  }

  .family__content {
    position: relative;
    background-color: white;
    z-index: 1;
    box-shadow: 5px 5px 10px black;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  .family-panel::before,
  .family-panel::after {
    content: '';
    position: absolute;
    z-index: -1;
    border-radius: 10px;
  }

  .family-panel::before {
    top: -20px;
    left: -20px;
    right: 20px;
    bottom: 20px;
    border: 5px solid var(--color-blue);
    box-shadow: 2px 2px 2px black, inset 2px 2px 2px black;
    transform: skew(2deg);
  }

  .family-panel::after {
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
    width: 80%
  }

  @media (max-width: 768px) {
    .family-heading {
      margin-left: 0;
      margin-right: 0;
      max-width: 90%;
    }

    .family__content {
      flex-direction: column;
    }

    .family__content p {
      padding: 20px;
    }

    .family-panel {
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
