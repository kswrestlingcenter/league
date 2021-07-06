<template>
  <h1>Wrestler detail</h1>
  <p>Raw wrestler object:</p>
  <div>
    {{wrestler}}
  </div>
</template>

<script>
import axios from 'axios'
import {ref} from 'vue'

export default {
  setup(props, context) {
    console.log("SETUP - Wrestler Detail Page:", {props, context})
    const wrestler = ref({})

    return {wrestler}
  },
  async created() {
    console.log("CREATED - route params: ", this.$route.params)
    const result = await axios.get(`/api/wrestler/${this.$route.params?.id}`)
    console.log("THE RESPONSE", {result})
    this.wrestler = result.data
  }
}
</script>

<style>

</style>