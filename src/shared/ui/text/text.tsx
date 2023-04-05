import { memo } from 'react';
import { classNames } from 'shared/lib/class-names';

import classes from './text.module.scss';

import { type ITextProps } from './text.typings';

export const TextComponent = memo(
  ({ className, title, text, subTitle, theme = 'primary', align = 'left' }: ITextProps) => (
    <div
      data-testid="text-wrapper"
      className={classNames(classes.textWrapper, [
        className,
        classes[`textWrapper_${theme}`],
        classes[`textWrapper_${align}`],
      ])}
    >
      {title ? <h3 className={classes.title}>{title}</h3> : null}
      {subTitle ? <h4 className={classes.subTitle}>{subTitle}</h4> : null}
      {text ? <p className={classes.text}>{text}</p> : null}
    </div>
  )
);
