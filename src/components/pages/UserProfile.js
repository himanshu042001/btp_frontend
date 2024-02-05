import React from 'react';
import './UserProfile.css';
import UserNavbar from './OrgNavbar';

const UserProfile = () => {
  // Replace the placeholder image URL with the actual image URL
  const profilePicUrl = 'data:image/png;base64,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';

  return (
    <>

 <UserNavbar/>
    <div className="user-profile-container">
      <div className="profile-pic">
        <img src={profilePicUrl} alt="Profile" />
      </div>
      <div className="user-info">
        <h2>User Information</h2>
        <p>Name: John Doe</p>
        <p>Email: john.doe@example.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 Main Street, Cityville</p>
      </div>
    </div>
    </>
  );
};

export default UserProfile;