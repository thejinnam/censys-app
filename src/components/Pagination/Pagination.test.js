import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pagination from './Pagination';

describe('Pagination', () => {
  const mockFetchHosts = jest.fn();

  const paginationLinks = {
    next: 'next-cursor',
    prev: 'prev-cursor',
  };

  test('calls fetchHosts with the correct cursor when the Next button is clicked', () => {
    render(
      <Pagination
        paginationLinks={paginationLinks}
        fetchHosts={mockFetchHosts}
        query="test"
      />
    );

    const nextButton = screen.getByText(/next/i);
    fireEvent.click(nextButton);

    expect(mockFetchHosts).toHaveBeenCalledWith('test', 'next-cursor');
  });

  test('calls fetchHosts with the correct cursor when the Previous button is clicked', () => {
    render(
      <Pagination
        paginationLinks={paginationLinks}
        fetchHosts={mockFetchHosts}
        query="test"
      />
    );

    const prevButton = screen.getByText(/previous/i);
    fireEvent.click(prevButton);

    expect(mockFetchHosts).toHaveBeenCalledWith('test', 'prev-cursor');
  });
});
