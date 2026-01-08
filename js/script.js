"use strict";

const container = document.querySelector("#cards-container");

container.addEventListener("click", function (event) {
  console.log(event);
  const btn = event.target.closest("[data-read-more-btn]");
  if (!btn) return;

  const currentCard = btn.closest(".card");

  const longText = currentCard.querySelector(".long-text");
  longText.classList.toggle("expanded");
  btn.textContent = longText.classList.contains("expanded")
    ? "Hide"
    : "Read more";
});
