<template>
  <h1>League Event detail</h1>
  <p>Name: {{leagueEvent.name}}</p>
  <p>Status: {{leagueEvent.status}}</p>
  <p>Created: {{leagueEvent.createdAt}}</p>
  <hr>
  <BaseButton
    type="submit"
    buttonClass="-fill-gradient"
    :disabled="!leagueEvent.participants?.length"
    @click="endWeighIns()">End Weigh-ins
  </BaseButton>
  <hr>
  <router-link :to="addParticipantUrl">+ Add participant</router-link>
  <p>Number of Participants:{{leagueEvent.participants?.length}}</p>

  <ParticipantCard v-for="participant in leagueEvent.participants"
    :key="participant._id"
    :wrestler="participant"
    @click="goToEventWrestlerDetail(participant._id)"
  />
  <!-- {{leagueEvent}} -->
</template>

<script>
import axios from 'axios'
import {ref} from 'vue'

import ParticipantCard from '../components/LeagueParticipantCard.vue'

export default {
  setup(props, context) {
    console.log("SETUP - League Event Detail Page:", {props, context})
    const leagueEvent = ref({})

    return {leagueEvent}
  },
  async created() {
    console.log("CREATED - route params: ", this.$route.params)
    const result = await axios.get(`/api/leagueEvent/${this.$route.params?.id}`)
    console.log("THE RESPONSE", {result})
    this.leagueEvent = result.data
  },
  components: {ParticipantCard},
  computed: {
    addParticipantUrl() {
      return `${this.$route.params?.id}/add-participant`
    }
  },
  methods: {
    goToEventWrestlerDetail(wrestlerId) {
      console.log({wrestlerId})
      this.$router.push({name: "league-event-participant-detail", params: {id: this.$route.params?.id, wrestlerId: wrestlerId}})
    },
    endWeighIns() {
      console.log("end Weigh-ins, now it's time to auto-bracket them based on age/skill level")
      // Set the status on the shipment to close
      // Add weigh-in events to each wrestler's official record.
      // Start the bracketing process.
      // Re-direct to league-events/:id/matches page.
    }
  }
}
</script>

<style>

</style>