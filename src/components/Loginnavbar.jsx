import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import '../styles/styles.css';
function Loginnavbar() {
  const initialvalues = { username: '', password: '' };
  const [formValues, setFormValues] = useState(initialvalues);
  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='navbars container-fluid'>
          <img
            src='https://www.logosvgpng.com/wp-content/uploads/2018/03/fidelity-national-financial-fnf-logo-vector.png'
            height='70px'
            alt='fidelity log'
            loading='lazy'
          />
        </div>
      </nav>
      <div>
        <div>
          <div className='heading'>
            <label className='welcome4'>welcome to</label>
            <br />
            <label className='labels'>Risk Analysis System</label>
            <br />
            <h3>Protect your Finance right now</h3>
          </div>
          <div className='forms card'>
            <form onSubmit={handlesubmit}>
              <div class='mb-3'>
                <label for='username' class='form-label'>
                  Username
                </label>
                <input
                  type='text'
                  class='form-control'
                  id='username'
                  value={formValues.username}
                  placeholder='Enter username'
                  onChange={handlechange}
                />
              </div>
              <div class='mb-3'>
                <label for='password' class='form-label'>
                  password
                </label>
                <input
                  type='password'
                  class='form-control'
                  id='password'
                  value={formValues.password}
                  placeholder='Enter password'
                  onChange={handlechange}
                />
              </div>
              <button className='btn btn-primary' type='submit'>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Loginnavbar;
