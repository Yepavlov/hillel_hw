class UsersModel {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
        this.users = [];
    }

    async getAll() {
        const response = await fetch(this.apiUrl);
        if (!response.ok) throw new Error('Failed to fetch users');
        this.users = await response.json();
        return this.users;
    }

    async create(userData) {
        const response = await fetch(this.apiUrl, {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: {'Content-type': 'application/json; charset=UTF-8'},
        });
        if (!response.ok) throw new Error('Failed to create user');
        const newUser = await response.json();
        newUser.id = Date.now();
        this.users.unshift(newUser);
        return newUser;
    }

    async update(id, userData) {
        let updatedUser = {...userData, id: Number(id)};
        if (id <= 10) {
            const response = await fetch(`${this.apiUrl}/${id}`, {
                method: 'PUT',
                body: JSON.stringify(updatedUser),
                headers: {'Content-type': 'application/json; charset=UTF-8'},
            });
            if (!response.ok) throw new Error('Failed to update user');
            updatedUser = await response.json();
        }
        const index = this.users.findIndex(u => u.id === Number(id));
        if (index !== -1) this.users[index] = updatedUser;
        return updatedUser;
    }

    delete(id) {
        const url = id <= 10 ? `${this.apiUrl}/${id}` : `${this.apiUrl}/1`;
        return fetch(url, {method: 'DELETE'})
            .then(response => {
                if (!response.ok) throw new Error('Failed to delete user');
                this.users = this.users.filter(u => u.id !== Number(id));
            });
    }
}

export default UsersModel;