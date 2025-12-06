"use strict";

function generateKey(length, characters) {
  let key = "";
  const maxIndex = characters.length;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * maxIndex);
    key += characters[randomIndex];
  }
  return key;
}

const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
const keyLength = 18;
const key = generateKey(keyLength, characters);

console.assert(
  key.length === keyLength,
  "Error: The generated key has the wrong length.",
);

console.log(`Generated key: ${key}`);
console.log(`Key Length: ${keyLength}`);
