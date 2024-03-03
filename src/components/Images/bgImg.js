import React from 'react';

function BGImage({ src, alt, styleClass, title }) {
  return (
    <figure className={styleClass} style={{ backgroundImage: `url(${src || 'noImage.webp'})` }}>
      {title && <h4>{title || 'some default title'}</h4>}
    </figure>
  );
}

export default BGImage;
