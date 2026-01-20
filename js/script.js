"use strict";

(function () {
    // Just for example
    const validationRegExps = {
        fullName: /^(?=.{2,80}$)[\p{L}]+(?:[ '\-][\p{L}]+){0,3}$/u,
        phone: /^\+[1-9]\d{7,14}$/,
        address: /^(?=.{2,120}$)[\p{L}\d][\p{L}\d\s.,'’\-\/#]+$/u,
    };

    const errorMessages = {
        fullName: "Full Name Required",
        phone: "Phone Number Required",
        address: "Address Required",
    };

    // UI Handling

    const uiContactsListHandler = () => {
        const contactsAlert = document.querySelector("[data-contacts-alert]");
        const contactsList = document.querySelector("[data-contacts-list]");

        const createItemTemplate = ({id, fullName, phone, address}) => {
            const li = document.createElement("li");
            li.classList.add(
                "list-group-item",
                "d-flex",
                "justify-content-between",
                "align-items-start",
            );
            li.dataset.id = id;
            li.innerHTML = `
                <div class="ms-2 me-auto">
                    <div class="fw-bold">${fullName}</div>
                    ${phone} <br>
                    <small class="text-muted">${address}</small>
                </div>
                <button class="btn btn-danger btn-sm" data-delete-btn data-name="${fullName}">
                    <i class="bi bi-trash"></i> Delete
                </button>
            `;

            return li;
        };

        const addElement = (data) => {
            const element = createItemTemplate(data);
            contactsList.prepend(element);
            contactsList.classList.remove("d-none");
            contactsAlert.classList.add("d-none");
        };

        const removeElement = (id) => {
            const element = contactsList.querySelector(`li[data-id="${id}"]`);
            if (element) {
                element.remove();
            }
            if (contactsList.children.length === 0) {
                contactsList.classList.add("d-none");
                contactsAlert.classList.remove("d-none");
            }
        };

        return {
            addElement,
            removeElement,
            contactsList,
        };
    };
    const listHandler = uiContactsListHandler();

    const toastElement = document.querySelector("#contactAdded");
    const toastBody = document.querySelector("#toast-body-text");
    const bsToast = new bootstrap.Toast(toastElement);

    const showToast = (message) => {
        toastBody.textContent = message;
        bsToast.show();
    };

    const addContactModalSelector = "#addContactModal";
    const addContactModal = new bootstrap.Modal(addContactModalSelector, {
        keyboard: false,
        backdrop: "static",
    });
    const modalTrigger = document.querySelector("[data-add-contact-modal-btn]");

    const deleteContactModal = new bootstrap.Modal("#deleteContactModal");
    const deleteConfirmBtn = document.querySelector("#confirm-delete-btn");
    const deleteCancelBtn = document.querySelector("#deleteContactModal .btn-secondary");
    const deleteNameSpan = document.querySelector("#delete-contact-name");

    // State management
    const contactsManagement = () => {
        let contacts = [];

        const getContacts = () => structuredClone(contacts);

        const addContact = (data) => {
            const newContact = {...data, id: Date.now()};
            contacts.push(newContact);
            return newContact;
        };

        const removeContact = (id) => {
            const numericId = Number(id);
            const index = contacts.findIndex((contact) => contact.id === numericId);
            if (index === -1) {
                console.warn(`Contact with id ${id} not found.`)
                return false;
            }
            contacts.splice(index, 1);
            return true;
        };

        return {
            getContacts,
            addContact,
            removeContact,
        };
    };
    const contactService = contactsManagement();

    // Events
    modalTrigger.addEventListener("click", () => {
        addContactModal.show();
    });

    addContactModal._element
        .querySelector(`form#add-contact-form`)
        .addEventListener("submit", (evt) => {
            evt.preventDefault();
            let formValidated = true;
            const inputs = evt.target.querySelectorAll("input, textarea");

            const rawData = Array.from(inputs).reduce((acc, input) => {
                const {name, value, parentElement: wrapper} = input;
                const existingError = wrapper.querySelector(".error-validation");
                if (existingError) existingError.remove();

                if (validationRegExps[name].test(value)) {
                    acc[name] = value;
                } else {
                    const errBlock = document.createElement("div");
                    errBlock.innerHTML = errorMessages[name];
                    errBlock.classList.add("text-danger", "error-validation", "small");
                    wrapper.append(errBlock);
                    formValidated = false;
                }
                return acc;
            }, {});

            if (!formValidated) return null;

            const savedContact = contactService.addContact(rawData);

            listHandler.addElement(savedContact);

            addContactModal.hide();
            showToast("Contact successfully added!");
            evt.target.reset();
        });

    let contactIdToDelete = null;

    listHandler.contactsList.addEventListener("click", (evt) => {
        const deleteBtn = evt.target.closest("[data-delete-btn]");
        if (deleteBtn) {
            const liItem = deleteBtn.closest("li");
            contactIdToDelete = liItem.dataset.id;
            const contactName = deleteBtn.dataset.name;

            deleteNameSpan.textContent = contactName;
            deleteContactModal.show();
        }
    });

    deleteCancelBtn.addEventListener("click", () => {
        console.log("Cancel clicked, clearing ID");
        contactIdToDelete = null;
    });

    deleteConfirmBtn.addEventListener("click", () => {
        if (contactIdToDelete) {
            const isDeleted = contactService.removeContact(contactIdToDelete)

            if (isDeleted) {
                listHandler.removeElement(contactIdToDelete);
                showToast("Contact deleted.");
            } else {
                showToast("Error: Contact not found.");
            }
            deleteContactModal.hide();
            contactIdToDelete = null;
        }
    });
    document
        .getElementById("deleteContactModal")
        .addEventListener("hidden.bs.modal", () => {
            contactIdToDelete = null;
        });
})();
