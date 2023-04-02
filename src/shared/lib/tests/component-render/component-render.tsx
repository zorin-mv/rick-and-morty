import { render } from '@testing-library/react';
import { type ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';

export interface IComponentRenderOptions {
  route?: string;
}

export function componentRender(component: ReactNode, options: IComponentRenderOptions = {}) {
  const { route = '/' } = options;

  return render(<MemoryRouter initialEntries={[route]}>{component}</MemoryRouter>);
}
