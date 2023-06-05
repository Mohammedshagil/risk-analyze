import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.css';
//import Data from '../data/data.json';
//const API = 'https://riskanalysis.azurewebsites.net/Mortgage/GetAllValues';

const Tables = () => {
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

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firsIndex = lastIndex - recordsPerPage;
  const records = users.slice(firsIndex, lastIndex);
  const npage = Math.ceil(users.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  function NextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }
  function prevPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function changeCurPage(id) {
    setCurrentPage(id);
  }

  return (
    <>
      <div>
        <div class='container'>
          <div class='row'>
            <div className='col-3'>
              <div
                className='card text-white bg-primary mb-3'
                style={{ maxwidth: 18 + 'rem' }}
              >
                <div className='card-header'>Filter</div>
                <div className='card-body'>
                  <h5 className='card-title'>Info card title</h5>
                  <p className='card-text'>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-1'></div>
            <div class='col-7'>
              <table className=' table table-bordered border-primary'>
                <thead>
                  <tr>
                    <th>application_ID</th>
                    <th>buyer's name</th>
                    <th>mortgage amount</th>
                    <th>date</th>
                    <th>risk analysis</th>
                  </tr>
                </thead>

                {users.length > 0 && (
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.appId}>
                        <td>{user.appId}</td>
                        <td>{user.applicantName}</td>
                        <td>{user.expectedLoan}</td>
                        <td>{user.date}</td>
                        <td></td>
                      </tr>
                    ))}
                  </tbody>
                )}
              </table>
              <nav className='pages-change'>
                <ul className='pagination'>
                  <li className='page-item'>
                    <a href='#' className='page-link' onClick={prevPage}>
                      Prev
                    </a>
                  </li>
                  {numbers.map((n, i) => (
                    <li
                      className={`page-item ${
                        currentPage === n ? 'active' : ''
                      }`}
                      key={i}
                    >
                      <a
                        href='#'
                        className='page-link'
                        onClick={() => changeCurPage(n)}
                      >
                        {n}
                      </a>
                    </li>
                  ))}
                  <li className='page-item'>
                    <a href='#' className='page-link' onClick={NextPage}>
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Tables;
