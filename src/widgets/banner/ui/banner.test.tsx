import { render } from '@testing-library/react';

import { Banner } from './banner';

describe('Banner', () => {
  test('renders title', () => {
    const { getByText } = render(<Banner title="Welcome" />);
    expect(getByText('Welcome')).toBeInTheDocument();
  });

  test('renders without title', () => {
    const { getByTestId } = render(<Banner />);
    expect(getByTestId('banner')).toBeInTheDocument();
  });
});
