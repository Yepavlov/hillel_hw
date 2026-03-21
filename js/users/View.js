class UsersView {
    constructor() {
        this.tbody = document.getElementById('users-table-body');
        this.spinner = document.getElementById('global-spinner');
        this.paginationContainer = document.getElementById('pagination-container');
        this.sortIcon = document.getElementById('sort-icon');

        this.userModal = new bootstrap.Modal(document.getElementById('userModal'));
        this.deleteModal = new bootstrap.Modal(document.getElementById('deleteModal'));
        this.toastElement = document.getElementById('app-toast');
        this.toast = new bootstrap.Toast(this.toastElement);
        this.toastMessage = document.getElementById('toast-message');

        this.form = document.getElementById('user-form');
        this.modalTitle = document.getElementById('userModalLabel');
        this.deleteConfirmText = document.getElementById('delete-confirm-text');
    }

    renderTable(users) {
        this.tbody.innerHTML = '';
        if (users.length === 0) {
            this.tbody.innerHTML = '<tr><td colspan="6" class="text-center">No users found</td></tr>';
            return;
        }

        users.forEach(user => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.phone || '-'}</td>
                <td>${user.company?.name || '-'}</td>
                <td>
                    <button class="btn btn-sm btn-warning btn-edit" data-id="${user.id}">Edit</button>
                    <button class="btn btn-sm btn-danger btn-delete" data-id="${user.id}">Delete</button>
                </td>
            `;
            this.tbody.appendChild(tr);
        });
    }

    renderPagination(totalPages, currentPage) {
        this.paginationContainer.innerHTML = '';
        if (totalPages <= 1) return;

        for (let i = 1; i <= totalPages; i++) {
            const li = document.createElement('li');
            li.className = `page-item ${i === currentPage ? 'active' : ''}`;
            li.innerHTML = `<button class="page-link" data-page="${i}">${i}</button>`;
            this.paginationContainer.appendChild(li);
        }
    }

    updateSortIcon(direction) {
        if (!direction) this.sortIcon.textContent = '↕️';
        else if (direction === 'asc') this.sortIcon.textContent = '↑';
        else this.sortIcon.textContent = '↓';
    }

    showToast(message, type = 'success') {
        this.toastMessage.textContent = message;
        this.toastElement.classList.remove('bg-success', 'bg-danger');
        this.toastElement.classList.add(`bg-${type}`);
        this.toast.show();
    }

    setLoading(isLoading) {
        this.spinner.style.display = isLoading ? 'flex' : 'none';
    }

    openCreateModal() {
        this.form.reset();
        document.getElementById('user-id').value = '';
        this.modalTitle.textContent = 'Add User';
        this.clearValidationErrors();
        this.userModal.show();
    }

    openEditModal(user) {
        this.clearValidationErrors();
        this.modalTitle.textContent = 'Edit User';
        document.getElementById('user-id').value = user.id;
        document.getElementById('user-name').value = user.name;
        document.getElementById('user-email').value = user.email;
        document.getElementById('user-phone').value = user.phone || '';
        document.getElementById('user-company').value = user.company?.name || '';
        this.userModal.show();
    }

    openDeleteModal(user) {
        this.deleteConfirmText.textContent = `Are you sure you want to delete ${user.name}?`;
        document.getElementById('btn-confirm-delete').dataset.id = user.id;
        this.deleteModal.show();
    }

    getFormData() {
        return {
            id: document.getElementById('user-id').value,
            name: document.getElementById('user-name').value.trim(),
            email: document.getElementById('user-email').value.trim(),
            phone: document.getElementById('user-phone').value.trim(),
            company: {name: document.getElementById('user-company').value.trim()}
        };
    }

    validateForm(data) {
        this.clearValidationErrors();
        let isValid = true;

        if (!data.name) {
            document.getElementById('user-name').classList.add('is-invalid');
            isValid = false;
        }
        if (!data.email || !data.email.includes('@')) {
            document.getElementById('user-email').classList.add('is-invalid');
            isValid = false;
        }
        return isValid;
    }

    clearValidationErrors() {
        document.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
    }

    closeModals() {
        this.userModal.hide();
        this.deleteModal.hide();
    }
}

export default UsersView;