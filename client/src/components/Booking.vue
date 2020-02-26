<template lang="html">
  <div class="booking">
    <h2>{{ booking.guestName}}</h2>
    <p>{{ booking.guestEmail }}</p>
    <p>{{ booking.guestStatus }}</p>
    <button type="button" class="delete-btn" v-on:click="deleteBooking">Delete </button>
  </div>
</template>

<script>
import {eventBus} from '@/main.js'
import BookingsService from '@/services/BookingsService.js'

export default {
  name: "booking",
  props: ['booking'],
  methods: {
    deleteBooking(){
      BookingsService.deleteBooking(this.booking._id)
      .then(() => eventBus.$emit('booking-deleted', this.booking._id))
    }
  }
}

</script>

<style lang="css" scoped>
</style>
