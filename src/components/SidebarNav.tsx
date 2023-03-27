// import React, {  useState } from 'react';
import './sidebarNav.css'
import { IconContext } from 'react-icons';
import {GrClose} from 'react-icons/gr/index.js'

type Props = {
  show: boolean;
  handleClick: VoidFunction;
}
const SidebarNav: React.FC<Props> = ({ show, handleClick }) => {
  return (
    <>
      <div className= {show ? 'nav-drill' : 'nav-drill hidden'}>
        <ul className="nav-items nav-level-1">
          <li className="nav-item-sidebar">
            <div className="d-flex justify-content-between p-3 align-items-center">
              <div className='close-div-icon' onClick={handleClick}>
                <IconContext.Provider
                  value={{ color: 'white', size: '30px', className: "icon-close-name"}}
                >
                  <GrClose  />
                </IconContext.Provider>
              </div>
                <img width="100px" height="30" src="https://assets.icliniq.com/v2/assets/images/iCliniq-logo/ic-blue-logo.svg" alt="logo" />
                <div></div>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

export default SidebarNav