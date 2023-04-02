import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Button } from './button';

describe('Button', () => {
  test('renders a button with default props', () => {
    render(<Button>Click me!</Button>);
    const button = screen.getByTestId('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('outline');
    expect(button).toHaveClass('size_m');
    expect(button).not.toBeDisabled();
    expect(button).toHaveTextContent('Click me!');
  });

  // test('renders a disabled button', () => {
  //   render(<Button disabled>Click me!</Button>);
  //   const button = screen.getByTestId('button');
  //   expect(button).toBeDisabled();
  // });

  // test('renders a button with a custom theme and size', () => {
  //   render(
  //     <Button theme="clear" size="size_l">
  //       Click me!
  //     </Button>
  //   );
  //   const button = screen.getByTestId('button');
  //   expect(button).toHaveClass('clear');
  //   expect(button).toHaveClass('size_l');
  // });

  // test('renders a square button with inverted color', () => {
  //   render(
  //     <Button square isColorInverted>
  //       Click me!
  //     </Button>
  //   );
  //   const button = screen.getByTestId('button');
  //   expect(button).toHaveClass('square');
  //   expect(button).toHaveClass('invertedColor');
  // });
});
