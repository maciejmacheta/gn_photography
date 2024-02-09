import React from 'react';

import { Image } from "react-grid-gallery";
import { importedPhotos } from './PhotosImport.js';
import "./PhotosList.css";

export interface CustomImage extends Image {
  original: string;
}

export const images: CustomImage[] = [
  {
    src: importedPhotos[0],
    original: importedPhotos[0],
    width: 750,
    height: 1100,
    customOverlay: (
      <div className="custom-overlay__caption">
        <div>aasadasdsassadsads</div>
      </div>
    ),
  },
  {
    src: importedPhotos[1],
    original: importedPhotos[1],
    width: 750,
    height: 1100,
    customOverlay: (
      <div className="custom-overlay__caption">
        <div></div>
      </div>
    ),
    
  },
  {
    src: importedPhotos[2],
    original: importedPhotos[2],
    width: 1490,
    height: 1000,
    customOverlay: (
      <div className="custom-overlay__caption">
        <div></div>
      </div>
    ),
    
  },
  {
    src: importedPhotos[4],
    original: importedPhotos[4],
    width: 1490,
    height: 1000,
    customOverlay: (
      <div className="custom-overlay__caption">
        <div></div>
      </div>
    ),
    
  },
  {
    src: importedPhotos[3],
    original: importedPhotos[3],
    width: 750,
    height: 1100,
    customOverlay: (
      <div className="custom-overlay__caption">
        <div></div>
      </div>
    ),
    
  },
  {
    src: importedPhotos[5],
    original: importedPhotos[5],
    width: 750,
    height: 1100,
    customOverlay: (
      <div className="custom-overlay__caption">
        <div></div>
      </div>
    ),
    
  },
  {
    src: importedPhotos[7],
    original: importedPhotos[7],
    width: 750,
    height: 1100,
    customOverlay: (
      <div className="custom-overlay__caption">
        <div></div>
      </div>
    ),
    
  },
  {
    src: importedPhotos[6],
    original: importedPhotos[6],
    width: 1490,
    height: 1000,
    customOverlay: (
      <div className="custom-overlay__caption">
        <div></div>
      </div>
    ),
    
  },
  {
    src: importedPhotos[9],
    original: importedPhotos[9],
    width: 750,
    height: 1100,
    customOverlay: (
      <div className="custom-overlay__caption">
        <div></div>
      </div>
    ),
    
  },
  {
    src: importedPhotos[10],
    original: importedPhotos[10],
    width: 750,
    height: 1100,
    customOverlay: (
      <div className="custom-overlay__caption">
        <div></div>
      </div>
    ),
    
  },
  {
    src: importedPhotos[11],
    original: importedPhotos[11],
    width: 750,
    height: 1100,
    customOverlay: (
      <div className="custom-overlay__caption">
        <div></div>
      </div>
    ),
    
  },
  {
    src: importedPhotos[12],
    original: importedPhotos[12],
    width: 1490,
    height: 1000,
    customOverlay: (
      <div className="custom-overlay__caption">
        <div></div>
      </div>
    ),
    
  },
  {
    src: importedPhotos[13],
    original: importedPhotos[13],
    width: 750,
    height: 1100,
    customOverlay: (
      <div className="custom-overlay__caption">
        <div></div>
      </div>
    ),
    
  },
  {
    src: importedPhotos[14],
    original: importedPhotos[14],
    width: 750,
    height: 1100,
    customOverlay: (
      <div className="custom-overlay__caption">
        <div></div>
      </div>
    ),
    
  },
  {
    src: importedPhotos[15],
    original: importedPhotos[15],
    width: 750,
    height: 1100,
    customOverlay: (
      <div className="custom-overlay__caption">
        <div></div>
      </div>
    ),
    
  },
  {
    src: importedPhotos[16],
    original: importedPhotos[16],
    width: 750,
    height: 1100,
    customOverlay: (
      <div className="custom-overlay__caption">
        <div></div>
      </div>
    ),
    
  },
  {
    src: importedPhotos[17],
    original: importedPhotos[17],
    width: 750,
    height: 1100,
    customOverlay: (
      <div className="custom-overlay__caption">
        <div></div>
      </div>
    ),
    
  },
  {
    src: importedPhotos[18],
    original: importedPhotos[18],
    width: 750,
    height: 1100,
    customOverlay: (
      <div className="custom-overlay__caption">
        <div></div>
      </div>
    ),
    
  },
  {
    src: importedPhotos[19],
    original: importedPhotos[19],
    width: 750,
    height: 1100,
    customOverlay: (
      <div className="custom-overlay__caption">
        <div></div>
      </div>
    ),
    
  },
  {
    src: importedPhotos[20],
    original: importedPhotos[20],
    width: 1490,
    height: 1000,
    customOverlay: (
      <div className="custom-overlay__caption">
        <div></div>
      </div>
    ),
    
  },
  {
    src: importedPhotos[21],
    original: importedPhotos[21],
    width: 750,
    height: 1100,
    customOverlay: (
      <div className="custom-overlay__caption">
        <div></div>
      </div>
    ),
    
  },
  {
    src: importedPhotos[22],
    original: importedPhotos[22],
    width: 1490,
    height: 1000,
    customOverlay: (
      <div className="custom-overlay__caption">
        <div></div>
      </div>
    ),
    
  },
  {
    src: importedPhotos[23],
    original: importedPhotos[23],
    width: 750,
    height: 1100,
    customOverlay: (
      <div className="custom-overlay__caption">
        <div></div>
      </div>
    ),
    
  },
  {
    src: importedPhotos[24],
    original: importedPhotos[24],
    width: 750,
    height: 1100,
    customOverlay: (
      <div className="custom-overlay__caption">
        <div></div>
      </div>
    ),
    
  },
  {
    src: importedPhotos[25],
    original: importedPhotos[25],
    width: 1490,
    height: 1000,
    customOverlay: (
      <div className="custom-overlay__caption">
        <div></div>
      </div>
    ),
    
  },
  {
    src: importedPhotos[26],
    original: importedPhotos[26],
    width: 750,
    height: 1100,
    customOverlay: (
      <div className="custom-overlay__caption">
        <div></div>
      </div>
    ),
    
  },
  {
    src: importedPhotos[27],
    original: importedPhotos[27],
    width: 750,
    height: 1100,
    customOverlay: (
      <div className="custom-overlay__caption">
        <div></div>
      </div>
    ),
    
  },
  {
    src: importedPhotos[28],
    original: importedPhotos[28],
    width: 750,
    height: 1100,
    customOverlay: (
      <div className="custom-overlay__caption">
        <div></div>
      </div>
    ),
    
  },
  {
    src: importedPhotos[29],
    original: importedPhotos[29],
    width: 750,
    height: 1100,
    customOverlay: (
      <div className="custom-overlay__caption">
        <div></div>
      </div>
    ),
    
  },
  {
    src: importedPhotos[30],
    original: importedPhotos[30],
    width: 750,
    height: 1100,
    customOverlay: (
      <div className="custom-overlay__caption">
        <div></div>
      </div>
    ),
    
  },
  {
    src: importedPhotos[31],
    original: importedPhotos[31],
    width: 750,
    height: 1100,
    customOverlay: (
      <div className="custom-overlay__caption">
        <div></div>
      </div>
    ),
    
  },
  {
    src: importedPhotos[32],
    original: importedPhotos[32],
    width: 750,
    height: 1100,
    customOverlay: (
      <div className="custom-overlay__caption">
        <div></div>
      </div>
    ),
    
  },
  {
    src: importedPhotos[33],
    original: importedPhotos[33],
    width: 750,
    height: 1100,
    customOverlay: (
      <div className="custom-overlay__caption">
        <div></div>
      </div>
    ),
    
  },
  {
    src: importedPhotos[34],
    original: importedPhotos[34],
    width: 750,
    height: 1100,
    customOverlay: (
      <div className="custom-overlay__caption">
        <div></div>
      </div>
    ),
    
  },
  {
    src: importedPhotos[35],
    original: importedPhotos[35],
    width: 750,
    height: 1100,
    customOverlay: (
      <div className="custom-overlay__caption">
        <div></div>
      </div>
    ),
    
  },
  {
    src: importedPhotos[36],
    original: importedPhotos[36],
    width: 750,
    height: 1100,
    customOverlay: (
      <div className="custom-overlay__caption">
        <div></div>
      </div>
    ),
    
  },
  {
    src: importedPhotos[37],
    original: importedPhotos[37],
    width: 750,
    height: 1100,
    customOverlay: (
      <div className="custom-overlay__caption">
        <div></div>
      </div>
    ),
    
  },
  {
    src: importedPhotos[38],
    original: importedPhotos[38],
    width: 750,
    height: 1100,
    customOverlay: (
      <div className="custom-overlay__caption">
        <div></div>
      </div>
    ),
    
  },
  {
    src: importedPhotos[39],
    original: importedPhotos[39],
    width: 1490,
    height: 1000,
    customOverlay: (
      <div className="custom-overlay__caption">
        <div></div>
      </div>
    ),
    
  },
  {
    src: importedPhotos[45],
    original: importedPhotos[45],
    width: 1490,
    height: 1000,
    customOverlay: (
      <div className="custom-overlay__caption">
        <div></div>
      </div>
    ),
    
  },{
    src: importedPhotos[43],
    original: importedPhotos[43],
    width: 1490,
    height: 1000,
    customOverlay: (
      <div className="custom-overlay__caption">
        <div></div>
      </div>
    ),
    
  },
  {
    src: importedPhotos[40],
    original: importedPhotos[40],
    width: 750,
    height: 1100,
    customOverlay: (
      <div className="custom-overlay__caption">
        <div></div>
      </div>
    ),
    
  },
  {
    src: importedPhotos[41],
    original: importedPhotos[41],
    width: 750,
    height: 1100,
    customOverlay: (
      <div className="custom-overlay__caption">
        <div></div>
      </div>
    ),
    
  },
  {
    src: importedPhotos[42],
    original: importedPhotos[42],
    width: 750,
    height: 1100,
    customOverlay: (
      <div className="custom-overlay__caption">
        <div></div>
      </div>
    ),
    
  },
  
  {
    src: importedPhotos[44],
    original: importedPhotos[44],
    width: 750,
    height: 1100,
    customOverlay: (
      <div className="custom-overlay__caption">
        <div></div>
      </div>
    ),
    
  },
];
