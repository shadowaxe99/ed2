import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPreferences } from '../redux/actions/userActions';

const PreferenceSetting = () => {
  const [preferences, setPreferences] = useState('');
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const handlePreferenceSet = (e) => {
    e.preventDefault();
    dispatch(setPreferences(user.id, preferences));
  };

  return (
    <div>
      <h2>Set Your Preferences</h2>
      <form onSubmit={handlePreferenceSet}>
        <label htmlFor="preferences">Preferences:</label>
        <input
          type="text"
          id="preferences"
          value={preferences}
          onChange={(e) => setPreferences(e.target.value)}
        />
        <button type="submit" id="set-preferences-button">Set Preferences</button>
      </form>
    </div>
  );
};

export default PreferenceSetting;