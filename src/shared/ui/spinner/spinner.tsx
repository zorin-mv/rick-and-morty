import { memo } from 'react';
import { classNames } from 'shared/lib/class-names';
import { Icon } from 'shared/ui/icon';

import classes from './spinner.module.scss';

const SPINNER_THEME = {
  LIGHT: 'light',
  DARK: 'dark',
} as const;

export type TSpinnerTheme = ValueOf<typeof SPINNER_THEME>;

interface ISpinnerProps {
  className?: string;
  theme?: TSpinnerTheme;
}

export const Spinner = memo(({ className, theme = 'dark' }: ISpinnerProps) => (
  <div data-testid="spinner" className={classNames(classes.spinner, [className, classes[`spinner_${theme}`]])}>
    <Icon type="logo" />
  </div>
));
