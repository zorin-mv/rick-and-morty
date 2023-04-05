import { type ICharacterLocation } from 'entities/character';
import { TextComponent } from 'shared/ui/text';

interface ILocationInfoProps {
  location: ICharacterLocation;
  nameTitle: string;
  className?: string;
}

export const LocationInfo = ({ className, nameTitle, location }: ILocationInfoProps) => {
  const { name, type, dimension, residents } = location;
  return (
    <div data-testid="location-info" className={className}>
      <TextComponent subTitle={nameTitle} text={name} isInline />
      {name !== 'unknown' ? (
        <>
          <TextComponent subTitle="Dimension:" text={dimension} isInline />
          <TextComponent subTitle="Type:" text={type} isInline />
          <TextComponent subTitle="Number of residents:" text={residents.length.toString()} isInline />
        </>
      ) : null}
    </div>
  );
};
