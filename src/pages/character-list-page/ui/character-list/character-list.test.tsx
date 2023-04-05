import { type ICharacter } from 'entities/character';
import { componentRender } from 'shared/lib/tests/component-render';
import { vi } from 'vitest';

import { CharacterList } from './character-list';

describe('CharacterList', () => {
  beforeEach(() => {
    const mockIntersectionObserver = vi.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });

  test('renders empty message', () => {
    const { getByTestId } = componentRender(<CharacterList />);
    expect(getByTestId('empty-character-list')).toBeInTheDocument();
  });

  test('renders list of characters', () => {
    const characters: ICharacter[] = [
      {
        id: '1',
        name: 'John',
        species: 'Human',
        type: 'unknown',
        status: 'Alive',
        image: '',
        origin: { name: 'Earth' },
      },
      {
        id: '2',
        name: 'Jane',
        species: 'Robot',
        type: 'unknown',
        status: 'Alive',
        image: '',
        origin: { name: 'Earth' },
      },
    ];
    const { getByTestId } = componentRender(<CharacterList characterList={characters} />);
    expect(getByTestId('character-list')).toBeInTheDocument();
  });
});
