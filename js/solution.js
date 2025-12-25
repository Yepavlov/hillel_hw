"use strict";

function getElementsText(elements) {
  let result = [];

  for (const element of elements) {
    result.push(element.textContent);
  }
  return result;
}

const listElement = document.getElementById("ulId");
const listItems = listElement.children;
for (const element of listItems) console.log(element);

console.log("Total elements:", listItems.length);

const elementsText = getElementsText(listItems);
console.log("Total elements:", elementsText);
