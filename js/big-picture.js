import { COMMENT_LIMITATION_ON_PAGE } from './data.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImage = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCaption = bigPicture.querySelector('.social__caption');
const commentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const cancelButton = bigPicture.querySelector('.big-picture__cancel');

let currentComments = [];
let renderedCommentsCount = 0;

const createCommentElement = (comment) => {
  const commentElement = document.createElement('li');
  commentElement.classList.add('social__comment');

  const avatar = document.createElement('img');
  avatar.classList.add('social__picture');
  avatar.src = comment.avatar;
  avatar.alt = comment.name;
  avatar.width = 35;
  avatar.height = 35;

  const text = document.createElement('p');
  text.classList.add('social__text');
  text.textContent = comment.message;

  commentElement.append(avatar, text);

  return commentElement;
};

const renderComments = (comments) => {
  const fragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    fragment.append(createCommentElement(comment));
  });

  socialComments.append(fragment);
};

const updateCommentCount = () => {
  commentCount.firstChild.textContent = `${renderedCommentsCount} из `;
  commentsCount.textContent = currentComments.length;
};

const loadMoreComments = () => {
  const nextComments = currentComments.slice(renderedCommentsCount, renderedCommentsCount + COMMENT_LIMITATION_ON_PAGE);

  renderComments(nextComments);
  renderedCommentsCount += nextComments.length;
  updateCommentCount();

  if (renderedCommentsCount >= currentComments.length) {
    commentsLoader.classList.add('hidden');
  }
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onEscKeydown);
  cancelButton.removeEventListener('click', closeBigPicture);
  commentsLoader.removeEventListener('click', loadMoreComments);
};

function onEscKeydown(evt) {
  if (evt.key === 'Escape') {
    closeBigPicture();
  }
}

const openBigPicture = (photo) => {
  currentComments = photo.comments;
  renderedCommentsCount = 0;

  socialComments.replaceChildren();

  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');

  bigPictureImage.src = photo.url;
  bigPictureImage.alt = photo.description;
  likesCount.textContent = photo.likes;
  socialCaption.textContent = photo.description;

  commentCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');

  loadMoreComments();

  document.addEventListener('keydown', onEscKeydown);
  cancelButton.addEventListener('click', closeBigPicture);
  commentsLoader.addEventListener('click', loadMoreComments);
};

export { openBigPicture };
