import React from 'react';
import BGImage from '../Images/bgImg';

// backgroundColor: 'blue' |'red'
// text: string
// link: string
// data
// Image props
// src
// alt
// styleClass
// title

const FullFooter = ({ data, text, styleClass }) => {
  console.log({ fromFooter: data, text, styleClass });
  return (
    <div className={styleClass}>
      {text && text}
      {data.length &&
        data.map((image) => {
          return (
            <a key={image.place.id} href={`/detail/${image.place.id}` || '#'}>
              <BGImage src={image.place.src} alt={image.place.alt} styleClass={image.place.styleClass} title={image.place.title} />
            </a>
          );
        })}
    </div>
  );
};

export default FullFooter
