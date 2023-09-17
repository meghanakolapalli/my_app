
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserProfile() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUserProfiles() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const data = response.data;
        setUsers(data);
      } catch (error) {
        console.log('Error fetching user profiles:', error);
      }
    }
     fetchUserProfiles();
  }, []);

  

  return (
    <div>
      <h1>User Profiles</h1>
      {users.map((user) => (
        <div key={user.name}>
          <img
            src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`}
            alt="Avatar"
            style={{ width: '100px', height: '100px' }}
          />
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>
            Address: {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}
          </p>
          <p>Website: {user.website}</p>
          <p>Company: {user.company.name}</p>
        </div>
      ))}
    </div>
  );
}

export default UserProfile;
