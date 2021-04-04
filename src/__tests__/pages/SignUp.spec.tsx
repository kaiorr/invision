import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import SignUp from '../../pages/SignUp';

jest.mock('react-router-dom', () => {
  return {
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe('Sign Un Page', () => {
  it('should be able to signup', async () => {
    const { getByTestId, getByText } = render(<SignUp />);

    const name = getByTestId('input-name');
    const email = getByTestId('input-email');
    const password = getByTestId('input-password');
    const button = getByText('Sign Up');

    fireEvent.change(name, { target: { value: 'John Doe' } });
    fireEvent.change(email, { target: { value: 'johndoe@example.com' } });
    fireEvent.change(password, { target: { value: '12a6161895' } });

    fireEvent.click(button);

    await waitFor(() => expect(getByTestId('content-signup')));
  });

  it('should not be able to SignUp with invalid credentials', async () => {
    const { getAllByTestId, getByTestId, getByText } = render(<SignUp />);

    const name = getByTestId('input-name');
    const email = getByTestId('input-email');
    const password = getByTestId('input-password');
    const button = getByText('Sign Up');

    fireEvent.change(name, { target: { value: '' } });
    fireEvent.change(email, { target: { value: 'not-email-valid' } });
    fireEvent.change(password, { target: { value: '123' } });

    fireEvent.click(button);

    await waitFor(() =>
      expect(getAllByTestId('input-error')).not.toHaveLength(0),
    );
  });
});
