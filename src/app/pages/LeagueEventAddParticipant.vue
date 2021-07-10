<template>
  <h1>Add Event Participant</h1>
  <form @submit.prevent="sendForm">
    <fieldset>
      <legend>Add Participant name & USAW number</legend>
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
      <br>
      <BaseInput
        v-model="wrestler.weight"
        label="Weight"
        type="text"
      />
      </fieldset>
      <button type="submit">Submit</button>
  </form>
  <pre>{{ event }}</pre>
</template>

<script>
import axios from 'axios'

export default {
  setup(props, context) {
    console.log("SETUP - League Event Detail Page:", {props, context})

    return {}
  },
  async created() {
    console.log("CREATED - route params: ", this.$route.params)
  },
  data () {
    return {
      wrestler : {
        firstName: '',
        lastName: '',
        usawNumber: '',
        weight: ''
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