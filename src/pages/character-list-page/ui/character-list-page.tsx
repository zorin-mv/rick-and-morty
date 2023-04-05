import Pagination from '@mui/material/Pagination';
import { useRef, useState, type ChangeEvent } from 'react';
import { useDebounce } from 'shared/hooks/use-debounce';
import { Input } from 'shared/ui/input';
import { Spinner } from 'shared/ui/spinner';
import { TextComponent } from 'shared/ui/text';
import { Banner } from 'widgets/banner';

import { MUI_THEME } from '../constants/theme';
import classes from './character-list-page.module.scss';
import { CharacterList } from './character-list/character-list';

import { useCharactersQuery } from '../model/services/use-characters-query.api';

import { ThemeProvider } from '@mui/material/styles';

export const CharacterListPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const sectionRef = useRef<HTMLDivElement>(null);

  const debouncedSearch = useDebounce(searchQuery, 500);

  const { data, isLoading, error } = useCharactersQuery(debouncedSearch, page);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.currentTarget.value);
  };

  const handlePageChange = (_: ChangeEvent<unknown>, selectedPage: number) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    setPage(selectedPage);
  };

  return (
    <ThemeProvider theme={MUI_THEME}>
      <section>
        <Banner title="Rick And Morty Characters" />
        <div className="container" ref={sectionRef}>
          <Input
            placeholder="Search"
            onChange={onSearchChange}
            value={searchQuery}
            className={classes.characterListPage__search}
          />
          <div>
            {isLoading ? (
              <Spinner theme="light" />
            ) : error ? (
              <div data-testid="error">
                <TextComponent text={error.message} theme="error" />
              </div>
            ) : (
              <CharacterList characterList={data?.characters.results} />
            )}
          </div>
          {data?.characters.info.pages ? (
            <div data-testid="pagination">
              <Pagination
                count={data?.characters.info.pages}
                variant="outlined"
                onChange={handlePageChange}
                page={page}
                shape="rounded"
                className={classes.characterListPage__pagination}
                color="primary"
              />
            </div>
          ) : null}
        </div>
      </section>
    </ThemeProvider>
  );
};
