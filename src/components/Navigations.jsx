import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/styles.css';

function Navigations(props) {
  const links = '/' + props.data;
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
                <ul className='navbar-nav ml-auto mb-2 mb-lg-0'>
                  <li className='nav-item'>
                    <Link className='nav-link' to={links}>
                      <span>{props.data}</span>
                    </Link>
                  </li>
                  <li>
                    <Link className='nav-link' to='/'>
                      <span>Sign-out</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navigations;
