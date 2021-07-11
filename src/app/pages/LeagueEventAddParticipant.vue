<template>
  <h1>Add Event Participant</h1>
  <form @submit.prevent="sendForm">
    <fieldset>
      <legend>Add Participant name & USAW number</legend>
      <br>
      <BaseSelect
        :options="formattedWrestlerList()"
        :displayValue="displayValue"
        v-model="selectedWrestler"
        label="Select a wrestler"
      />
      <br>
      <BaseInput
        v-model="weight"
        label="Weight"
        type="text"
      />
      <br>
      <button type="submit">Submit</button>
    </fieldset>
  </form>
  <pre>{{ event }}</pre>
</template>

<script>
import axios from 'axios'

export default {
  async created() {
    const wrestlerList = await axios.get('../../api/allWrestlers')
    console.log(wrestlerList.data)
    this.wrestlers = wrestlerList.data.wrestlerList
  },
  data () {
    return {
      wrestlers: [],
      selectedWrestler: {},
      leagueEventId: this.$route.params.id,
      weight: 0
    }
  },
  methods: {
    formattedWrestlerList() {
      return this.wrestlers.map((wrestler) => {
        return {
          displayValue: wrestler.firstName + " " + wrestler.lastName,
          wrestler: wrestler
        }
      })
    },
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
  },
  computed: {
    participant() {
      return {
        wrestlerId: this.selectedWrestler._id,
        leagueEventId: this.leagueEventId,
        weight: this.weight
      }
    }
  }
}
</script>

<style>
</style>