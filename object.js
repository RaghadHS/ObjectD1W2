'use strict';
///This is the literal notation that is used to create a function.
var hotel = {

  ///Properties
  name : 'Myhotel',
  location : 'Amman',
  rooms : 40,
  booked: 20,
  gym: false,

  //Method
  checkAvailability: function () {
    return (this.rooms - this.booked);
  },
};
// The object created above is hotel.

var hotelname = hotel.name;
var available = hotel.checkAvailability();

alert('The hotel name is ' + hotelname + '  and there are ' + available + ' rooms available!');
