const thumbnailsContainer = document.querySelector('.pictures');
const thumbnailTemplate = document.querySelector('#picture').content;

const renderThumbnails = (pictures) => {
  const fragment = document.createDocumentFragment();

  pictures.forEach(({ url, description, likes, comments}) => {
    const thumbnailElement = thumbnailTemplate.cloneNode(true);

    const image = thumbnailElement.querySelector('.picture__img');
    image.src = url;
    image.alt = description;

    thumbnailElement.querySelector('.picture__comments').textContent = comments.length;
    thumbnailElement.querySelector('.picture__likes').textContent = likes;

    fragment.append(thumbnailElement);
  });

  thumbnailsContainer.append(fragment);
};

export { renderThumbnails };
