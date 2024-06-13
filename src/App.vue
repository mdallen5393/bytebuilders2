<template>
  <!-- <img alt="Byte Builders Logo by BumFam" src="./assets/logo.svg"> -->
  <IndexHeader />
  <ContactForm />
</template>

<script>
import ContactForm from './components/ContactForm.vue'
import IndexHeader from './components/IndexHeader.vue'

export default {
  name: 'App',
  components: {
    ContactForm,
    IndexHeader
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
