

// const fs = require("fs");
// const moment = require("../../node_modules/moment/moment");
// var fs = require('fs');
// var moment = require('moment'); 
// moment().format(); 

const todayDay = () => {
const today = document.getElementById("today");
console.log(today);
var dayToday = `Today's Date is ${moment().format("dddd, MMMM Do YYYY")}`;
today.append(dayToday);
}
todayDay();

const since = () =>{
  let beginCoding = moment("2021-12-06", "YYYY-MM-DD");
  let currentDay = moment().startOf('day');
  let daysSince = moment.duration(beginCoding.diff(currentDay)).asDays() * -1;
console.log("hi"); 
today.append(`; it has been ${daysSince} days since I started learning to code.`);
console.log(daysSince);
}
since();



// const dayToday = moment().format("dddd, MMMM Do YYYY");
// today.text(dayToday);


// // const todayDate = moment().format("[Today is] dddd");
// // today.text(today);

// // console.log(todayDate);


