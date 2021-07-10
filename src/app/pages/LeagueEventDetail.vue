<template>
  <h1>League Event detail</h1>
  <p>League Event Detail</p>
  <p>Name: {{leagueEvent.name}}</p>
  <p>Status: {{leagueEvent.status}}</p>
  <hr>
  {{leagueEvent}}
</template>

<script>
import axios from 'axios'
import {ref} from 'vue'

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
  }
}
</script>

<style>

</style>