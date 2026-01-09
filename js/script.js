"use strict";

const input = document.querySelector("#itemInput");
const addBtn = document.querySelector("#addBtn");
const list = document.querySelector("#myList");

function addNewTask() {
  const text = input.value;
  if (text.trim() === "") return;

  const newLi = document.createElement("li");
  newLi.append(text);

  const deleteBtn = document.createElement("button");
  deleteBtn.append("✖");
  deleteBtn.classList.add("delete-btn");

  newLi.append(deleteBtn);
  list.appendChild(newLi);
  input.value = "";
}

addBtn.addEventListener("click", () => {
  addNewTask();
});

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") addNewTask();
});

list.addEventListener("click", (event) => {
  const targetElement = event.target;

  if (targetElement.closest(".delete-btn")) {
    const itemToDelete = targetElement.closest("li");
    itemToDelete.remove();
    return;
  }
  const liItem = targetElement.closest("li");
  if (liItem) liItem.classList.toggle("selected");
});
