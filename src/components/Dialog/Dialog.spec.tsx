import React from 'react';
import { describe, test, expect, it, jest } from '@jest/globals';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';

import Dialog from './Dialog';

const dialogTitle = 'Title';
const dialogContent = 'Dialog content';

const MockedComponent = ({
  closeOnOverlayClick = true,
  onClose = () => {},
  isOpen = true,
}: {
  closeOnOverlayClick?: boolean;
  onClose?: () => void;
  isOpen?: boolean;
}) => (
  <Dialog
    closeOnOverlayClick={closeOnOverlayClick}
    isOpen={isOpen}
    onClose={onClose}
    title={dialogTitle}
  >
    {dialogContent}
  </Dialog>
);

describe('Dialog Component Openned', () => {
  test('Should match snapshot', () => {
    ReactDOM.createPortal = jest.fn((element, node) => {
      return element;
    }) as any;

    const tree = renderer.create(<MockedComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Title is renderized correctly', () => {
    render(<MockedComponent />);

    const title = screen.queryByText(dialogTitle);

    expect(title?.textContent).toBe(dialogTitle);
  });

  test('Content is renderized correctly', () => {
    render(<MockedComponent />);

    const title = screen.queryByText(dialogContent);

    expect(title?.textContent).toBe(dialogContent);
  });

  test('Clicking on overlay close the dialog', () => {
    const onClose = jest.fn();
    render(<MockedComponent closeOnOverlayClick onClose={onClose} />);
    const overlay = screen.getByTestId('dialog-overlay');

    fireEvent.click(overlay);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test('Clicking on close button close the dialog', () => {
    const onClose = jest.fn();
    render(<MockedComponent closeOnOverlayClick onClose={onClose} />);
    const closeButton = screen.getByRole('button');

    fireEvent.click(closeButton);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test('Pressing escape close the dialog', () => {
    const onClose = jest.fn();
    render(<MockedComponent closeOnOverlayClick onClose={onClose} />);

    fireEvent.keyUp(document, { key: 'Escape', code: 'Escape' });

    expect(onClose).toHaveBeenCalledTimes(1);
    cleanup();
  });

  test('Clicking on overlay does not close the dialog', () => {
    const onClose = jest.fn();
    render(<MockedComponent closeOnOverlayClick={false} onClose={onClose} />);
    const overlay = screen.getByTestId('dialog-overlay');

    fireEvent.click(overlay);

    expect(onClose).toHaveBeenCalledTimes(0);
  });

  test('Clicking on close button close the dialog', () => {
    const onClose = jest.fn();
    render(<MockedComponent closeOnOverlayClick={false} onClose={onClose} />);
    const closeButton = screen.getByRole('button');

    fireEvent.click(closeButton);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test('Pressing escape close the dialog', () => {
    const onClose = jest.fn();
    render(<MockedComponent closeOnOverlayClick={false} onClose={onClose} />);

    fireEvent.keyUp(document, { key: 'Escape', code: 'Escape' });

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});

describe('Dialog Component Closed', () => {
  test('Title is renderized correctly', () => {
    const { rerender } = render(<MockedComponent isOpen={false} />);

    let title = screen.queryByText(dialogTitle);

    expect(title?.textContent).toBeFalsy();

    rerender(<MockedComponent isOpen />);

    title = screen.queryByText(dialogTitle);

    expect(title?.textContent).toBe(dialogTitle);
  });
});
