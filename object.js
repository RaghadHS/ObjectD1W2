'use strict';

///CREATING CONSTRUCTOR CALLED HOTEL
function Hotel (name, location, rooms, booked){

  this.hname = name;
  this.locate = location;
  this.room = rooms;
  this.booked = booked;
  //creating a function for printing the hotel on screen.
  this.print = function (){
    document.write('<br> <br> <br> Welcome to our database, your hotel is called  ' + this.hname + ' and is located in ' + this.locate + '.  '
  + this.booked + ' out of ' + this.room + ' are booked.' );
  };
  //Function to check availability
  this.checkAvailability = function (){
    return (this.room - this.booked);
  };
}

///TO CREATE OBJECT OF CLASS HOTEL

var newHotel = new Hotel('Ibis', 'Amman', '500', '150' , true);

document.write('The new hotel is ' + newHotel.hname + ' and is located in ' + newHotel.locate + '.  '
+ newHotel.booked + ' out of ' + newHotel.room + ' are booked.' );

////ASKING USER TO INPUT THEIR HOTEL'S INFO
var hotelName, hotelLocation , hotelRoom , roomsBooked ;
function hotelInput(){

  hotelName = prompt('Enter the name of your hotel :');
  hotelLocation = prompt ('Where is your hotel located ?');
  hotelRoom = prompt ('How many rooms are available in your hotel ?');
  roomsBooked = prompt ('Out of the ' + hotelRoom + ', how many are booked?');

  var nwHotel =  new Hotel(hotelName , hotelLocation, hotelRoom, roomsBooked);
  nwHotel.print();
  alert('You have ' + nwHotel.checkAvailability() + ' rooms available!');
}
////END OF USER INPUT

hotelInput();