<template>
  <h1>Add Event</h1>
  <form @submit.prevent="sendForm">
    <fieldset>
      <legend>Create a league event</legend>
      <BaseInput
        v-model="eventName"
        label="Event Name"
        type="text"
      />
      <br>
      </fieldset>
      <button type="submit">Submit</button>
  </form>
  <pre>{{ eventName }}</pre>
</template>

<script>
import axios from 'axios'
// import addWrestler from '../services/wrestlerServices'
// Add Date Picker

export default {
  data () {
    return {
      eventName : ''
    }
  },
  methods: {
    sendForm(e) {
      // Here is where we will:
        // Validate Input
        // Add spinning icon/animation
      console.log({e})
      axios
        .post('/api/addLeagueEvent', this.eventName)
        .then(() => this.$router.push({ name: 'event-list'})) // re-direct to wrestler page
        .catch((e) => console.error(e)) // Throw error
    }
  }
}
</script>

<style>
</style>