import { useNavigate } from 'react-router-dom';
import { classNames } from 'shared/lib/class-names';
import { LazyImage } from 'shared/ui/lazy-image/lazy-image';
import { TextComponent } from 'shared/ui/text';

import classes from './character-item.module.scss';

import { type ICharacter } from '../../models/types/character.typings';

interface ICharacterItemProps {
  character: ICharacter;
  className?: string;
}

export const CharacterItem = ({ className, character }: ICharacterItemProps) => {
  const navigate = useNavigate();

  const handleCharacterItemClick = () => {
    navigate(`character-info/${character.id}`);
  };

  return (
    <article
      data-testid="character-item"
      onClick={handleCharacterItemClick}
      className={classNames(classes.characterItem, [className])}
    >
      <div className={classes.characterItem__imageWrapper}>
        <LazyImage src={character.image} alt="character's avatar" />
      </div>
      <div className={classes.characterItem__info} data-testid="character-item-info">
        <div data-testid="name">
          <TextComponent title={character.name} />
        </div>
        <div className={classes.characterItem__info__lifeInfo} data-testid="lifeInfo">
          <i
            className={classNames(classes.characterItem__info__lifeInfo__statusIcon, [
              classes[`characterItem__info__lifeInfo__statusIcon_${character.status}`],
            ])}
          />
          <TextComponent text={`${character.status} - ${character.species}`} />
        </div>
        <div data-testid="type">
          <TextComponent subTitle="Type:" text={character.type || 'unknown'} theme="secondary" />
        </div>
        <div data-testid="origin">
          <TextComponent subTitle="Origin:" text={character.origin.name} theme="secondary" />
        </div>
      </div>
    </article>
  );
};
