import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <>
        {/* -----------Menu part------------------ */}
            <nav className="navbar navbar-expand-lg navbar-light " style={{ backgroundColor: 'rgba(25, 209, 233, 0.342)' }}>
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <h1 id="head-line">ARTISTS <span>CLUB</span> </h1>
                        <form className="d-flex  ms-auto mb-2">
                            <input className="form-control me-2" type="search" placeholder="Search Artists" aria-label="Search" />
                            <a class="btn btn-danger" href="#" role="button">Search</a>
                        </form>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">MENU</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">ABOUT US</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">CLUB</a>
                            </li>

                            <li className="nav-item" >
                                <a className="nav-link ">SIGN IN</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
         {/* --------------header----------  */}
            <div className="header-container container">
                <h1 >"Make an <span>Musical</span> and <span>Dancing</span> astist Club"</h1>
                <h5>In our club, a committee has been organized with the best songs and artists of the world to sing and perform.</h5>
                <h1>Total Budget: <span style={{color:'white'}}>$ 2000 Million</span> </h1>
            </div>
        </>
    );
};

export default Header;