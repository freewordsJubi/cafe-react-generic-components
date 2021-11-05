"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomChoice = randomChoice;

function randomChoice(arr) {
  var choiceValue = arr[Math.floor(arr.length * Math.random())];
  return choiceValue;
}