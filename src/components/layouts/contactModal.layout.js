import createModal from "../base/modalGenerator.js";

export const createContactModalLayout = () => {
    const modalConfig = {
        title: 'Add New Contact',
        id: 'addContactModal'
    };

    const bodyHTML = `
    <form id="add-contact-form">
        <div class="mb-3">
            <label class="form-label">Full Name</label>
            <input name="fullName" type="text" class="form-control" placeholder="John Doe">
        </div>
        <div class="mb-3">
            <label class="form-label">Phone Number</label>
            <input name="phone" type="tel" class="form-control" placeholder="+1234567890">
        </div>
        <div class="mb-3">
            <label class="form-label">Address</label>
            <textarea name="address" class="form-control" rows="2" placeholder="City, Street..."></textarea>
        </div>
    </form>
  `;

    const footerHTML = `
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
    <button form="add-contact-form" type="submit" class="btn btn-success">
        <i class="bi bi-save"></i> Save Contact
    </button>
  `;

    return createModal(modalConfig, bodyHTML, footerHTML);
}