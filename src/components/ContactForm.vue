<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="name">Name:</label><br>
      <input type="text" id="name" name="name" v-model="formData.name" required><br>
    </div>
    <div>
      <label for="email">Email:</label><br>
      <input type="email" id="email" name="email" v-model="formData.email" required><br>
    </div>
    <div>
      <label for="message">Message:</label><br>
      <textarea rows="4" id="message" v-model="formData.message" name="message" maxlength="500"></textarea>
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
import { inject } from 'vue';
import { httpsCallable } from 'firebase/functions';

export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: '',
      }
    };
  },
  setup() {
    const functions = inject('functions');
    return { functions };
  },
  methods: {
    async submitForm() {
      const sendContactEmail = httpsCallable(this.functions, 'sendContactEmail');
      try {
        const result = await sendContactEmail(this.formData);
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
