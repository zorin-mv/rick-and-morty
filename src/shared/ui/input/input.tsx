import { memo, type ChangeEventHandler, type InputHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/class-names';

import classes from './input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value' | 'disabled'>;

interface IInputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  disabled?: boolean;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const Input = memo((props: IInputProps) => {
  const { className, disabled, value, onChange, placeholder, ...restProps } = props;

  return (
    <div className={classes.inputWrapper}>
      <input
        data-testid="input"
        className={classNames(classes.inputWrapper__input, [className], {
          [classes.inputWrapper__input_disabled]: disabled,
        })}
        disabled={disabled}
        value={value}
        onChange={onChange}
        {...restProps}
      />
      {placeholder ? (
        <span data-testid="placeholder" className={classes.inputWrapper__input__placeholder}>
          {placeholder}
        </span>
      ) : null}
    </div>
  );
});
