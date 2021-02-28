<template>
 
  <form @submit.prevent="submitform()">
    <div class="container_row">
      <div class="row justify-content-center">

      <label for="firstname">სახელი</label>
      <input  v-model="firstname" id="firstname" class="form-control" aria-label="სახელი" aria-describedby="inputGroup-sizing-sm">

      <label for="lastname">გვარი</label>
      <input  v-model="lastname" id="lastname" class="form-control" aria-label="სახელი" aria-describedby="inputGroup-sizing-sm">

      <label for="idnumber">პირადი ნომერი</label>
      <input type="number"  v-model="idnumber" id="idnumber" class="form-control" aria-label="სახელი" aria-describedby="inputGroup-sizing-sm">

      <label for="bdate">დაბადების თარიღი</label>
      <input type="date" v-model="bdate" id="bdate">

      <select v-model="selected" id="selectg">
        <option disabled value="">სქესი</option>
        <option>მამრობითი</option>
        <option>მდედრობითი</option>
        <option>სხვა</option>
      </select>

      <button v-on:click="submitform()"  type="button" class="btn btn-primary" id="subbutton">რეგისტრაცია</button>
    </div> 
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
      axios.post('/insert', {firstname: this.firstname, lastname : this.lastname, idnumber: this.idnumber, 
                   bdate: this.bdate,})
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

.container_row {
  display: block;
  width:25%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  border: solid 3px red;
}

.container_row input {
  width: 100%;
  clear: both;
  
}

input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}
#subbutton{
  margin-top: 30px;
  width: 70%;
}

#selectg{
  margin-top: 20px;  
}




</style>
