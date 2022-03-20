import React from 'react';

import './Menubar.css'


const Menubar = ({count}) => {
    return (
        <div>
          <div className="container">
              <div className="row">
                  <div className="col-md-2 fs-5 p-2">logo</div>
                  <div className="col-md-10">
                      <ul className='nav d-flex justify-content-end'>
                          <li className='fs-5  p-2 '>Home </li>
                          <li className='fs-5 p-2 '>Cart <span className='text-warning'>{count}</span></li>
                          <li className='fs-5 p-2 '>About</li>
                          <li className='fs-5 p-2 '>Login</li>
                      </ul>
                  </div>
              </div>
          </div>
        </div>
    );
};

export default Menubar;