export default class UserView {
    constructor() {
        this.userSelect = document.querySelector('#userSelect');
        this.albumSelect = document.querySelector('#albumSelect');
        this.loadBtn = document.querySelector('#loadBtn');
        this.statusDiv = document.querySelector('#status');
        this.photosDiv = document.querySelector('#photos');

        this.loadMoreContainer = document.createElement('div');
        this.loadMoreContainer.className = 'load-more-container';

        this.loadMoreBtn = this.createLoadMoreBtn();
        this.loadMoreContainer.appendChild(this.loadMoreBtn);
        this.photosDiv.after(this.loadMoreContainer);
    }

    createLoadMoreBtn() {
        let loadMoreBtn = document.createElement('button');
        loadMoreBtn.textContent = 'Load more';
        loadMoreBtn.style.display = 'none';
        return loadMoreBtn;
    }


    setStatus(message) {
        this.statusDiv.textContent = message;
        this.statusDiv.style.color = '#555';
    }

    showError(error) {
        this.statusDiv.textContent = `Error: ${error.message}`;
        this.statusDiv.style.color = 'red';
    }

    clearStatus() {
        this.statusDiv.textContent = '';
    }


    renderOptions(selectElement, defaultText, data, textKey) {
        selectElement.innerHTML = `<option value="" disabled selected>${defaultText}</option>`;

        data.forEach(item => {
            const option = document.createElement('option');
            option.value = item.id;
            option.textContent = item[textKey];
            selectElement.appendChild(option);
        });
    }

    clearPhotos() {
        this.photosDiv.innerHTML = '';
        this.loadMoreBtn.style.display = 'none';
    }

    setElementsState({albumSelectDisabled, loadBtnDisabled}) {
        if (albumSelectDisabled !== undefined) this.albumSelect.disabled = albumSelectDisabled;
        if (loadBtnDisabled !== undefined) this.loadBtn.disabled = loadBtnDisabled;
    }


    renderPhotos(photos, append = false) {
        if (!append) {
            this.photosDiv.innerHTML = '';
        }

        photos.forEach(photo => {
            const card = document.createElement('div');
            card.className = 'photo-card';

            // Картинка
            const img = document.createElement('img');
            img.src = photo.thumbnailUrl;
            img.alt = 'thumbnail';

            const title = document.createElement('p');
            const truncatedTitle = photo.title.length > 40
                ? photo.title.substring(0, 40) + '...'
                : photo.title;
            title.textContent = truncatedTitle;

            const link = document.createElement('a');
            link.href = photo.url;
            link.textContent = 'Open';
            link.target = '_blank';

            card.append(img, title, link);
            this.photosDiv.appendChild(card);
        });
    }

    toggleLoadMoreBtn(show) {
        this.loadMoreBtn.style.display = show ? 'inline-block' : 'none';
    }

    bindUserSelect(handler) {
        this.userSelect.addEventListener('change', (e) => handler(e.target.value));
    }

    bindAlbumSelect(handler) {
        this.albumSelect.addEventListener('change', (e) => handler(e.target.value));
    }

    bindLoadPhotos(handler) {
        this.loadBtn.addEventListener('click', () => handler(this.albumSelect.value));
    }

    bindLoadMore(handler) {
        this.loadMoreBtn.addEventListener('click', () => handler());
    }
}