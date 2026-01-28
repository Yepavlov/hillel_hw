import createModal from "../base/modalGenerator.js";

export const createConfirmationModalLayout = () => {
    const modalConfig = {
        title: 'Confirm Deletion',
        id: 'deleteContactModal',
    };

    const bodyHTML = `
    <p>
        Are you sure you want to delete contact: 
        <strong id="delete-contact-name-placeholder"></strong>?
    </p>
  `;

    const footerHTML = `
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
    <button type="button" class="btn btn-danger" data-action="confirm">
        Yes, Delete
    </button>
  `;

    return createModal(modalConfig, bodyHTML, footerHTML);
};