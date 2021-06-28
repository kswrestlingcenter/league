<template>
  <h1>Wrestler Add</h1>
  <BaseInput
    v-model="firstName"
    label="First Name"
    type="text"
  />
  <br>
  <BaseInput
    v-model="lastName"
    label="Last Name"
    type="text"
  />
  <br>
  <BaseInput
    v-model="usawNumber"
    label="USAW Number"
    type="text"
  />
</template>

<script>
export default {
  data () {
    return {
      firstname: '',
      lastName: '',
      usawNumber: ''
    }
  }
}
</script>

<style>

</style>