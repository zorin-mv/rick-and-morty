import { classNames } from 'shared/lib/class-names';
import { Banner } from 'widgets/banner';
import { PageHeader } from 'widgets/page-header';

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
      <PageHeader />
      <Banner title="Sorry, something went wrong..." />
      <button className={classes.pageError__reloadBtn} onClick={reloadPage}>
        Reload Page
      </button>
    </div>
  );
};
