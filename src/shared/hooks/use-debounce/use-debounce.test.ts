import { act, renderHook } from '@testing-library/react-hooks';
import { vi } from 'vitest';

import { useDebounce } from './use-debounce';

describe('useDebounce', () => {
  it('should debounce the value', async () => {
    vi.useFakeTimers();
    const { result, rerender } = renderHook(({ value, delay }) => useDebounce(value, delay), {
      initialProps: { value: 'test', delay: 500 },
    });
    expect(result.current).toEqual('test');

    act(() => {
      rerender({ value: 'updated test', delay: 500 });
    });
    expect(result.current).toEqual('test');

    act(() => {
      vi.advanceTimersByTime(500);
    });
    expect(result.current).toEqual('updated test');
  });
});
