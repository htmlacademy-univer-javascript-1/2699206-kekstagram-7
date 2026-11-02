import { DESCRIPTIONS, PHOTO_RULE, LIKES_RULE, COMMENTS_COUNT_RULE } from './data.js';
import { getRandomInteger, getRandomArrayElement, createIdGenerator } from './utils.js';
import { createComments } from './comment.js';

const createPhoto = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKES_RULE.MIN, LIKES_RULE.MAX),
  comments: createComments(
    getRandomInteger(COMMENTS_COUNT_RULE.MIN, COMMENTS_COUNT_RULE.MAX)
  ),
});

const generatePhotos = (count = PHOTO_RULE.MAX) => {
  const nextPhotoId = createIdGenerator(PHOTO_RULE.MIN);
  return Array.from({ length: count }, () => createPhoto(nextPhotoId()));
};

export { generatePhotos };
