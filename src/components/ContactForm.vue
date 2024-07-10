<template>
  <form @submit.prevent="submitForm" id="contact">
    <h1>Contact us</h1>
    <div class="form-elements">
      <div class="left">
        <div class="name-field">
          <label for="name">name</label><br>
          <input placeholder="full name" type="text" id="name" name="name" v-model="formData.name" required><br>
        </div>
        <div class="email-field">
          <label for="email">email</label><br>
          <input placeholder="email address" type="email" id="email" name="email" v-model="formData.email" required><br>
        </div>
        <div class="subject-field">
          <label for="subject">subject</label><br>
          <input placeholder="subject" type="text" id="subject" name="subject" v-model="formData.subject" required><br>
        </div>
      </div>
      <div class="message-field">
        <label for="message">message</label><br>
        <textarea rows="4" id="message" v-model="formData.message" name="message" maxlength="500"></textarea>
      </div>
    </div>
    <button type="submit" class="submit-btn">Send Message</button>
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
        subject: '',
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
  background-color: darkblue;
  color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
}

.form-elements {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 16px;
}

.left {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

textarea {
  width: 100%;
  max-width: 500px;
  height: 95%;
  max-height: 500px;
}

input {
  width: 100%;
}

.submit-btn {
  max-width: 300px;
  margin: 16px;
  width: 50%;
  padding: 16px;
  background-color: var(--color-orange);
  border: none;
  border-radius: 8px;
  color: white;
}

.submit-btn:hover {
  box-shadow: 0 8px 8px 0 rgba(0,0,0,0.24),0 8px 8px 0 rgba(0,0,0,0.19);
}

.submit-btn:active {
  box-shadow:none;
  border: 1px solid white;
}

input {
  margin-top: 8px;
}

@media (max-width: 768px) {
  .form-elements {
    flex-direction: column;
  }

  .submit-btn {
    margin-top: 50px;
  }
}

</style>
