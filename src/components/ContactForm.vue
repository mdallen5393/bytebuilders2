<template>
  <section id="contact">
    <form @submit.prevent="submitForm">
      <h1>Contact us</h1>
      <div class="form-elements">
        <div class="left">
          <div class="name-field">
            <label for="name">name</label><br>
            <input 
              placeholder="full name" type="text" id="name" name="name" v-model="formData.name" required
              aria-labelledby="name" aria-required="true" aria-invalid="true" role="textbox"
            ><br>
          </div>
          <div class="email-field">
            <label for="email">email</label><br>
            <input
              placeholder="email address" type="email" id="email" name="email" v-model="formData.email" required
              aria-labelledby="email" aria-required="true" aria-invalid="true" role="textbox"
            ><br>
          </div>
          <div class="subject-field">
            <label for="subject">subject</label><br>
            <input
              placeholder="subject" type="text" id="subject" name="subject" v-model="formData.subject" required
              aria-labelledby="subject" aria-required="true" aria-invalid="true" role="textbox"
            ><br>
          </div>
        </div>
        <div class="message-field">
          <label for="message">message</label><br>
          <textarea
            rows="4" id="message" v-model="formData.message" name="message" maxlength="500" required
            aria-labelledby="message" aria-required="true" aria-invalid="true" role="textbox"
          ></textarea>
        </div>
      </div>
      <button type="submit" class="submit-btn" aria-label="Submit" aria-live="polite">Send Message</button>
    </form>
  </section>
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
#contact {
  margin-bottom: 0;
  margin-top: 80px;
}

form {
  background-color: darkblue;
  color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
}

form > h1 {
  font-size: 32px;
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
  width: 100%;
}

textarea {
  width: 100%;
  max-width: 500px;
  height: 95%;
  max-height: 500px;
  min-width: 200px;
  margin-top: 8px;
}

input {
  margin-top: 8px;
  width: 100%;
  height: 1.5rem;
  min-width: 200px;
}

.submit-btn {
  max-width: 300px;
  margin: 16px;
  width: 50%;
  padding: 16px;
  background-color: var(--color-orange);
  border: none;
  border-radius: 8px;
  color: black;
  margin-top: 50px;
}

.submit-btn:hover {
  box-shadow: 0 8px 8px 0 rgba(0,0,0,0.24),0 8px 8px 0 rgba(0,0,0,0.19);
}

.submit-btn:active {
  box-shadow:none;
  border: 1px solid white;
}

.submit-btn:focus {
  outline: 4px solid white;
}

input {
}

@media (max-width: 768px) {
  .form-elements {
    flex-direction: column;
  }
}

</style>
