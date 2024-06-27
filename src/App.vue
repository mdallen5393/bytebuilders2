<template>
  <IndexHeader />
  <InitiativesPanel />
  <ContactForm />
  <IndexFooter />
</template>

<script>
import ContactForm from './components/ContactForm.vue';
import IndexHeader from './components/IndexHeader.vue';
import InitiativesPanel from './components/InitiativesPanel.vue';
import IndexFooter from './components/IndexFooter.vue';

export default {
  name: 'App',
  components: {
    ContactForm,
    IndexHeader,
    InitiativesPanel,
    IndexFooter,
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
</style>
