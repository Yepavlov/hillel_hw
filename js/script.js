"use strict";

function validateStr(str) {
  if (str === undefined) return "Error: Argument string is missing";
  if (typeof str !== "string" || str.trim().length === 0) {
    return `Error: The argument String ${str} must be a non-empty string.`;
  }
  return null;
}

function validateChar(char) {
  if (char === undefined) return "Error: Argument char is missing";
  if (typeof char !== "string" || char.length !== 1) {
    return `Error: The argument Char "${char}" should be a string and contain only one char.`;
  }
  return null;
}

function validateLen(len) {
  if (len === undefined) return "Error: Argument length is missing";
  if (typeof len !== "number" || len <= 0 || !Number.isInteger(len)) {
    return `Error: The argument Len "${len}" should be a positive integer.`;
  }
  return null;
}

function padString(str, len, char, toRight = true) {
  const errorCommon = validateStr(str) || validateLen(len);
  if (errorCommon) return errorCommon;

  if (str.length > len) return str.substring(0, len);

  const errorChar = validateChar(char);
  if (errorChar) return errorChar;

  const diff = len - str.length;
  let padding = "";
  for (let i = 0; i < diff; i++) {
    padding += char;
  }
  if (toRight) {
    return str + padding;
  } else {
    return padding + str;
  }
}

const str = "Hello";
const len = 8;
const char = "-";

console.log(padString(str, len, char));
