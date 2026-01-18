"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");
  const passwordToggles = document.querySelectorAll(".toggle-password");
  const jsonResult = document.getElementById("jsonResult");
  const clearBtn = document.getElementById("clearBtn");

  console.log("This is a form with all elements", form.elements);

  const STORAGE_KEY = "registrationFormData";

  loadFormData();

  passwordToggles.forEach((btn) => {
    btn.addEventListener("click", () => {
      const input = btn.previousElementSibling;
      const icon = btn.querySelector("i");

      if (input.type === "password") {
        input.type = "text";
        icon.classList.remove("bi-eye");
        icon.classList.add("bi-eye-slash");
      } else {
        input.type = "password";
        icon.classList.remove("bi-eye-slash");
        icon.classList.add("bi-eye");
      }
    });
  });

  form.addEventListener("input", (e) => {
    const input = e.target;
    saveFormData();

    if (input.name) {
      validateField(input);
    }

    if (input.name === "password") {
      const confirmInput = form.querySelector('[name="confirmPassword"]');
      if (confirmInput.value) validateField(confirmInput);
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputs = form.elements;
    let isFromValid = true;
    let firstInvalidInput = null;

    for (const input of inputs) {
      if (!input.name) continue;
      const isValid = validateField(input);
      if (!isValid) {
        isFromValid = false;
        if (!firstInvalidInput) {
          firstInvalidInput = input;
        }
      }
    }
    if (!isFromValid) {
      firstInvalidInput.focus();
    } else {
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      data.age = Number(data.age);

      jsonResult.textContent = JSON.stringify(data, null, 4);
    }
  });

  clearBtn.addEventListener("click", () => {
    form.reset();
    localStorage.removeItem(STORAGE_KEY);
    jsonResult.textContent = "";

    form.querySelectorAll(".is-invalid, .is-valid").forEach((el) => {
      el.classList.remove("is-invalid", "is-valid");
    });
  });

  function validateField(input) {
    let isValid = true;

    input.classList.remove("is-invalid", "is-valid");
    switch (input.name) {
      case "email": {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        isValid = emailPattern.test(input.value);
        break;
      }
      case "password": {
        const passPattern = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;
        isValid = passPattern.test(input.value);
        break;
      }

      case "confirmPassword": {
        const passInput = form.querySelector('[name="password"]');
        isValid = input.value === passInput.value && input.value !== "";
        break;
      }

      case "age": {
        const age = Number(input.value);
        isValid = age >= 16 && age <= 120;
        break;
      }

      case "city": {
        isValid = input.value !== "";
        break;
      }

      case "terms": {
        isValid = input.checked;
        break;
      }
    }

    input.classList.toggle("is-valid", isValid);
    input.classList.toggle("is-invalid", !isValid);
    return isValid;
  }

  function saveFormData() {
    const data = {};

    for (const element of form.elements) {
      if (!element.name) continue;

      if (element.type === "checkbox") {
        data[element.name] = element.checked;
      } else {
        data[element.name] = element.value;
      }
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  function loadFormData() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      const data = JSON.parse(savedData);
      for (const key in data) {
        const input = form.elements[key];
        if (!input) continue;
        if (input.type === "checkbox") {
          input.checked = data[key];
        } else {
          input.value = data[key];
        }
      }
    }
  }
});
