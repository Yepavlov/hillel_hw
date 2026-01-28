let modalInstanceId = 0;

const createModal = ({title, id = "modal", cssClass = ''}, bodyContent, footerContent) => {
    modalInstanceId++;
    const uniqueId = `${id}_${modalInstanceId}`;

    const modalWrapper = document.createElement("div");
    modalWrapper.className = cssClass ? `modal fade ${cssClass}`.trim() : 'modal fade';
    modalWrapper.id = uniqueId;
    modalWrapper.setAttribute('tabindex', '-1');
    modalWrapper.setAttribute('aria-hidden', 'true');
    modalWrapper.innerHTML = `
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5">${title}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                ${bodyContent}
            </div>
            <div class="modal-footer d-flex justify-content-between">
                ${footerContent}
            </div>
        </div>
    </div>
  `;

    document.body.appendChild(modalWrapper);

    return new bootstrap.Modal(modalWrapper, {
        backdrop: 'static',
        keyboard: false
    });

};

export default createModal;