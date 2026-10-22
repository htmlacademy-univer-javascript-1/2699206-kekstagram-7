const NAMES = [
  'Александр',
  'Мария',
  'Игорь',
  'Константин',
  'Елена',
  'Анна',
  'Пётр',
  'Галина',
  'Клим',
  'Екатерина'
];
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const DESCRIPTIONS = [
  'Обычный день и один кадр из него.',
  'Свет, тень и немного пространства.',
  'Просто момент из повседневности.',
  'Детали, которые легко пропустить.',
  'Тихая пауза среди дня.',
  'Один кадр без лишних слов.',
  'Наблюдаю и запоминаю.',
  'Всё как есть.',
  'Между делами и планами.',
  'Небольшая зарисовка без повода.'
];

const PHOTO_RULE = {
  MIN: 1,
  MAX: 25
};

const LIKES_RULE = {
  MIN: 15,
  MAX: 200
};

const COMMENTS_COUNT_RULE = {
  MIN: 0,
  MAX: 30
};

const COMMENT_ID_RULE = {
  MIN: 0,
  MAX: 1000
};

const COMMENT_AVATAR_RULE = {
  MIN: 1,
  MAX: 6
};

let usedPhotoID = [];
let usedCommentID = [];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createComment = () => {
  let id = getRandomInteger(COMMENT_ID_RULE.MIN, COMMENT_ID_RULE.MAX);
  while(usedCommentID.includes(id)) {
    id = getRandomInteger(COMMENT_ID_RULE.MIN, COMMENT_ID_RULE.MAX);
  }
  usedCommentID.push(id);

  return {
    id: id,
    avatar: `img/avatar-${getRandomInteger(COMMENT_AVATAR_RULE.MIN, COMMENT_AVATAR_RULE.MAX)}.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES)
  };
};

const createPhoto = () => {
  let id = getRandomInteger(PHOTO_RULE.MIN, PHOTO_RULE.MAX);
  while(usedPhotoID.includes(id)) {
    id = getRandomInteger(PHOTO_RULE.MIN, PHOTO_RULE.MAX);
  }
  usedPhotoID.push(id);

  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger(LIKES_RULE.MIN, LIKES_RULE.MAX),
    comments: Array.from({length: getRandomInteger(COMMENTS_COUNT_RULE.MIN, COMMENTS_COUNT_RULE.MAX)}, createComment)
  };
};

const photoArray = Array.from({length: PHOTO_RULE.MAX}, createPhoto);
console.log(photoArray);
