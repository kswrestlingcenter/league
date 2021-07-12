<template>
  <h1>Add Event Participant</h1>
  <form @submit.prevent="sendForm">
    <fieldset>
      <legend>Add Participant name & USAW number</legend>
      <br>

      <input
        type="text"
        autocomplete="off"
        v-model="userInput.wrestlerName"
        @input="filterWrestlers"
        @focus="showDropDown = true"
      >

      <div v-if="wrestlerAutoComplete && showDropDown">
        <ul>
          <li v-bind:key="wrestler._id" v-for="wrestler in wrestlerAutoComplete" @click="setSelectedWrestler(wrestler)">{{formatWrestlerName(wrestler)}}</li>
        </ul>
      </div>

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
  <pre>{{ userInput }}</pre>
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
      userInput: {
        wrestlerName: '',
        wrestlerId: ''
      },
      leagueEventId: this.$route.params.id,
      weight: 0,
      wrestlerAutoComplete: [],
      showDropDown: false
    }
  },
  methods: {
    filterWrestlers() {
      this.wrestlerAutoComplete = this.wrestlers.filter(wrestler => {
        if (wrestler.firstName?.toLowerCase().startsWith(this.userInput.wrestlerName?.toLowerCase())) return wrestler
        if (wrestler.lastName?.toLowerCase().startsWith(this.userInput.wrestlerName?.toLowerCase())) return wrestler
        return false
      })
    },
    formatWrestlerName(wrestler) {
      return wrestler.firstName + " " + wrestler.lastName
    },
    setSelectedWrestler(wrestler) {
      console.log("setSelectedWrestler: ", wrestler)
      this.userInput.wrestlerName = this.formatWrestlerName(wrestler)
      this.userInput.wrestlerId = wrestler._id

      this.showDropDown = false

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
      const wrestlerId = this.selectedWrestler?._id || this.wrestlerAutoComplete[0]?._id
      console.log("selectedWrestler", this.selectedWrestler)
      return {
        wrestlerId: wrestlerId,
        leagueEventId: this.leagueEventId,
        weight: this.weight
      }
    }
  }
}
</script>

<style>
</style>