import React from 'react';

function Images({ src, alt, styleClass, title }) {
  return (
    <figure className={styleClass}>
      {title && <h4>{title || 'some default title'}</h4>}
      <img src={src || 'noImage.webp'} alt={alt || ''} loading='lazy' />
    </figure>
  );
}

export default Images;
