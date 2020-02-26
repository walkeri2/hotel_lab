use guests;
db.dropDatabase();

db.bookings.insertMany([
  {
    guestName: "joe blog",
    guestEmail: "j_blog@gmail.com",
    guestStatus: "checked-in"
  },
  {
    guestName: "john",
    guestEmail: "john@gmail.com",
    guestStatus: "checked-out"
  },
  {
    guestName: "peter",
    guestEmail: "peter@gmail.com",
    guestStatus: "checked-in"
  },
  {
    guestName: "james",
    guestEmail: "james@gmail.com",
    guestStatus: "booked"
  }
]);
