<template>
  <h1>Wrestlers Landing Page</h1>
  <router-link to="/wrestlers/add">+ Add Wrestler</router-link>
  <hr>

  <WrestlerCard v-for="wrestler in wrestlers"
    :key="wrestler._id"
    :wrestler="wrestler"
    @click="goToWrestlerDetail(wrestler._id)"
  />

</template>

<script>
import axios from 'axios'
import WrestlerCard from '../components/WrestlerCard.vue'

export default {
  data() {
    return {
      wrestlers: [],
      isLoading: true
    }
  },
  async created() {
    const wrestlerList = await axios.get('api/allWrestlers')
    console.log(wrestlerList.data)

    this.wrestlers = wrestlerList.data.wrestlerList
    this.isLoading = false
  },
  components: {WrestlerCard},
  methods: {
    goToWrestlerDetail(wrestlerId) {
      console.log(wrestlerId)
      this.$router.push({name: "wrestler-detail", params: {id: wrestlerId}})
    }
  }
}
</script>

<style>

</style>