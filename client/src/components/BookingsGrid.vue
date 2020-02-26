<template lang="html">
  <div id="bookingsGrid">
    <booking v-for="(booking, index) in bookings" :key="index" :booking="booking"/>
  </div>
</template>

<script>
import {eventBus} from '../main';
import Booking from './Booking';
import BookingsService from '../services/BookingsService.js'

export default {
  name: "bookings-grid",
  data(){
    return {
      bookings: []
    }
  },
  components: {
    'booking': Booking
  },
  mounted(){
    this.fetchData();

    eventBus.$on('booking-added', (booking) => {
      this.bookings.push(booking)
    })

    eventBus.$on('booking-deleted', (id) => {
      const index = this.bookings.findIndex(booking => this.bookings._id === id)
      this.bookings.splice(index,1)
    })

    eventBus.$on('booking-edited', (event_booking) => {
      const index = this.bookings.findIndex(booking => booking.id === event_booking._id)
      this.bookings.splice(index,1,event_booking)
    })

  },
  methods: {
    fetchData(){
      BookingsService.getBookings()
      .then(bookings => this.bookings = bookings);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
