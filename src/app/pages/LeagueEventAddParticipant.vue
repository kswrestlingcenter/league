<template>
  <h1>Add Event Participant</h1>
  <form @submit.prevent="sendForm">
    <fieldset>
      <legend>Add Participant name & USAW number</legend>
      <BaseInput
        v-model="participant.firstName"
        label="First Name"
        type="text"
      />
      <br>
      <BaseInput
        v-model="participant.lastName"
        label="Last Name"
        type="text"
      />
      <br>
      <BaseInput
        v-model="participant.usawNumber"
        label="USAW Number"
        type="text"
      />
      <br>
      <BaseInput
        v-model="participant.weight"
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
  data () {
    return {
      participant : {
        firstName: '',
        lastName: '',
        usawNumber: '',
        weight: '',
        leagueEventId: this.$route.params.id
      },
    }
  },
  methods: {
    sendForm(e) {
      // Here is where we will:
        // Validate Input
        // Add spinning icon/animation
      console.log({e})
      axios
        .post(`/api/leagueEvent/${this.$route.params?.id}/addParticipant`, this.participant)
        .then(() => this.$router.push({ name: 'league-event-detail', params: {id: this.$route.params.id}})) // re-direct to event page
        .catch((e) => console.error(e)) // Throw error
    }
  }
}
</script>

<style>
</style>