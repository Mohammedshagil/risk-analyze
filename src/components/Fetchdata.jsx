import React, { useEffect, useState } from 'react';

const Fetchdata = () => {
  const [users, setUsers] = useState([]);

  const fetchUserData = () => {
    fetch('https://riskanalysis.azurewebsites.net/Mortgage/GetAllValues')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.appId}>
              {user.appId}
              {user.applicantName}
              {user.expectedLoan}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Fetchdata;
