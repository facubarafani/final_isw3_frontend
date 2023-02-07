import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, fireEvent, waitFor, screen, findAllByAltText, findByRole, within, toHaveTextContent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import ToDoList from '../components/ToDoList'
import ToDoForm from '../components/ToDoForm'
import '@testing-library/jest-dom';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import { vi } from 'vitest';
import { createToDo } from '../api/api';

const queryClient = new QueryClient()

describe('Server error', () => {
  afterEach(() => {
    vi.clearAllMocks();
    vi.resetAllMocks();
    vi.restoreAllMocks();
  })

  it('', async () => {
    const user = userEvent.setup();

    // test('Handles todo items counter', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <ToDoForm />
        <ToDoList />
      </QueryClientProvider>
    )


    const title_input = await waitFor(() => {
      return screen.findByTestId('title-textfield');
    });

    const body_input = await waitFor(() => {
      return screen.findByTestId('body-textfield');
    });

    fireEvent.change(title_input, { target: { value: 'fafasfafsafassa' } })

    fireEvent.change(body_input, { target: { value: 'que onda atun' } })

    const send_button = await waitFor(() => {
      return screen.findByRole('create-button');
    });

    const todo_list = await waitFor(() => {
      return screen.findAllByRole('todo-item');
    });

    await user.click(send_button);
    fireEvent.click(send_button);

    await waitFor(() => {
      expect(screen.getByRole('counter')).toHaveTextContent(todo_list.length);
    })
  });
});