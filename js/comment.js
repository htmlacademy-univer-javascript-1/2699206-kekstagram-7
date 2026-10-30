import { NAMES, MESSAGES, COMMENT_AVATAR_RULE, COMMENT_ID_RULE } from './data.js';
import { getRandomInteger, getRandomArrayElement, createIdGenerator } from './utils.js';

const createComments = (count) => {
  const nextCommentId = createIdGenerator(COMMENT_ID_RULE.MIN);

  return Array.from({ length: count }, () => ({
    id: nextCommentId(),
    avatar: `img/avatar-${getRandomInteger(COMMENT_AVATAR_RULE.MIN, COMMENT_AVATAR_RULE.MAX)}.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  }));
};

export { createComments };
