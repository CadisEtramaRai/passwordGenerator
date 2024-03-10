"use strict";

const input = document.querySelector("input");
const btn = document.querySelector("button");
const copy = document.querySelector(".copy");
const passwordLenght = 10;
const upperCase = "ABCDEFGH";
const lowerCase = "abcdefgh";
const numbers = "0123456789";
const allChars = upperCase + lowerCase + numbers;

function passwordGenerator() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];

  while (passwordLenght > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  input.value = password;
}

function copyPassword() {
  input.select();
  document.execCommand("copy");
}

copy.addEventListener("click", copyPassword);

btn.addEventListener("click", passwordGenerator);
