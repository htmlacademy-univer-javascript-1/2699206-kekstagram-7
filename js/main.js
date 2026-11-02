import { generatePhotos } from './photo.js';
import { renderThumbnails } from './thumbnails.js';

const photos = generatePhotos();
renderThumbnails(photos);
