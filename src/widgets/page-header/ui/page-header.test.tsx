import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, test } from 'vitest';

import { PageHeader } from './page-header';

describe('PageHeader', () => {
  test('renders without errors', () => {
    render(
      <MemoryRouter>
        <PageHeader />
      </MemoryRouter>
    );

    const pageHeaderElement = screen.getByTestId('page-header');
    expect(pageHeaderElement).toBeInTheDocument();
  });

  test('renders the link to the main page', () => {
    render(
      <MemoryRouter>
        <PageHeader />
      </MemoryRouter>
    );

    const linkElement = screen.getByTestId('link');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/');
  });
  test('applies the provided className to the page header element', () => {
    render(
      <MemoryRouter>
        <PageHeader className="custom-class" />
      </MemoryRouter>
    );

    const pageHeaderElement = screen.getByTestId('page-header');
    expect(pageHeaderElement).toHaveClass('custom-class');
  });
});
