import React from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export const Image: React.FC<ImageProps> = (props) => {
  return <img {...props} referrerPolicy="no-referrer" />;
};
