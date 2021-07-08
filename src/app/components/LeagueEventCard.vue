<template>
  <div class="league-event-card">
    <h4>Event: {{ leagueEvent.name }}</h4>
    <span>status: {{leagueEvent.status}}</span><br>
    <span># of participants: {{leagueEvent.participants.length}}</span>
    <span>date: {{leagueEvent.createdAt}}</span><br>
  </div>
</template>

<script>
export default {
  name: 'LeagueEventCard',
  props: {
    leagueEvent: {
      type: Object,
      default: () => {
        return {}
      }
    },
  }
}
</script>

<style scoped>
.league-event-card {
  width: 23em;
  margin: 1em auto 1em auto;
  padding: 1em;
  border: solid 1px #2c3e50;
  cursor: pointer;
  transition: all 0.2s linear;
}
.league-event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.league-event-card h4 {
  font-size: 1.4em;
  margin-top: 0.5em;
  margin-bottom: 0.3em;
}
</style>
