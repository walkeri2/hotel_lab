<template lang="html">
<div>
    <input type="text" id="guestStatus" v-model="guestStatus">
    <button type="button" @click="handleEdit()">Edit</button>
</div>

</template>

<script>
import { eventBus } from '../main.js';
import BookingsService from '../services/BookingsService';
export default {
  name: 'edit-booking',
  props: ['booking'],

  data(){
    return {
      guestStatus: ""
    }
  },


  methods: {
    handleEdit(){

      const payload ={
        guestStatus:this.guestStatus
      };
      BookingsService.editBooking(this.booking._id, payload)
      .then(booking => {
        eventBus.$emit('booking-edited', booking);
      });
    }
  }
}

  </script>

  <style lang="css" scoped>
  </style>
