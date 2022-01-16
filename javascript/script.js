
//attempting to use NPM module to use moment.js - ended up using script source from browser
// const fs = require("fs");
// const moment = require("../../node_modules/moment/moment");
// var fs = require('fs');
// var moment = require('moment'); 
// moment().format(); 

//A function to show today's date.
const todayDay = () => {
const today = document.getElementById("today");
console.log(today);
var dayToday = `Today's Date is ${moment().format("dddd, MMMM Do YYYY")}`;
today.append(dayToday);
}
todayDay();
//and a function to add the number of days since I started learning to code.
const since = () =>{
  let beginCoding = moment("2021-12-06", "YYYY-MM-DD");
  let currentDay = moment().startOf('day');
  let daysSince = moment.duration(beginCoding.diff(currentDay)).asDays() * -1;
console.log("hi"); 
today.append(`; it has been ${daysSince} days since I started learning to code.`);
console.log(daysSince);
}
since();


