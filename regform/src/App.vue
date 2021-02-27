<template>
  <form @submit.prevent="submitform()">

    სახელი: <input  v-model="firstname">
    გვარი: <input  v-model="lastname">

    <p>{{count}}</p>
    <button v-on:click="submitform()" type="button">რეგისტრაცია</button>
  </form>
</template>

<script>


import axios from 'axios';

export default {
  name: 'app',
  data() {
    return {
      count: ''
      // this is formdata object to store form values
    }
  },
  methods: {
    submitform() {
      axios.post('/insert', {firstname: this.firstname, lastname : this.lastname})
          .then(res => {
            console.log(res)
          })
          .catch(err => {
            alert(err)
          })
    },

  }
}
</script>

<style>

</style>
