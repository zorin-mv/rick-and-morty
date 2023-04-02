import { classNames } from 'shared/lib/class-names';
import { Button } from 'shared/ui/button';

import classes from './page-error.module.scss';

interface IPageErrorProps {
  className?: string;
}

export const PageError = ({ className }: IPageErrorProps) => {
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(classes.pageError, [className])}>
      <p>Something went wrong...</p>
      <Button onClick={reloadPage}>Reload Page</Button>
    </div>
  );
};
