export default class View {
    constructor() {
        this.form = document.getElementById("noteForm");
        this.titleInput = document.getElementById("noteTitle");
        this.categorySelect = document.getElementById("noteCategory");
        this.errorMessage = document.getElementById("errorMessage");
        this.notesList = document.getElementById("notesList")
        this.clearAllBtn = document.getElementById("clearAllBtn");
    }

    renderNotes(notes) {
        this.notesList.innerHTML = "";

        if (notes.length === 0) {
            this.notesList.innerHTML = `<div class="col-12 text-center text-muted"><h5>No notes yet.</h5></div>`;
            return;
        }

        notes.forEach(note => {
            const noteCard = document.createElement("div");
            noteCard.className = "cole-md-4 col-sm-6";

            noteCard.innerHTML = `
                <div class="card h-100 shadow-sm ${note.important ? 'note-important' : ''}" data-id="${note.id}">
                    <div class="card-body">
                        <span class="badge bg-secondary mb-2">${note.category}</span>
                        <h5 class="card-title">${note.title}</h5>
                    </div>
                    <div class="card-footer bg-transparent d-flex justify-content-between">
                        <button class="btn btn-sm ${note.important ? 'btn-warning' : 'btn-outline-warning'} toggle-btn">
                            ${note.important ? 'Unmark important' : 'Mark important'}
                        </button>
                        <button class="btn btn-sm btn-outline-danger delete-btn">Delete</button>
                    </div>
                </div>
            `;
            this.notesList.appendChild(noteCard);
        });
    }

    showError(message) {
        this.errorMessage.textContent = message;
        this.errorMessage.classList.remove('d-none');
    }

    clearError() {
        this.errorMessage.textContent = '';
        this.errorMessage.classList.add('d-none');
    }

    clearForm() {
        this.titleInput.value = '';
        this.categorySelect.value = 'work';
    }

    bindAddNote(handler) {
        this.form.addEventListener("submit", event => {
            event.preventDefault();
            const data = {
                title: this.titleInput.value,
                category: this.categorySelect.value,
            };
            handler(data);
        });
    }

    bindListActions(handler) {
        this.notesList.addEventListener("click", event => {
            const card = event.target.closest(".card");
            if (!card) return;

            const id = card.dataset.id;
            if (event.target.classList.contains("delete-btn")) {
                handler("delete", id);
            } else if (event.target.classList.contains("toggle-btn")) {
                handler("toggle", id);
            }
        });
    }

    bindClearAll(handler) {
        this.clearAllBtn.addEventListener("click", () => {
            handler();
        });
    }
}