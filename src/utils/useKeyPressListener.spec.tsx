import React from 'react';
import { describe, test, expect, it, jest } from '@jest/globals';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import useKeyPressListener from './useKeyPressListener';

const MockedComponent = ({
  keyName,
  onClose,
}: {
  onClose?: () => void;
  keyName: string;
}) => {
  useKeyPressListener(keyName, onClose);

  return <div />;
};

describe('useKeyPressListener hook', () => {
  test('Pressing the key should call the callback', () => {
    const onClose = jest.fn();
    render(<MockedComponent onClose={onClose} keyName="Escape" />);

    fireEvent.keyUp(document, { key: 'Escape', code: 'Escape' });

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test('Pressing another key should not call the callback', () => {
    const onClose = jest.fn();
    render(<MockedComponent onClose={onClose} keyName="Escape" />);
    fireEvent.keyUp(document, { key: 'Enter', code: 'Enter' });

    expect(onClose).toHaveBeenCalledTimes(0);
  });

  test('Pressing the key when the component is not mounted should not call the callback', () => {
    const onClose = jest.fn();
    render(<MockedComponent onClose={onClose} keyName="Escape" />);
    cleanup();
    fireEvent.keyUp(document, { key: 'Escape' });

    expect(onClose).toHaveBeenCalledTimes(0);
  });

  test('Use Keypress with undefined callback', () => {
    const onClose = jest.fn();
    const { rerender } = render(
      <MockedComponent onClose={onClose} keyName="Escape" />
    );

    fireEvent.keyUp(document, { key: 'Escape' });

    expect(onClose).toHaveBeenCalledTimes(1);

    rerender(<MockedComponent onClose={undefined} keyName="Escape" />);

    fireEvent.keyUp(document, { key: 'Escape' });

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
