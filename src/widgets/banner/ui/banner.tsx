import { classNames } from 'shared/lib/class-names';
import { Icon } from 'shared/ui/icon';

import classes from './banner.module.scss';

interface IBannerProps {
  title?: string;
  className?: string;
}

export const Banner = ({ className, title }: IBannerProps) => {
  return (
    <section data-testid="banner" className={classNames(classes.banner, [className])}>
      {title ? <h1 className={classes.banner_title}>{title}</h1> : null}
      <div className={classes.banner_heroImage}>
        <Icon type="banner" />
      </div>
    </section>
  );
};
