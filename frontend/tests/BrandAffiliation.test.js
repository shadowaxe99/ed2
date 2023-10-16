import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BrandAffiliation from '../components/BrandAffiliation';
import { Provider } from 'react-redux';
import store from '../redux/store';

test('BrandAffiliation component renders with initial state and can add and remove brand affiliations', () => {
  const { getByTestId, queryByTestId } = render(
    <Provider store={store}>
      <BrandAffiliation />
    </Provider>
  );

  // Check initial state
  expect(getByTestId('brand-name')).toHaveValue('');
  expect(getByTestId('brand-type')).toHaveValue('');
  expect(queryByTestId('affiliation-status')).toBeNull();

  // Add a new brand affiliation
  fireEvent.change(getByTestId('brand-name'), { target: { value: 'Brand A' } });
  fireEvent.change(getByTestId('brand-type'), { target: { value: 'Type A' } });
  fireEvent.click(getByTestId('manage-affiliations-button'));

  // Check that the new affiliation is added
  expect(getByTestId('affiliation-status')).toHaveTextContent('Brand A - Type A');

  // Remove the brand affiliation
  fireEvent.click(getByTestId('remove-affiliation-button'));

  // Check that the affiliation is removed
  expect(queryByTestId('affiliation-status')).toBeNull();
});