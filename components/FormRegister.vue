<template>
  <div>
    <h1>Inscription</h1>
    <b-form v-if="show" @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-login"
        label="Pseudo:"
        label-for="input-login"
      >
        <b-form-input
          id="input-login"
          v-model="form.login"
          type="text"
          required
          placeholder="Entrez votre pseudo"
        />
      </b-form-group>

      <b-form-group
        id="input-group-email"
        label="Email:"
        label-for="input-email"
      >
        <b-form-input
          id="input-email"
          v-model="form.email"
          type="email"
          required
          placeholder="Entrez votre email"
        />
      </b-form-group>

      <b-form-group
        id="input-group-pass"
        label="Mot de passe:"
        label-for="input-pass"
      >
        <b-form-input
          id="input-pass"
          v-model="form.pass"
          type="password"
          required
          placeholder="Entrez votre mot de passe"
        />
      </b-form-group>

      <b-form-group
        id="input-group-verifpass"
        label="Ressaisir mot de passe:"
        label-for="input-verifpass"
      >
        <b-form-input
          id="input-verifpass"
          v-model="form.verifpass"
          type="password"
          required
          placeholder="Ressaisir votre mot de passe"
        />
      </b-form-group>

      <b-button type="submit" variant="success">
        Se connecter
      </b-button>
    </b-form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'FormRegister',
  data () {
    return {
      form: {
        login: '',
        email: '',
        pass: '',
        verifpass: ''
      },
      show: true
    }
  },
  methods: {
    async onSubmit (evt) {
      evt.preventDefault()
      await axios.post('http://localhost:3000/api/users/register', this.form)
        .then((response) => {
          console.warn(response)
        }, (error) => {
          console.warn(error)
        })
    },
    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.login = ''
      this.form.email = ''
      this.form.pass = ''
      this.form.verifpass = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>
