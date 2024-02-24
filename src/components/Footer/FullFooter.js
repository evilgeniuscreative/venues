import React, { useState } from 'react';
import Images from '../Images/Images';

// backgroundColor: 'blue' |'red'
// text: string
// link: string
// data
// Image props
// src
// alt
// styleClass
// title

const Footer = ({ data, text, styleClass }) => {
  return (
    <div className={styleClass}>
      {text && text}
      {data.length &&
        data.map((image) => {
          return (
            <a key={image.place.id} href={image.place.url || '#'}>
              <Images src={image.place.src} alt={image.place.alt} styleClass={image.place.styleClass} title={image.place.title} />
            </a>
          );
        })}
    </div>
  );
};

export { Footer };
