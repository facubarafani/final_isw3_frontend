import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, fireEvent, waitFor, screen, findAllByAltText, findByRole, within, toHaveTextContent } from '@testing-library/react';
import ToDoList from '../components/ToDoList'
import '@testing-library/jest-dom';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import { vi } from 'vitest';

const queryClient = new QueryClient()

describe('Handles server error', () => {
  afterEach(() => {
    vi.clearAllMocks();
    vi.resetAllMocks();
    vi.restoreAllMocks();
  })

  it('', async () => {
    const { fetchAllTodos } = await import('../api/api');
    vi.mock('../api/api');

    fetchAllTodos.mockRejectedValueOnce(new Error('Async error'))

    render(
      <QueryClientProvider client={queryClient}>
        <ToDoList />
      </QueryClientProvider>
    )

    await waitFor(() => {
      expect(screen.findByRole('alert'));
    });

    await waitFor(() => {
      expect(screen.findByText('An error occured while attempting to fetch the todo list. Make sure the database is up an running.'));
    })
  });
});
