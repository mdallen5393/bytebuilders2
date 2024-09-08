<template>
  <section id="news" aria-labelledby="news-heading">
    <h1 class="news-heading">In the news...</h1>
    <div v-for="(panel, index) in panels" :key="index" class="news-panel">
      <div class="news__content">
        <div class="panel-text">
          <h2>{{ panel.outlet }}</h2> 
          <h3>{{ panel.title }}</h3>
          <a :href="panel.link">
            <img class="panel-img" :alt="panel.alt" :src="panel.image" />
          </a>
          <p>See the full story <a :href="panel.link">here</a>.</p>
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
        outlet: "News on 6",
        title: "STEM Center Coming To Owasso; Teaches Children About Computer Coding, Robotics",
        link: "https://www.newson6.com/story/65d86e37f065ba0658caaf13/stem-center-coming-to-owasso-teaches-children-about-computer-coding-robotics",
        image: require("../assets/Article-NewsOn6.png"),
        alt: "preview of News On 6 Article",
      },
      {
        outlet: "Tulsa World Owasso Reporter",
        title: "Code Wiz brings coding, robotics education to Owasso: ‘It’s a special environment’",
        link: "https://tulsaworld.com/news/community/owasso/code-wiz-brings-coding-robotics-education-to-owasso-it-s-a-special-environment/article_6a339b9e-e313-11ee-99e0-735078a51e1f.html",
        image: require("../assets/Article-OwassoReporter.png"),
        alt: "preview of Owasso Reporter Article",
      }
    ];
    return { panels };
  },
});
</script>

<style scoped>
  .news-heading {
    font-size: 2em;
    margin: 70px;
  }

  .news-panel {
    width: 50%;
    margin: 0 auto 50px auto;
    z-index: 1;
    position: relative;
    margin-top: 75px;
    margin-bottom: 150px;
  }

  .news__content {
    position: relative;
    background-color: white;
    z-index: 1;
    box-shadow: 5px 5px 10px black;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .news-panel::before,
  .news-panel::after {
    content: '';
    position: absolute;
    z-index: -1;
    border-radius: 10px;
  }

  .news-panel::before {
    top: -20px;
    left: -20px;
    right: 20px;
    bottom: 20px;
    border: 5px solid var(--color-blue);
    box-shadow: 2px 2px 2px black, inset 2px 2px 2px black;
    transform: skew(2deg);
  }

  .news-panel::after {
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
    max-width: 80%;
  }

  .panel-text {
    width: 80%
  }

  @media (max-width: 768px) {
    .news-heading {
      margin-left: 0;
      margin-right: 0;
      max-width: 90%;
    }

    .news__content {
      flex-direction: column;
    }

    .news__content p {
      padding: 20px;
    }

    .news-panel {
      width: 80%;
    }

    .panel-text {
      width: 90%;
    }

    .panel-text h3 {
      margin: 10px;
    }

    .panel-img {
      width: 60%;
      max-height: 100%;
      padding-top: 30px;
    }
  }

</style>
