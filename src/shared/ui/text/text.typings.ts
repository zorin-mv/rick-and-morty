import { type ALIGN_TEXT, type TEXT_THEME } from './text.constants';

export type TTextTheme = ValueOf<typeof TEXT_THEME>;
export type TTextAlign = ValueOf<typeof ALIGN_TEXT>;

export interface ITextProps {
  className?: string;
  title?: string;
  subTitle?: string;
  text?: string;
  theme?: TTextTheme;
  align?: TTextAlign;
}
