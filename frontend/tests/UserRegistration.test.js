```javascript
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import UserRegistration from '../components/UserRegistration';
import { Provider } from 'react-redux';
import store from '../redux/store';

test('renders UserRegistration component', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <UserRegistration />
    </Provider>
  );
  const emailInput = getByTestId('email');
  const passwordInput = getByTestId('password');
  const nameInput = getByTestId('name');
  const bioInput = getByTestId('bio');
  const profilePictureInput = getByTestId('profile-picture');
  const socialMediaLinksInput = getByTestId('social-media-links');
  const registerButton = getByTestId('register-button');

  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(nameInput).toBeInTheDocument();
  expect(bioInput).toBeInTheDocument();
  expect(profilePictureInput).toBeInTheDocument();
  expect(socialMediaLinksInput).toBeInTheDocument();
  expect(registerButton).toBeInTheDocument();
});

test('allows the user to register successfully', async () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <UserRegistration />
    </Provider>
  );
  const emailInput = getByTestId('email');
  const passwordInput = getByTestId('password');
  const nameInput = getByTestId('name');
  const bioInput = getByTestId('bio');
  const profilePictureInput = getByTestId('profile-picture');
  const socialMediaLinksInput = getByTestId('social-media-links');
  const registerButton = getByTestId('register-button');

  fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password' } });
  fireEvent.change(nameInput, { target: { value: 'Test User' } });
  fireEvent.change(bioInput, { target: { value: 'This is a test user.' } });
  fireEvent.change(profilePictureInput, { target: { value: 'test.jpg' } });
  fireEvent.change(socialMediaLinksInput, { target: { value: 'www.test.com' } });

  fireEvent.click(registerButton);

  const registrationSuccess = await waitForElement(() =>
    getByTestId('registration-success')
  );

  expect(registrationSuccess).toBeInTheDocument();
});
```
