import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/actions/userActions';

const UserRegistration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [socialMediaLinks, setSocialMediaLinks] = useState([]);

  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = {
      email,
      password,
      name,
      bio,
      profilePicture,
      socialMediaLinks,
    };
    dispatch(registerUser(newUser));
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          id="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          id="bio"
          placeholder="Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <input
          type="text"
          id="profile-picture"
          placeholder="Profile Picture URL"
          value={profilePicture}
          onChange={(e) => setProfilePicture(e.target.value)}
        />
        <input
          type="text"
          id="social-media-links"
          placeholder="Social Media Links"
          value={socialMediaLinks}
          onChange={(e) => setSocialMediaLinks(e.target.value.split(','))}
        />
        <button id="register-button" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default UserRegistration;