<template>
 
  <form @submit.prevent="submitform()">
    <div class="container">

      <label for="firstname">სახელი</label>
      <input  v-model="firstname" id="firstname">

      <label for="lastname">გვარი</label>
      <input  v-model="lastname" id="lastname">

      <label for="idnumber">პირადი ნომერი</label>
      <input type="number"  v-model="idnumber" id="idnumber">

      <label for="bdate">დაბადების თარიღი</label>
      <input type="date" v-model="bdate" id="bdate">

      <label for="male">მამრობითი</label>
      <input type="radio" id="male" name="gender" value="male">

      <label for="female">მდედრობითი</label>
      <input type="radio" id="female" name="gender" value="female">

      <label for="other">სხვა</label>
      <input type="radio" id="other" name="gender" value="other">

      <button v-on:click="submitform()" type="button">რეგისტრაცია</button>

    </div>  
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

.container {
  margin: auto;
  margin-top: 50px;
}

.container input {
  width: 100%;
  clear: both;
  
}

input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}

</style>
