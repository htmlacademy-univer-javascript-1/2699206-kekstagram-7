const thumbnailsContainer = document.querySelector('.pictures');
const thumbnailTemplate = document.querySelector('#picture').content;

const renderThumbnails = (pictures, onThumbnailClick) => {
  const fragment = document.createDocumentFragment();

  pictures.forEach((picture) => {

    const thumbnailElement = thumbnailTemplate.cloneNode(true);

    const image = thumbnailElement.querySelector('.picture__img');
    image.src = picture.url;
    image.alt = picture.description;

    thumbnailElement.querySelector('.picture__comments').textContent = picture.comments.length;
    thumbnailElement.querySelector('.picture__likes').textContent = picture.likes;

    image.addEventListener('click', (evt) => {
      evt.preventDefault();
      onThumbnailClick(picture);
    });

    fragment.append(thumbnailElement);
  });

  thumbnailsContainer.append(fragment);
};

export { renderThumbnails };
