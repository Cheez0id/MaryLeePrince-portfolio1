
// var fs = require('fs');
// var moment = require('moment'); 
// moment().format(); 

const todayDay = () => {
const today = document.getElementById("today");
console.log(today);
var dayToday = moment().format("dddd, MMMM Do YYYY");
today.append(dayToday);
}
todayDay();

// const dayToday = moment().format("dddd, MMMM Do YYYY");
// today.text(dayToday);


// // const todayDate = moment().format("[Today is] dddd");
// // today.text(today);

// // console.log(todayDate);


