import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ProfileEditing from '../components/ProfileEditing';
import { Provider } from 'react-redux';
import configureStore from '../redux/store';

const store = configureStore();

test('renders ProfileEditing component', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <ProfileEditing />
    </Provider>
  );
  const profileEditingElement = getByTestId('profile-editing');
  expect(profileEditingElement).toBeInTheDocument();
});

test('updates profile information on input change', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <ProfileEditing />
    </Provider>
  );

  const nameInput = getByTestId('name');
  const bioInput = getByTestId('bio');
  const profilePictureInput = getByTestId('profile-picture');
  const socialMediaLinksInput = getByTestId('social-media-links');

  fireEvent.change(nameInput, { target: { value: 'New Name' } });
  fireEvent.change(bioInput, { target: { value: 'New Bio' } });
  fireEvent.change(profilePictureInput, { target: { value: 'New Picture' } });
  fireEvent.change(socialMediaLinksInput, { target: { value: 'New Links' } });

  expect(nameInput.value).toBe('New Name');
  expect(bioInput.value).toBe('New Bio');
  expect(profilePictureInput.value).toBe('New Picture');
  expect(socialMediaLinksInput.value).toBe('New Links');
});

test('submits profile information on form submit', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <ProfileEditing />
    </Provider>
  );

  const nameInput = getByTestId('name');
  const bioInput = getByTestId('bio');
  const profilePictureInput = getByTestId('profile-picture');
  const socialMediaLinksInput = getByTestId('social-media-links');
  const editProfileButton = getByTestId('edit-profile-button');

  fireEvent.change(nameInput, { target: { value: 'New Name' } });
  fireEvent.change(bioInput, { target: { value: 'New Bio' } });
  fireEvent.change(profilePictureInput, { target: { value: 'New Picture' } });
  fireEvent.change(socialMediaLinksInput, { target: { value: 'New Links' } });

  fireEvent.click(editProfileButton);

  expect(store.getState().user.name).toBe('New Name');
  expect(store.getState().user.bio).toBe('New Bio');
  expect(store.getState().user.profilePicture).toBe('New Picture');
  expect(store.getState().user.socialMediaLinks).toBe('New Links');
});