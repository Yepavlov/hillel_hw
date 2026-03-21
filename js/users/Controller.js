class UsersController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.uiState = {
            searchQuery: '',
            sortDirection: null,
            currentPage: 1,
            itemsPerPage: 4
        };

        this.init();
    }

    async init() {
        this.bindEvents();
        try {
            this.view.setLoading(true);
            await this.model.getAll();
            this.updateUI();
        } catch (error) {
            this.view.showToast('User loading error', 'danger');
        } finally {
            this.view.setLoading(false);
        }
    }

    updateUI() {
        let processedUsers = [...this.model.users];

        if (this.uiState.searchQuery) {
            const query = this.uiState.searchQuery.toLowerCase();
            processedUsers = processedUsers.filter(u =>
                u.name.toLowerCase().includes(query) ||
                u.email.toLowerCase().includes(query)
            );
        }

        if (this.uiState.sortDirection) {
            processedUsers.sort((a, b) => {
                const comparison = a.name.localeCompare(b.name);
                return this.uiState.sortDirection === 'asc' ? comparison : -comparison;
            });
        }
        this.view.updateSortIcon(this.uiState.sortDirection);

        const totalPages = Math.ceil(processedUsers.length / this.uiState.itemsPerPage);

        if (this.uiState.currentPage > totalPages && totalPages > 0) {
            this.uiState.currentPage = totalPages;
        }

        const startIndex = (this.uiState.currentPage - 1) * this.uiState.itemsPerPage;
        const paginatedUsers = processedUsers.slice(startIndex, startIndex + this.uiState.itemsPerPage);

        this.view.renderTable(paginatedUsers);
        this.view.renderPagination(totalPages, this.uiState.currentPage);
    }

    bindEvents() {
        document.getElementById('btn-add-user').addEventListener('click', () => this.view.openCreateModal());
        document.getElementById('user-form').addEventListener('submit', (e) => this.handleFormSubmit(e));

        document.getElementById('users-table-body').addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-edit')) this.handleEditClick(e.target.dataset.id);
            if (e.target.classList.contains('btn-delete')) this.handleDeleteClick(e.target.dataset.id);
        });

        document.getElementById('btn-confirm-delete').addEventListener('click', (e) => this.handleDeleteConfirm(e.target.dataset.id));

        document.getElementById('search-input').addEventListener('input', (e) => {
            this.uiState.searchQuery = e.target.value;
            this.uiState.currentPage = 1;
            this.updateUI();
        });

        document.getElementById('sort-name').addEventListener('click', () => {
            if (this.uiState.sortDirection === null) this.uiState.sortDirection = 'asc';
            else if (this.uiState.sortDirection === 'asc') this.uiState.sortDirection = 'desc';
            else this.uiState.sortDirection = null;
            this.updateUI();
        });

        document.getElementById('pagination-container').addEventListener('click', (e) => {
            if (e.target.classList.contains('page-link')) {
                this.uiState.currentPage = Number(e.target.dataset.page);
                this.updateUI();
            }
        });
    }

    async handleFormSubmit(e) {
        e.preventDefault();
        const formData = this.view.getFormData();
        if (!this.view.validateForm(formData)) return;

        try {
            this.view.setLoading(true);
            if (formData.id) {
                await this.model.update(formData.id, formData);
                this.view.showToast('The user has been successfully updated!');
            } else {
                await this.model.create(formData);
                this.view.showToast('The user has been successfully created!');
                this.uiState.currentPage = 1;
            }
            this.view.closeModals();
            this.updateUI();
        } catch (error) {
            this.view.showToast(error.message, 'danger');
        } finally {
            this.view.setLoading(false);
        }
    }

    handleEditClick(id) {
        const user = this.model.users.find(u => u.id === Number(id));
        if (user) this.view.openEditModal(user);
    }

    handleDeleteClick(id) {
        const user = this.model.users.find(u => u.id === Number(id));
        if (user) this.view.openDeleteModal(user);
    }

    handleDeleteConfirm(id) {
        this.view.setLoading(true);
        this.model.delete(id)
            .then(() => {
                this.view.closeModals();
                this.view.showToast('The user has been deleted!');
                this.updateUI();
            })
            .catch(error => {
                this.view.showToast('Error during deletion', 'danger');
                this.view.closeModals();
            })
            .finally(() => {
                this.view.setLoading(false);
            });
    }
}

export default UsersController;