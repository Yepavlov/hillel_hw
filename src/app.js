import {contactService} from "./services/contact.service.js";
import {validateForm} from "./utils/validator.js";
import {createContactModalLayout} from "./components/layouts/contactModal.layout.js";
import {createContactListHandler} from "./components/contactList.component.js";
import {createConfirmationModalLayout} from "./components/layouts/confirmationModal.layout.js";

const listHandler = createContactListHandler();

const addContactModal = createContactModalLayout();

const confirmModal = createConfirmationModalLayout();

const openModalBtn = document.querySelector('[data-add-contact-modal-btn]');
openModalBtn.addEventListener('click', () => addContactModal.show());

const form = addContactModal._element.querySelector('form');

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const data = Object.fromEntries(formData.entries());
    const {isValid, errors} = validateForm(data);

    evt.target.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
    evt.target.querySelectorAll('.invalid-feedback').forEach(el => el.remove());

    if (!isValid) {
        Object.entries(errors).forEach(([key, message]) => {
            const input = evt.target.querySelector(`[name="${key}"]`);
            if (input) {
                input.classList.add('is-invalid');
                const errorDiv = document.createElement('div');
                errorDiv.className = 'invalid-feedback';
                errorDiv.textContent = message;
                input.parentElement.appendChild(errorDiv);
            }
        });
        return;
    }

    const savedContact = contactService.add(data);
    listHandler.addElement(savedContact);

    evt.target.reset();
    evt.target.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
    evt.target.querySelectorAll('.invalid-feedback').forEach(el => el.remove());

    addContactModal.hide();
});


let contactIdToDelete = null;

const confirmBtn = confirmModal._element.querySelector('[data-action="confirm"]');
const namePlaceholder = confirmModal._element.querySelector('#delete-contact-name-placeholder');

listHandler.listElement.addEventListener('click', (evt) => {
    const deleteBtn = evt.target.closest('[data-action="delete"]');
    if (!deleteBtn) return;

    contactIdToDelete = deleteBtn.dataset.id;

    const listItem = deleteBtn.closest('li');
    namePlaceholder.textContent = listItem.querySelector('.fw-bold').textContent;

    confirmModal.show();
});

confirmBtn.addEventListener('click', () => {
    if (!contactIdToDelete) return;

    const isDeleted = contactService.remove(contactIdToDelete);

    if (isDeleted) {
        listHandler.removeElement(contactIdToDelete);
    }

    confirmModal.hide();
    contactIdToDelete = null;
});

