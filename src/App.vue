<template>
  <div id="app">
    <IndexHeader />
    <main role="main">
      <HeroSection />
      <InitiativesPanel />
      <NewsSection />
      <FamilySection />
      <ContactForm />
    </main>
    <IndexFooter />
  </div>
</template>

<script>
import ContactForm from './components/ContactForm.vue';
import IndexHeader from './components/IndexHeader.vue';
import InitiativesPanel from './components/InitiativesPanel.vue';
import IndexFooter from './components/IndexFooter.vue';
import HeroSection from './components/HeroSection.vue';
import NewsSection from './components/NewsSection.vue';
import FamilySection from './components/FamilySection.vue';

export default {
  name: 'App',
  components: {
    ContactForm,
    IndexHeader,
    InitiativesPanel,
    IndexFooter,
    HeroSection,
    NewsSection,
    FamilySection,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

:root {
  --color-orange: #fb802a;
  --color-blue: #05a2e5;
}

section {
  margin: 50px 0;
}

body, html {
  margin: 0;
  padding: 0;
}
</style>
