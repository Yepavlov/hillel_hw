export default class UserController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.bindUserSelect(this.handleUserChange.bind(this));
        this.view.bindAlbumSelect(this.handleAlbumChange.bind(this));
        this.view.bindLoadPhotos(this.handleLoadPhotos.bind(this));
        this.view.bindLoadMore(this.handleLoadMore.bind(this));

        this.init();
    }

    async init() {
        try {
            this.view.setStatus('Loading users...');
            const users = await this.model.fetchUsers();
            this.view.renderOptions(this.view.userSelect, 'Select user...', users, 'name');
        } catch (error) {
            this.view.showError(error);
        } finally {
            this.view.clearStatus();
        }
    }

    async handleUserChange(userId) {
        try {
            this.view.clearPhotos();
            this.view.setElementsState({albumSelectDisabled: true, loadBtnDisabled: true});
            this.view.setStatus('Loading albums...');

            const albums = await this.model.fetchAlbums(userId);
            this.view.renderOptions(this.view.albumSelect, 'Select album...', albums, 'title');

            this.view.setElementsState({albumSelectDisabled: false});
        } catch (error) {
            this.view.showError(error);
        } finally {
            this.view.clearStatus();
        }
    }

    handleAlbumChange(albumId) {
        this.view.setElementsState({loadBtnDisabled: !albumId});
    }

    async handleLoadPhotos(albumId) {
        try {
            this.view.clearPhotos();
            this.view.setStatus('Loading photos...');

            await this.model.fetchPhotos(albumId);

            this.handleLoadMore();
        } catch (error) {
            this.view.showError(error);
        } finally {
            this.view.clearStatus();
        }
    }

    handleLoadMore() {
        const {photos, hasMore} = this.model.getPhotos();

        this.view.renderPhotos(photos, true);

        this.view.toggleLoadMoreBtn(hasMore);
    }
}