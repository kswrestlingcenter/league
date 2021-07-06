<template>
  <h1>Wrestler Add</h1>
  <form @submit.prevent="sendForm">
    <fieldset>
      <legend>Add wrestler name & USAW number</legend>
      <BaseInput
        v-model="wrestler.firstName"
        label="First Name"
        type="text"
      />
      <br>
      <BaseInput
        v-model="wrestler.lastName"
        label="Last Name"
        type="text"
      />
      <br>
      <BaseInput
        v-model="wrestler.usawNumber"
        label="USAW Number"
        type="text"
      />
      </fieldset>
      <button type="submit">Submit</button>
  </form>
  <pre>{{ event }}</pre>
</template>

<script>
import axios from 'axios'
// import addWrestler from '../services/wrestlerServices'

export default {
  data () {
    return {
      wrestler : {
        firstName: '',
        lastName: '',
        usawNumber: ''
      }
    }
  },
  methods: {
    sendForm(e) {
      // Here is where we will:
        // Validate Input
        // Add spinning icon/animation
      console.log({e})
      axios
        .post('/api/addWrestler', this.wrestler)
        .then(() => this.$router.push({ name: 'wrestler-list'})) // re-direct to wrestler page
        .catch((e) => console.error(e)) // Throw error
    }
  }
}
</script>

<style>
</style>