import { useState } from 'react';
import fallbackImage from '../assets/images/about_interior_1783027689815.jpg';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

export default function ImageWithFallback({ 
  src, 
  fallbackSrc = fallbackImage, // Image par défaut du restaurant
  alt, 
  className,
  ...props
}: ImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      console.error(`[Image Error] L'image n'a pas pu être chargée: ${src}. Utilisation de l'image de secours.`);
      setImgSrc(fallbackSrc);
      setHasError(true);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt || "Image de l'Opium Lounge"}
      onError={handleError}
      loading="lazy"
      decoding="async"
      className={`${className} transition-opacity duration-300 ${hasError ? 'opacity-80' : 'opacity-100'}`}
      {...props}
    />
  );
}
