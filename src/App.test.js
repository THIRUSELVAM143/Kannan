import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders the construction business and its service sections', () => {
  render(<App />);

  expect(screen.getByRole('heading', { level: 1, name: /build faster\. build smarter with fibre cement panels/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /one team\. many ways to build/i })).toBeInTheDocument();
  expect(screen.getByLabelText(/your name/i)).toBeInTheDocument();
});

test('filters project photos by category', () => {
  render(<App />);

  fireEvent.click(screen.getByRole('button', { name: /partitions/i }));

  expect(screen.getAllByRole('button', { name: /view project photo/i })).toHaveLength(4);
  expect(screen.getByRole('button', { name: /finished panel wall and workspace/i })).toBeInTheDocument();
});

test('opens a project photo in the lightbox and closes it with Escape', () => {
  render(<App />);

  fireEvent.click(screen.getByRole('button', { name: /view project photo: prefab site office cabin/i }));
  expect(screen.getByRole('dialog', { name: 'Prefab site office cabin' })).toBeInTheDocument();

  fireEvent.keyDown(document, { key: 'Escape' });
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
});

test('switches the site copy to Tamil', () => {
  render(<App />);

  fireEvent.click(screen.getByRole('button', { name: /switch language to தமிழ்/i }));

  expect(screen.getByRole('heading', { level: 1, name: /விரைவாகக் கட்டுங்கள்/i })).toBeInTheDocument();
});
