import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, fireEvent, waitFor, screen, findAllByAltText, findByRole, within, toHaveTextContent } from '@testing-library/react';
import { fetchAllTodos } from '../api/api';
import ToDoList from '../components/ToDoList'
import '@testing-library/jest-dom';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'

const queryClient = new QueryClient()

it('Server error', () => {
  vi.mock('../api/api');

  test('Handles server error', async () => {

    fetchAllTodos.mockRejectedValue(new Error('Async error'))

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

it('Todo list rendering', () => {
  test('Handles todo items counter', async () => {

    render(
      <QueryClientProvider client={queryClient}>
        <ToDoList />
      </QueryClientProvider>
    )

    const todo_list = await waitFor(() => {
      return screen.findAllByRole('todo-item');
    });

    await waitFor(() => {
      expect(screen.getByRole('counter')).toHaveTextContent(todo_list.length);
    })
  });
});