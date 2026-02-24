export default class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view.bindAddNote(this.handleAddNote.bind(this));
        this.view.bindListActions(this.handleListActions.bind(this));
        this.view.bindClearAll(this.handleClearAll.bind(this));
        this.updateView();
    }

    updateView() {
        const notes = this.model.readAll();
        this.view.renderNotes(notes);
    }

    handleAddNote(data) {
        this.view.clearError();
        try {
            this.model.create(data);
            this.view.clearForm();
            this.updateView();
        } catch (error) {
            this.view.showError("Invalid note. Title must be at least 3 characters.");
            console.error("Validation logic error:", error.message);
        }
    }

    handleListActions(action, id) {
        if (action === 'delete') {
            this.model.delete(id);
        } else if (action === 'toggle') {
            this.model.toggleImportant(id);
        }
        this.updateView();
    }

    handleClearAll() {
        this.model.clearAll();
        this.updateView();
    }
}