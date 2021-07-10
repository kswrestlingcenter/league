<template>
  <h1>League Event detail</h1>
  <p>Name: {{leagueEvent.name}}</p>
  <p>Status: {{leagueEvent.status}}</p>
  <p>Created: {{leagueEvent.createdAt}}</p>
  <p>Number of Participants:{{leagueEvent.participants?.length}}</p>
  <hr>
  <router-link :to="addParticipantUrl">+ Add participant</router-link>

  <ParticipantCard v-for="participant in leagueEvent.participants"
    :key="participant._id"
    :wrestler="participant"
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
  }
}
</script>

<style>

</style>