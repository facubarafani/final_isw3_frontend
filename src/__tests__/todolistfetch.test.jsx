import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, fireEvent, waitFor, screen, findAllByAltText, findByRole, within, toHaveTextContent } from '@testing-library/react';
import ToDoList from '../components/ToDoList'
import '@testing-library/jest-dom';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import { vi } from 'vitest';

const queryClient = new QueryClient()

describe('Todo list renders', () => {
  afterEach(() => {
    vi.clearAllMocks();
    vi.resetAllMocks();
    vi.restoreAllMocks();
  })

  it('', async () => {

    render(
      <QueryClientProvider client={queryClient}>
        <ToDoList />
      </QueryClientProvider>
    )

    const counter = await waitFor(() => {
      return screen.findByRole('counter')
    });

    if (counter.textContent == 'You currently have 0 items on your todo list') {
      return;
    }

    const todo_list = await waitFor(() => {
      return screen.findAllByRole('todo-item');
    });

    expect(counter).toHaveTextContent(todo_list.length);
  });
});