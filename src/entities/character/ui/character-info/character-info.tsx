import { type ICharacterFullInfo } from 'entities/character';
import { classNames } from 'shared/lib/class-names';
import { LazyImage } from 'shared/ui/lazy-image';
import { TextComponent } from 'shared/ui/text';
import { LocationInfo } from 'widgets/location-info';

import classes from './character-info.module.scss';

interface ICharacterInfoProps {
  searchId?: string;
  character?: ICharacterFullInfo;
  className?: string;
}

export const CharacterInfo = ({ className, character, searchId }: ICharacterInfoProps) => {
  if (!character) {
    return <TextComponent title={`The character with such id:${searchId ?? 'unknown'} was not found`} />;
  }

  const { status, image, name, species, type, origin, episode, gender } = character;

  return (
    <div data-testid="character-info" className={classNames(classes.characterInfo, [className])}>
      <div className={classes.characterInfo__title}>
        <h1>{name}</h1>
      </div>
      <div className={classes.characterInfo__character}>
        <div className={classes.characterInfo__character__avatar}>
          <LazyImage src={image} alt="character's avatar" />
        </div>
        <div className={classes.characterInfo__character__info}>
          <h2>General Character Info</h2>
          <p
            className={classNames(classes.characterInfo__character__info__status, [
              classes[`characterInfo__character__info__status_${status}`],
            ])}
          >
            <span>Status:</span>
            <strong>{status}</strong>
          </p>
          <TextComponent subTitle="Gender:" text={gender} isInline />
          <TextComponent subTitle="Species:" text={species} isInline />
          <TextComponent subTitle="Type:" text={type || 'unknown'} isInline />
          <h2>Locations Info</h2>
          <div className={classes.characterInfo__character__info__location}>
            <div>
              <h3>Origin Location</h3>
              <LocationInfo nameTitle="First seen in:" location={character.location} />
            </div>
            <div>
              <h3>Last known Location</h3>
              {origin.id === character.location.id ? (
                <TextComponent subTitle="Last seen in:" text="The Origin Location" isInline />
              ) : (
                <LocationInfo nameTitle="Last seen in:" location={origin} />
              )}
            </div>
          </div>
        </div>
      </div>
      <h2>List of Episodes</h2>
      <div className={classes.characterInfo__episodeList}>
        {episode.map((episodeElem) => (
          <div key={episodeElem.id}>{episodeElem.name}</div>
        ))}
      </div>
    </div>
  );
};
