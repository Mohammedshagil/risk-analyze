import React from 'react';
import Tables from './Tables';
import Navigations from './Navigations';
const Favourite = () => {
  const msg = 'AllList';
  return (
    <>
      <Navigations data={msg} />
      <div className='container'>
        <div className='row'>
          <div className='col-3'></div>
          <div className='col-1'></div>
          <div className='col-7'>
            <label className='label display-3'>Wishlist</label>
          </div>
        </div>
      </div>
      <Tables />
    </>
  );
};
export default Favourite;
