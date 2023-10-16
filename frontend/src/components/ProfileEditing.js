import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editProfile } from '../redux/actions/userActions';

const ProfileEditing = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const [name, setName] = useState(user.name);
  const [bio, setBio] = useState(user.bio);
  const [profilePicture, setProfilePicture] = useState(user.profilePicture);
  const [socialMediaLinks, setSocialMediaLinks] = useState(user.socialMediaLinks);

  const handleProfileEdit = (e) => {
    e.preventDefault();
    dispatch(editProfile({ name, bio, profilePicture, socialMediaLinks }));
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      <form onSubmit={handleProfileEdit}>
        <label>
          Name:
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </label>
        <label>
          Bio:
          <textarea value={bio} onChange={e => setBio(e.target.value)} />
        </label>
        <label>
          Profile Picture:
          <input type="text" value={profilePicture} onChange={e => setProfilePicture(e.target.value)} />
        </label>
        <label>
          Social Media Links:
          <input type="text" value={socialMediaLinks} onChange={e => setSocialMediaLinks(e.target.value)} />
        </label>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default ProfileEditing;