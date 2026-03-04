export default class UserModel {
    constructor() {
        this.baseUrl = "https://jsonplaceholder.typicode.com";
        this.allPhotos = [];
        this.offset = 0;
        this.limit = 12;
    }

    async fetchUsers() {
        const endpoint = "users";
        return await this.#fetchData(endpoint);
    }

    async fetchAlbums(userId) {
        const endpoint = `albums?userId=${userId}`;
        return await this.#fetchData(endpoint);
    }

    async fetchPhotos(albumId) {
        const endpoint = `photos?albumId=${albumId}`;

        this.allPhotos = await this.#fetchData(endpoint);
        this.offset = 0;

    }

    getPhotos() {
        const paginatedPhotos = this.allPhotos.slice(this.offset, this.offset + this.limit);
        this.offset += this.limit;
        const hasMore = this.offset < this.allPhotos.length;
        return {
            photos: paginatedPhotos,
            hasMore: hasMore
        };
    }

    async #fetchData(endpoint) {
        const response = await fetch(`${this.baseUrl}/${endpoint}`);
        if (!response.ok) throw new Error("HTTP " + response.status);
        return await response.json();
    }
}