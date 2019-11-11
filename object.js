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

var newFirstN = 'Dina';
document.getElementById('firstN').innerHTML = newFirstN;

document.write('Your new name is ' + document.getElementById('firstN').innerHTML + document.getElementById('MiddleN').innerHTML +
document.getElementById('LastN').innerHTML);

//creating new element nickname
var nickname = document.createElement('li') ;
var NickN = document.createTextNode('Raghood');
nickname.appendChild(NickN);
var position = document.getElementsByTagName('ul')[0];
position.appendChild(nickname);