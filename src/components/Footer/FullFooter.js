import React, {useState} from 'react';
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
            <a key={image.id} href={image.link || '#'}>
              <Images src={image.src} alt={image.alt} styleClass={image.styleClass} title={image.title} />
            </a>
          );
        })}
    </div>
  );
};

export { Footer };
