import React from 'react';
import { describe, test, expect, it, jest } from '@jest/globals';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import useClickAwayListener from './useClickAwayListener';

describe('useClickAwayListener hook', () => {
  const MockedComponent = ({ onClose }: { onClose: () => void }) => {
    const listenerClickAwayRef = React.useRef<HTMLDivElement>(null);

    useClickAwayListener(listenerClickAwayRef, onClose);

    return (
      <section>
        <div data-testid="target-div" ref={listenerClickAwayRef}>
          <button>Click-me</button>
        </div>
        <div data-testid="another-div"></div>
      </section>
    );
  };

  test('Click away should call the callback', () => {
    const onClose = jest.fn();
    render(<MockedComponent onClose={onClose} />);
    const anotherDiv = screen.getByTestId('another-div');

    fireEvent.click(anotherDiv);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test('Click inside should not call the callback', () => {
    const onClose = jest.fn();
    render(<MockedComponent onClose={onClose} />);
    const div = screen.getByTestId('target-div');

    fireEvent.click(div);

    expect(onClose).toHaveBeenCalledTimes(0);
  });

  test('Click element inside should not call the callback', () => {
    const onClose = jest.fn();
    render(<MockedComponent onClose={onClose} />);
    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(onClose).toHaveBeenCalledTimes(0);
  });
});
