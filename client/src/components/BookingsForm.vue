<template lang="html">
  <form id='bookings-form' v-on:submit='handleSubmit'>
    <h2> Add a booking </h2>
    <div class="formwrap">
      <label for="guestName">Guest Name </label>
      <input type="text" id="guestName" v-model="guestName" required/>
    </div>
    <div class="formwrap">
      <label for="guestEmail">Guest Email </label>
      <input type="text" id="guestEmail" v-model="guestEmail" required/>
    </div>
    <div class="formwrap">
      <label for="guestStatus">Guest Checked-In Status </label>
      <input type="text" id="guestStatus" v-model="guestStatus">
    </div>
    <input type="submit" value="Save" id="save"/>
  </form>
</template>

<script>
import { eventBus } from '../main.js';
import BookingsService from '../services/BookingsService';
export default {
  name: 'bookings-form',
  data(){
    return {
      guestName: "",
      guestEmail: "",
      guestStatus: ""
    }
  },
  methods: {
    handleSubmit(event){
      event.preventDefault();

      const payload ={
        guestName:this.guestName,
        guestEmail:this.guestEmail,
        guestStatus:this.guestStatus
      };
      BookingsService.postBooking(payload)
      .then(booking => {
        eventBus.$emit('booking-added', booking);
      });
    }
  }
}

  </script>

  <style lang="css" scoped>
  </style>
