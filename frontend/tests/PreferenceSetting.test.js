import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import PreferenceSetting from '../components/PreferenceSetting';

const mockStore = configureStore([]);

describe('PreferenceSetting', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      user: {
        preferences: [],
      },
    });

    store.dispatch = jest.fn();

    component = render(
      <Provider store={store}>
        <PreferenceSetting />
      </Provider>
    );
  });

  it('renders without crashing', () => {
    expect(component).toBeTruthy();
  });

  it('dispatches action on preference change', () => {
    fireEvent.change(component.getByTestId('preferences'), { target: { value: 'Fashion' } });
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  it('displays success message on successful preference setting', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <PreferenceSetting />
      </Provider>
    );
    fireEvent.click(getByTestId('set-preferences-button'));
    expect(getByTestId('preference-set-success')).toBeTruthy();
  });

  it('displays error message on failed preference setting', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <PreferenceSetting />
      </Provider>
    );
    fireEvent.click(getByTestId('set-preferences-button'));
    expect(getByTestId('preference-set-error')).toBeTruthy();
  });
});