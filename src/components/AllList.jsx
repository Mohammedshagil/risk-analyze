import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navigations from './Navigations';
import '../styles/styles.css';
import Tables from './Tables';

function AllList() {
  const msg = 'Favourite';
  return (
    <>
      <Navigations data={msg} />
      <div className='container'>
        <div className='row'>
          <div className='col-3'></div>
          <div className='col-1'></div>
          <div className='col-7'>
            <label className='label display-3'>ALL LIST</label>
          </div>
        </div>
      </div>
      <Tables />
    </>
  );
}
export default AllList;
