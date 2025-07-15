import React from 'react';
import { render } from '@testing-library/react';
import App from '../../pages/App';
import { BrowserRouter } from 'react-router-dom';

describe('App', () => {
  test('renders initial content', () => {
    const { container } = render(<BrowserRouter><App/></BrowserRouter>);

    expect(container).toMatchSnapshot();
  });
})
