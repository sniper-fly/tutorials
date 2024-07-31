import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('renders App component', () => {
  it('renders App component', () => {
    render(<App />);

    screen.debug();
  });
});
