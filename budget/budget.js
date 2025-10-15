//Ava Werner 10/14/25
"use strict";

let income = 10000;
let rent = 1000;
let groceries = 100;
let utilities = 250;
let totalExpenes = rent + groceries + utilities;
let remainingMoney = income - totalExpenes;
let groceriePercentage = (groceries / income) * 100 + "%";
let rentPercentage = (rent / income) * 100 + "%";

console.log( "The total income was: " +   income.toLocaleString("en-US", {style: "currency", currency: "USD", }));
console.log( "The rent amount was: " +  rent.toLocaleString("en-US", { style: "currency", currency:"USD" }));
console.log( "The grocery total was: " +  groceries.toLocaleString("en-US", { style: "currency", currency:"USD" }));
console.log("The percent spent on rent is: " + rentPercentage);
console.log("The percent spent on groceries was: " + groceriePercentage);