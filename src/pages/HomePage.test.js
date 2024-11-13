import React from 'react';
import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from '@testing-library/react';
import HomePage from './HomePage';
import { fetchApiData } from '../services/censysAPI';

jest.mock('../services/censysAPI');

describe('HomePage Component', () => {
  const mockHosts = [
    { id: '1', name: 'host1' },
    { id: '2', name: 'host2' },
  ];

  const mockApiResponse = {
    result: {
      hits: mockHosts,
      links: {
        next: 'next-cursor',
        prev: 'prev-cursor',
      },
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
    fetchApiData.mockResolvedValue(mockApiResponse);
  });

  test('1. renders HomePage component', async () => {
    await act(async () => {
      render(<HomePage />);
    });
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });

  test('2. fetches initial data on component mount', async () => {
    await act(async () => {
      render(<HomePage />);
    });

    await waitFor(() => {
      expect(fetchApiData).toHaveBeenCalledTimes(1);
    });
  });

  test('3. performs search when query changes', async () => {
    await act(async () => {
      render(<HomePage />);
    });

    const searchInput = screen.getByRole('searchbox');
    fireEvent.change(searchInput, { target: { value: 'amazon' } });

    await waitFor(() => {
      expect(fetchApiData).toHaveBeenCalledTimes(1);
    });
  });
});
