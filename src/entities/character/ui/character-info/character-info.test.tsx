import { render } from '@testing-library/react';
import { CharacterInfo, type ICharacterFullInfo } from 'entities/character';
import { vi } from 'vitest';

const character: ICharacterFullInfo = {
  id: '1',
  name: 'Morty Smith',
  status: 'Alive',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: {
    id: '1',
    name: 'Earth (C-137)',
    type: 'Planet',
    dimension: 'Dimension C-137',
    residents: [{ id: '1' }],
  },
  location: {
    id: '20',
    name: 'Earth (Replacement Dimension)',
    type: 'Planet',
    dimension: 'Replacement Dimension',
    residents: [{ id: '1' }],
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  episode: [
    {
      id: '1',
      name: 'Pilot',
    },
  ],
};

describe('CharacterInfo', () => {
  beforeEach(() => {
    const mockIntersectionObserver = vi.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });

  test('renders character info', () => {
    const { getByTestId } = render(<CharacterInfo character={character} />);
    expect(getByTestId('character-info')).toBeInTheDocument();
  });

  test('renders character name', () => {
    const { getByText } = render(<CharacterInfo character={character} />);
    expect(getByText('Morty Smith')).toBeInTheDocument();
  });

  test('renders origin location name', () => {
    const { getByText } = render(<CharacterInfo character={character} />);
    expect(getByText('Earth (C-137)')).toBeInTheDocument();
  });

  test('renders last known location name', () => {
    const { getByText } = render(<CharacterInfo character={character} />);
    expect(getByText('Earth (Replacement Dimension)')).toBeInTheDocument();
  });

  test('renders episode name', () => {
    const { getByText } = render(<CharacterInfo character={character} />);
    expect(getByText('Pilot')).toBeInTheDocument();
  });
});
