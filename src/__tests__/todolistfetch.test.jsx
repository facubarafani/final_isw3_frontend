import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, fireEvent, waitFor, screen, findAllByAltText, findByRole, within, toHaveTextContent } from '@testing-library/react';
import ToDoList from '../components/ToDoList'
import '@testing-library/jest-dom';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import { vi } from 'vitest';

const queryClient = new QueryClient()

describe('Server error', () => {
  afterEach(() => {
    vi.clearAllMocks();
    vi.resetAllMocks();
    vi.restoreAllMocks();
  })

  it('', async () => {
    const { fetchAllTodos } = await import('../api/api');

    render(
      <QueryClientProvider client={queryClient}>
        <ToDoList />
      </QueryClientProvider>
    )

    const todo_list = await waitFor(() => {
      return screen.findAllByRole('todo-item');
    });

    const counter = await waitFor(() => {
      return screen.findByRole('counter')
    });

    expect(counter).toHaveTextContent(todo_list.length);
  });
});