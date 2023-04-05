import { memo, useState } from 'react';
import LazyLoad from 'react-lazy-load';
import { classNames } from 'shared/lib/class-names';

import classes from './lazy-image.module.scss';

interface ILazyImageProps {
  src: string;
  alt: string;
}

export const LazyImage = memo(({ src, alt }: ILazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <LazyLoad>
      <img
        src={src}
        alt={alt}
        onLoad={handleLoad}
        className={classNames(classes.image, [], { [classes.image_loaded]: isLoaded })}
      />
    </LazyLoad>
  );
});
