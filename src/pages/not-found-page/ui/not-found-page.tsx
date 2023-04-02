import { classNames } from 'shared/lib/class-names';

import classes from './not-found-page.module.scss';

interface INotFoundPageProps {
  className?: string;
}

export const NotFoundPage = ({ className }: INotFoundPageProps) => (
  <div className={classNames(classes.notFoundPage, [className])}>{'Page Not Found'}</div>
);
