<template>
  <IndexHeader />
  <InitiativesPanel />
  <ContactForm />
</template>

<script>
import ContactForm from './components/ContactForm.vue';
import IndexHeader from './components/IndexHeader.vue';
import InitiativesPanel from './components/InitiativesPanel.vue';

export default {
  name: 'App',
  components: {
    ContactForm,
    IndexHeader,
    InitiativesPanel,
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
  margin-top: 60px;
}
</style>
