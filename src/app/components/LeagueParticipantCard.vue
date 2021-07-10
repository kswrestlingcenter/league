<template>
  <div class="wrestler-card">
    <span>usaw #{{wrestler.usawNumber}}</span>
    <h4>{{ wrestler.firstName + " " + wrestler.lastName }}</h4>
    <h4>Weight: {{wrestler.weight}}</h4>
  </div>
</template>

<script>
export default {
  name: 'WrestlerCard',
  props: {
    wrestler: {
      type: Object,
      default: () => {
        return {}
      }
    },
  }
}
</script>

<style scoped>
.wrestler-card {
  width: 23em;
  margin: 1em auto 1em auto;
  padding: 1em;
  border: solid 1px #2c3e50;
  cursor: pointer;
  transition: all 0.2s linear;
}
.wrestler-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.wrestler-card h4 {
  font-size: 1.4em;
  margin-top: 0.5em;
  margin-bottom: 0.3em;
}
</style>
