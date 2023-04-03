import { memo } from 'react';
import { Link } from 'react-router-dom';
import { RoutePath } from 'shared/constant/app-routes';
import { classNames } from 'shared/lib/class-names';
import { Icon } from 'shared/ui/icon';

import classes from './page-header.module.scss';

interface IPageHeaderProps {
  className?: string;
}

export const PageHeader = memo(({ className }: IPageHeaderProps) => {
  return (
    <header data-testid="page-header" className={classNames(classes.pageHeader, [className])}>
      <Link data-testid="link" to={RoutePath.main}>
        <Icon data-testid="logo" type="logo" className={classes.logo} />
      </Link>
    </header>
  );
});
