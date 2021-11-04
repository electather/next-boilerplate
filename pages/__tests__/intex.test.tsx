/**
 * @jest-environment jsdom
 */

import Home from '@pages';
import { render, screen } from '@testing-library/react';

describe(`App`, () => {
  it(`renders without crashing`, () => {
    render(<Home />);
    expect(
      screen.getByRole(`heading`, { name: `Batteries Included Next.js` }),
    ).toBeInTheDocument();
  });
});
