import { generatePhotos } from './photo.js';
import { renderThumbnails } from './thumbnails.js';
import { openBigPicture } from './big-picture.js';

const photos = generatePhotos();
renderThumbnails(photos, openBigPicture);
