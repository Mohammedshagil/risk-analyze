import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';
const Login = () => {
  const initialvalue = {
    username: '',
    password: '',
  };
  const [users, setUsers] = useState([]);
  const isFirstRender = useRef(true);

  const fetchUserData = () => {
    fetch('https://mortgageautomationgroupa.azurewebsites.net/register')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log("set state",data);
        setUsers(data);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, users);

  const [formValues, setFormValues] = useState(initialvalue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues.username + ' ' + formValues.password);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      'Form Submittion',
      formValues.username + ' ' + formValues.password
    );
    console.log(users);
    
  };
  // const validate = (values) => {
  //   const errors = {};
  //   if (!values.username) errors.username = 'username is required';
  //   if (!values.password) errors.password = 'password is required';
  //   return errors;
  // };

  return (
    <>
      <div className='container-fluid nav_bg'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <nav
              className='navbar navbar-expand-lg navbar-light bg-primary bg-gradient
'
            >
              <div className='container-fluid'>
                <img
                  src='https://www.logosvgpng.com/wp-content/uploads/2018/03/fidelity-national-financial-fnf-logo-vector.png'
                  height='70px'
                  alt='fidelity log'
                  loading='lazy'
                />
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className='heading'>
            <label className='welcome'>welcome to</label>
            <br />
            <label className='labels display-1'>Risk Analysis System</label>
            <br />
            <label className='welcome'>Protect your Finance right now</label>
          </div>

          <div className='forms card'>
            <form onSubmit={handleSubmit}>
              <div class='mb-3'>
                <label for='username' class='form-label'>
                  Username
                </label>
                <input
                  type='text'
                  class='form-control'
                  id='username'
                  name='username'
                  value={formValues.username}
                  placeholder='Enter username'
                  onChange={handleChange}
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
                  name='password'
                  value={formValues.password}
                  placeholder='Enter password'
                  onChange={handleChange}
                />
              </div>
              {/* <Link to='/alllist'> */}
              <button className='btn btn-primary' type='submit'>
                Login
              </button>
              {/* </Link> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
