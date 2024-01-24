import { useEffect, useState } from 'react';
import { useStateUserType } from '../../types/types';

const UseStateTSX = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userData, setUserData] = useState<useStateUserType | null>(null);
  const handleIn = () => {
    isLoggedIn ? console.log('Already Logged In') : setIsLoggedIn(true);
  };
  const handleOut = () => {
    !isLoggedIn ? console.log('Already Logged out') : setIsLoggedIn(false);
  };
  useEffect(() => {
    isLoggedIn
      ? setUserData({ name: 'Shivan', email: 'ShivanParvathi@gmail.com' })
      : setUserData(null);
  }, [isLoggedIn]);
  return (
    <div>
      <p>
        This user{' '}
        {isLoggedIn ? <span>is logged in</span> : <span>logged out</span>}
      </p>
      <button
        onClick={handleIn}
        style={{
          marginRight: '30px',
          backgroundColor: 'green',
          border: '1px solid black',
          borderRadius: '5px',
          padding: '0.5rem 1rem',
          color: 'white',
        }}
      >
        Log In
      </button>
      <button
        onClick={handleOut}
        style={{
          backgroundColor: 'red',
          border: '1px solid black',
          borderRadius: '5px',
          padding: '0.5rem 1rem',
          color: 'white',
        }}
      >
        Log Out
      </button>
      {isLoggedIn && (
        <>
          <p>user name id {userData?.name}</p>
          <p>user email {userData?.email}</p>
        </>
      )}
    </div>
  );
};

export default UseStateTSX;
