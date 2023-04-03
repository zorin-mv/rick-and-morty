import { fireEvent, render } from '@testing-library/react';
import { vi } from 'vitest';

import { Input } from './input';

describe('Input component', () => {
  test('renders input element', () => {
    const { getByTestId, queryByTestId } = render(<Input />);
    expect(getByTestId('input')).toBeInTheDocument();
    expect(queryByTestId('placeholder')).not.toBeInTheDocument();
  });

  test('render with default value', () => {
    const value = 'test';
    const { getByTestId } = render(<Input value={value} />);
    const inputElement = getByTestId('input') as HTMLInputElement;

    expect(inputElement.value).toBe('test');
  });

  test('render with placeholder', () => {
    const placeholder = 'placeholder';
    const { getByTestId } = render(<Input placeholder={placeholder} />);
    expect(getByTestId('placeholder')).toBeInTheDocument();
  });

  test('calls onChange callback when input value changes', () => {
    const onChangeMock = vi.fn();
    const { getByTestId } = render(<Input onChange={onChangeMock} />);
    const inputElement = getByTestId('input') as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: 'test value' } });

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(inputElement.value).toBe('test value');
  });
});
