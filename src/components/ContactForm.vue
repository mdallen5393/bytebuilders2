<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="name">Name:</label><br>
      <input type="text" id="name" name="name" v-model="formData.name" required><br>
    </div>
    <div>
      <label for="email">Email:</label><br>
      <input type="text" id="email" name="email" v-model="formData.email" required><br>
    </div>
    <div>
      <label for="message">Message</label><br>
      <textarea rows="4" cols="50" id="message" v-model="formData.message" name="message" maxlength="500"></textarea>
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
// import { ref } from 'vue';

import firebase from 'firebase/app';
import 'firebase/functions';

export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
    };
  },
  methods: {
    async submitForm() {
      const sendContactEmail = firebase.functions().httpsCallable('sendContactEmail');
      try {
        const result = await sendContactEmail({
          name: this.name,
          email: this.email,
          message: this.message,
        });
        if (result.data.success) {
          alert('Email sent successfully');
        } else {
          alert('Error sending email: ' + result.data.error);
        }
      } catch (error) {
        console.error('Error calling function: ', error);
      }
    }
  }
}
</script>


<style scoped>
form {
  background-color: blue;
  padding: 1rem;
}
</style>
