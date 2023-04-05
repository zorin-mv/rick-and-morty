import { CharacterItem, type ICharacter } from 'entities/character';
import { classNames } from 'shared/lib/class-names';
import { TextComponent } from 'shared/ui/text';

import classes from './character-list.module.scss';

interface ICharacterListProps {
  characterList?: ICharacter[];
  className?: string;
}

export const CharacterList = ({ className, characterList }: ICharacterListProps) => {
  if (!characterList?.length) {
    return (
      <div data-testid="empty-character-list">
        <TextComponent className={classes.characterListEmptyMessage} text="No Characters Were Found" />
      </div>
    );
  }

  return (
    <div data-testid="character-list" className={classNames(classes.characterList, [className])}>
      {characterList.map((character) => (
        <CharacterItem character={character} key={character.id} />
      ))}
    </div>
  );
};
