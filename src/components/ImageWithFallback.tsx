import { useState } from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

export default function ImageWithFallback({ 
  src, 
  fallbackSrc = 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80&fm=webp', // Image par défaut du restaurant (bouteille/bar)
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
