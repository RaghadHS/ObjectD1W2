'use strict';
// ///This is the literal notation that is used to create a function.
// var hotel = {

//   ///Properties
//   name : 'Myhotel',
//   location : 'Amman',
//   rooms : 40,
//   booked: 20,
//   gym: false,

//   //Method
//   checkAvailability: function () {
//     return (this.rooms - this.booked);
//   },
// };
// // The object created above is hotel.

// var hotelname = hotel.name;
// var available = hotel.checkAvailability();

// alert('The hotel name is ' + hotelname + '  and there are ' + available + ' rooms available!');

var item1;
var item2;
item1 = 'ITEM 1 old data';
alert( item1);

item2 = 'ITEM 2 old data'; 
alert( item2);

var item1String = 'ITEM 1 new data';
var item2String = 'ITEM 2 new data';

item1.innerHTML = item1String;
alert(item1);

item2.innerHTML = item2String;
alert(item2);
