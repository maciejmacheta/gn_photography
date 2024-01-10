import React, { useState } from "react";
// Pozostały kod
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "./PhotosList.css";
import { images, CustomImage } from "./images.ts";

const slides = images.map(({ original, width, height }) => ({
  src: original,
  width,
  height,
}));

export default function App() {
  const [index, setIndex] = useState(-1);

  const handleClick = (index: number, item: CustomImage) => setIndex(index);

  return (
    <div className="Overlay">
      <Gallery
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
        rowHeight={750}
      />
      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </div>
  );
}