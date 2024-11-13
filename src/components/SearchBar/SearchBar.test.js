import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  test('calls setQuery with the correct value when the form is submitted', () => {
    const setQueryMock = jest.fn();

    render(<SearchBar setQuery={setQueryMock} />);

    const input = screen.getByRole('searchbox');
    const button = screen.getByRole('button', { name: /search/i });

    fireEvent.change(input, { target: { value: 'test query' } });
    fireEvent.click(button);

    expect(setQueryMock).toHaveBeenCalledWith('test query');
  });
});
