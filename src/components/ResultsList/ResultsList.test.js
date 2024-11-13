import React from 'react';
import { render, screen } from '@testing-library/react';
import ResultsList from './ResultsList';

describe('ResultsList', () => {
  const mockHosts = [
    { ip: '192.168.0.1', services: [{}, {}] },
    { ip: '192.168.0.2', services: [{}, {}, {}] },
  ];

  test('renders the correct number of rows based on the hosts prop', () => {
    render(<ResultsList hosts={mockHosts} />);

    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(mockHosts.length + 1);
  });

  test('renders the correct IP and number of protocols', () => {
    render(<ResultsList hosts={mockHosts} />);

    expect(screen.getByText('192.168.0.1')).toBeInTheDocument();
    expect(screen.getByText('192.168.0.2')).toBeInTheDocument();

    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
  });
});
