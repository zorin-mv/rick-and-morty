import { screen } from '@testing-library/react';
import { type ICharacter } from 'entities/character';
import { componentRender } from 'shared/lib/tests/component-render';
import { vi } from 'vitest';

import { CharacterItem } from './character-item';

describe('CharacterItem', () => {
  const character: ICharacter = {
    id: '1',
    name: 'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    status: 'Alive',
    species: 'Human',
    type: '',
    origin: { name: 'Earth' },
  };

  beforeEach(() => {
    const mockIntersectionObserver = vi.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });

  test('renders character information correctly', () => {
    componentRender(<CharacterItem character={character} />);

    const nameElement = screen.getByTestId('name');
    expect(nameElement).toHaveTextContent('Rick Sanchez');

    const lifeInfoElement = screen.getByTestId('lifeInfo');
    expect(lifeInfoElement).toHaveTextContent('Alive - Human');

    const typeElement = screen.getByTestId('type');
    expect(typeElement).toHaveTextContent('Type:unknown');

    const originElement = screen.getByTestId('origin');
    expect(originElement).toHaveTextContent('Origin:Earth');
  });
});
