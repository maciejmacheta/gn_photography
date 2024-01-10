import { Image } from "react-grid-gallery";
import { importedPhotos } from './PhotosImport.js';

export interface CustomImage extends Image {
  original: string;
}

export const images: CustomImage[] = [
  {
    src: importedPhotos[0],
    original: importedPhotos[0],
    width: 690,
    height: 1000,
    tags: [
      { value: "Nature", title: "Nature" },
      { value: "Flora", title: "Flora" },
    ],
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: importedPhotos[1],
    original: importedPhotos[1],
    width: 690,
    height: 1000,
    tags: [
      { value: "Nature", title: "Nature" },
      { value: "Flora", title: "Flora" },
    ],
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: importedPhotos[2],
    original: importedPhotos[2],
    width: 1490,
    height: 1000,
    tags: [
      { value: "Nature", title: "Nature" },
      { value: "Flora", title: "Flora" },
    ],
    caption: "After Rain (Jeshu John - designerspics.com)",
  },

  {
    src: importedPhotos[3],
    original: importedPhotos[3],
    width: 690,
    height: 1000,
    tags: [
      { value: "Nature", title: "Nature" },
      { value: "Flora", title: "Flora" },
    ],
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: importedPhotos[4],
    original: importedPhotos[4],
    width: 690,
    height: 1000,
    tags: [
      { value: "Nature", title: "Nature" },
      { value: "Flora", title: "Flora" },
    ],
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: importedPhotos[5],
    original: importedPhotos[5],
    width: 690,
    height: 1000,
    tags: [
      { value: "Nature", title: "Nature" },
      { value: "Flora", title: "Flora" },
    ],
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: importedPhotos[6],
    original: importedPhotos[6],
    width: 690,
    height: 1000,
    tags: [
      { value: "Nature", title: "Nature" },
      { value: "Flora", title: "Flora" },
    ],
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: importedPhotos[1],
    original: importedPhotos[1],
    width: 690,
    height: 1000,
    tags: [
      { value: "Nature", title: "Nature" },
      { value: "Flora", title: "Flora" },
    ],
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: importedPhotos[1],
    original: importedPhotos[1],
    width: 690,
    height: 1000,
    tags: [
      { value: "Nature", title: "Nature" },
      { value: "Flora", title: "Flora" },
    ],
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
];