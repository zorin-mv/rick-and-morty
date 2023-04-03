import { memo } from 'react';
import { ReactComponent as banner } from 'shared/assets/icons/banner.svg';
import { ReactComponent as logo } from 'shared/assets/icons/logo.svg';

const ICONS = { logo, banner };

export type TIcon = keyof typeof ICONS;

interface IIconProps {
  type: TIcon;
  className?: string;
}

export const Icon = memo(({ type, className }: IIconProps) => {
  const NewIcon = ICONS[type];
  return <NewIcon className={className} />;
});
