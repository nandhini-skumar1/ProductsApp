import { render, screen } from '@testing-library/react';
import App from './App';

test('renders custom site name of Nandhini', () => {
  render(<App />);
  const linkElement = screen.getByText(/Nandhini's Fine Sprits/i);
  expect(linkElement).toBeInTheDocument();


});


test('verify image counts', () => {
  render(<App />);

  const productImages = screen.getAllByRole("img");
  expect(productImages).toHaveLength(13);

});