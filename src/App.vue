<template>
  <IndexHeader />
  <HeroSection />
  <InitiativesPanel />
  <AboutSection />
  <ContactForm />
  <IndexFooter />
</template>

<script>
import ContactForm from './components/ContactForm.vue';
import IndexHeader from './components/IndexHeader.vue';
import InitiativesPanel from './components/InitiativesPanel.vue';
import IndexFooter from './components/IndexFooter.vue';
import HeroSection from './components/HeroSection.vue';
import AboutSection from './components/AboutSection.vue';

export default {
  name: 'App',
  components: {
    ContactForm,
    IndexHeader,
    InitiativesPanel,
    IndexFooter,
    HeroSection,
    AboutSection,
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
  margin: 50px;
}
</style>
