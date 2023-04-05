import { CharacterInfo } from 'entities/character';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { RoutePath } from 'shared/constant/app-routes';
import { classNames } from 'shared/lib/class-names';
import { Spinner } from 'shared/ui/spinner';
import { TextComponent } from 'shared/ui/text';

import classes from './character-info-page.module.scss';

import { useCharacterInfoQuery } from '../model/services/use-character-info-query.api';

interface ICharacterInfoPageProps {
  className?: string;
}

const CharacterInfoPage = ({ className }: ICharacterInfoPageProps) => {
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (!id || Number(id) < 1) {
      navigate(RoutePath.main, { replace: true });
    }
  }, [id, navigate]);

  const { data, isLoading, error } = useCharacterInfoQuery(id ?? '');

  if (error) {
    return (
      <section data-testid="character-info-page" className={classNames(classes.characterInfoPage, [className])}>
        <div className="container">
          <div data-testid="error">
            <TextComponent text={error.message} theme="error" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section data-testid="character-info-page" className={classNames(classes.characterInfoPage, [className])}>
      <div className="container">
        {isLoading ? <Spinner theme="light" /> : <CharacterInfo character={data?.character} searchId={id} />}
      </div>
    </section>
  );
};

export default CharacterInfoPage;
