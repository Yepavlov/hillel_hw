export const createContactListHandler = () => {
    const listElement = document.querySelector('[data-contacts-list]');
    const alertElement = document.querySelector('[data-contacts-alert]');

    const _createItemTemplate = ({id, fullName, phone, address}) => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-start';
        li.dataset.id = id;

        li.innerHTML = `
        <div class="ms-2 me-auto">
            <div class="fw-bold">${fullName}</div>
            ${phone} <br>
            <small class="text-muted">${address}</small>
        </div>
        <button class="btn btn-danger btn-sm" data-action="delete" data-id="${id}">
            <i class="bi bi-trash"></i>
        </button>
    `;
        return li;
    };

    const _toggleEmptyState = () => {
        const isEmpty = listElement.children.length === 0;

        listElement.classList.toggle('d-none', isEmpty);
        alertElement.classList.toggle('d-none', !isEmpty);

    };

    const addElement = (contactData) => {
        const item = _createItemTemplate(contactData);
        listElement.prepend(item);
        _toggleEmptyState();
    };

    const removeElement = (id) => {
        const item = listElement.querySelector(`li[data-id="${id}"]`);
        if (item) item.remove();
        _toggleEmptyState();
    };

    return {
        listElement,
        addElement,
        removeElement
    };

}