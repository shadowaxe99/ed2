import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import UserLogin from '../components/UserLogin';
import { Provider } from 'react-redux';
import store from '../redux/store';

describe('UserLogin', () => {
  it('renders correctly', () => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <UserLogin />
      </Provider>
    );

    expect(getByLabelText('email')).toBeInTheDocument();
    expect(getByLabelText('password')).toBeInTheDocument();
  });

  it('allows the user to login successfully', async () => {
    const { getByLabelText, getByText } = render(
      <Provider store={store}>
        <UserLogin />
      </Provider>
    );

    fireEvent.change(getByLabelText('email'), {
      target: { value: 'test@test.com' },
    });
    fireEvent.change(getByLabelText('password'), {
      target: { value: 'password' },
    });

    fireEvent.click(getByText('login-button'));

    await new Promise((r) => setTimeout(r, 2000));

    expect(getByText('login-success')).toBeInTheDocument();
  });

  it('shows an error message when the login fails', async () => {
    const { getByLabelText, getByText } = render(
      <Provider store={store}>
        <UserLogin />
      </Provider>
    );

    fireEvent.change(getByLabelText('email'), {
      target: { value: 'wrong@test.com' },
    });
    fireEvent.change(getByLabelText('password'), {
      target: { value: 'wrongpassword' },
    });

    fireEvent.click(getByText('login-button'));

    await new Promise((r) => setTimeout(r, 2000));

    expect(getByText('login-error')).toBeInTheDocument();
  });
});