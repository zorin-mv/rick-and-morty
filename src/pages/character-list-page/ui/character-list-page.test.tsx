import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { render, waitFor } from '@testing-library/react';
import { type ICharactersQueryResponse } from 'entities/character';
import { vi, type Mock } from 'vitest';

import { CharacterListPage } from './character-list-page';

vi.mock('@tanstack/react-query', async () => {
  const actual: any = await vi.importActual('@tanstack/react-query');
  return {
    ...actual,
    useQuery: vi.fn(),
  };
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

const data: ICharactersQueryResponse = {
  characters: {
    info: {
      pages: 1,
      count: 2,
    },
    results: [
      {
        id: '1',
        name: 'Rick Sanchez',
        status: 'Alive',
        species: 'Human',
        type: 'unknown',
        image: '',
        origin: { name: 'Earth' },
      },
      {
        id: '2',
        name: 'Morty Smith',
        status: 'Alive',
        species: 'Human',
        type: 'unknown',
        image: '',
        origin: { name: 'Earth' },
      },
    ],
  },
};

describe('character-list-page', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    const mockIntersectionObserver = vi.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });

  test('renders while fetching data', async () => {
    (useQuery as Mock).mockReturnValueOnce({
      isLoading: true,
    });

    const { getByTestId } = render(<CharacterListPage />, { wrapper });

    await waitFor(() => {
      expect(getByTestId('spinner')).toBeInTheDocument();
    });
  });

  test('renders after data is fetched', async () => {
    (useQuery as Mock).mockReturnValueOnce({
      data,
    });

    const { getByTestId } = render(<CharacterListPage />, { wrapper });

    await waitFor(() => {
      expect(getByTestId('pagination')).toBeInTheDocument();
      expect(getByTestId('character-list')).toBeInTheDocument();
    });
  });

  test('renders after data is rejected', async () => {
    (useQuery as Mock).mockReturnValueOnce({
      error: { message: 'test error' },
    });

    const { getByTestId } = render(<CharacterListPage />, { wrapper });

    await waitFor(() => {
      expect(getByTestId('error')).toHaveTextContent('test error');
    });
  });
});
