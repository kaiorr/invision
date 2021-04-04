import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import ResetPassword from '../../pages/ResetPassword';

jest.mock('react-router-dom', () => {
  return {
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe('Sign Un Page', () => {
  it('should be able to ResetPassword', async () => {
    const { getByTestId, getByText } = render(<ResetPassword />);

    const oldPassword = getByTestId('input-oldPassword');
    const newPassword = getByTestId('input-newPassword');
    const confirmPassword = getByTestId('input-confirmPassword');
    const button = getByText('Reset Password');

    fireEvent.change(oldPassword, { target: { value: '123' } });
    fireEvent.change(newPassword, { target: { value: '12a6161895' } });
    fireEvent.change(confirmPassword, { target: { value: '12a6161895' } });

    fireEvent.click(button);

    await waitFor(() => expect(getByTestId('content-resetpassword')));
  });

  it('should not be able to ResetPassword with invalid credentials', async () => {
    const { getAllByTestId, getByTestId, getByText } = render(
      <ResetPassword />,
    );

    const oldPassword = getByTestId('input-oldPassword');
    const newPassword = getByTestId('input-newPassword');
    const confirmPassword = getByTestId('input-confirmPassword');
    const button = getByText('Reset Password');

    fireEvent.change(oldPassword, { target: { value: '123' } });
    fireEvent.change(newPassword, { target: { value: '321' } });
    fireEvent.change(confirmPassword, { target: { value: '123' } });

    fireEvent.click(button);

    await waitFor(() =>
      expect(getAllByTestId('input-error')).not.toHaveLength(0),
    );
  });
});
