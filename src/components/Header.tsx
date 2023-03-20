import React, {  useState } from 'react';
import './header.css';
import SidebarNav from './SidebarNav';


function Header () {
    const [show, setShow] = useState(false);

    const handleClick = () => {
      setShow(!show);
    };
  return (
    <>
        <header className="nav-top">
            <span className="hamburger mx-4 me-4" id="ham" onClick={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg"  width="40px" height="32px" fill="#10327a" viewBox="0 0 96 96" x="0px" y="0px"><g><path d="M2,18a4,4,0,0,1,4-4H90a4,4,0,0,1,0,8H6A4,4,0,0,1,2,18ZM6,52H90a4,4,0,0,0,0-8H6a4,4,0,0,0,0,8ZM6,82H90a4,4,0,0,0,0-8H6a4,4,0,0,0,0,8Z"/></g></svg>
            </span>
            
            <div className="navbar navbar-expand-lg nav-menu-bar">
                <a className="nav-menu-items pe-5" href="/en/">
                    <img className="logo-footer-new" width="130px" height="50px" src="https://assets.icliniq.com/v2/assets/images/iCliniq-logo/ic-white-logo.svg" alt="logo"/>
                </a>
                <a className="nav-menu-items" href="/search/online-doctors-directory">Choose a doctor</a>
                <a className="nav-menu-items" href="/search/online-doctors-directory">Explore articles</a>
                <a className="nav-menu-items" href="/search/online-doctors-directory">Medical Q&A</a>
            </div>
            <div className="ms-auto">
                <button aria-label="Search" className="searchButton" id="myBtn">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="20" height="20" x="0" y="0" viewBox="0 0 512.005 512.005">
                        <g>
                            <path d="M505.749,475.587l-145.6-145.6c28.203-34.837,45.184-79.104,45.184-127.317c0-111.744-90.923-202.667-202.667-202.667    S0,90.925,0,202.669s90.923,202.667,202.667,202.667c48.213,0,92.48-16.981,127.317-45.184l145.6,145.6    c4.16,4.16,9.621,6.251,15.083,6.251s10.923-2.091,15.083-6.251C514.091,497.411,514.091,483.928,505.749,475.587z     M202.667,362.669c-88.235,0-160-71.765-160-160s71.765-160,160-160s160,71.765,160,160S290.901,362.669,202.667,362.669z" fill="#192849" data-original="#000000" className=""></path>
                        </g>
                    </svg>
                </button>
            </div>
            <div className="login-signup-block">
                <a href="/users/signin">Login</a> / <a href="/users/userSignup">Signup</a>
            </div>
        </header>
        <SidebarNav
            show = {show}
            handleClick = {handleClick}
        />
    </>
  )
}

export default Header