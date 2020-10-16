"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var jsonResponse = '';
fetch("https://www.themealdb.com/api/json/v1/1/random.php").then(function (response) {
  // do something if promise is successful
  return response.json(); // Convert readable stream to javascript object notation
}).then(function (jsonResponse) {
  console.log(_typeof(jsonResponse)); // log the jsonofied response

  document.querySelector("#result").innerHTML = "".concat(jsonResponse);
}).catch(function (error) {
  console.log(error);
});