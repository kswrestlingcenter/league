<template>
  <h1>League Events list</h1>
  <router-link to="/league-events/create">+ Create an Event</router-link>
  <hr>

  <LeagueEventCard v-for="event in leagueEvents"
    :key="event._id"
    :leagueEvent="event"
    @click="goToEventDetail(event._id)"
  />

</template>

<script>
import axios from 'axios'
import LeagueEventCard from '../components/LeagueEventCard.vue'

export default {
  data() {
    return {
      leagueEvents: [],
      isLoading: true
    }
  },
  async created() {
    const leagueEvents = await axios.get('api/allLeagueEvents')
    console.log('leagueEvents.data', leagueEvents.data)
    this.leagueEvents = leagueEvents.data
    this.isLoading = false
  },
  components: {LeagueEventCard},
  methods: {
    goToEventDetail(eventId) {
      console.log({eventId})
      this.$router.push({name: "league-event-detail", params: {id: eventId}})
    }
  }
}
</script>

<style>

</style>