import React from 'react';
import { Link } from 'react-router-dom';

import logo2 from '/logo-tainted.jpg';

{/* <ul className="navbar-nav mr-auto">
    <li className="nav-item">
        <Link className="nav-link" to='/'>Home</Link>
    </li>
    <li className="nav-item">
        <Link className="nav-link" to='/adult'>Adult</Link>
    </li>
    <li className="nav-item">
        <Link className="nav-link" to='/children'>Children</Link>
    </li>
    <li className="nav-item">
        <Link className="nav-link" to='/history'>History</Link>
    </li>
    <li className="nav-item">
        <Link className="nav-link" to='/masters'>Masters</Link>
    </li>
    <li className="nav-item">
        <Link className="nav-link" to='/contact'>Contact Us</Link>
    </li>
    <li className="nav-item">
        <Link className="nav-link" to='/newsletter'>Newsletter</Link>
    </li>
</ul> */}

const Footer = () => {
    return (
        <div className="container">

            <div className="row pt-5">
                <div className="col-md-3">
                    <Link to='/'><img src={logo2} className='logo2' alt="Logo" /></Link>
                </div>
                <div className="col-md-3 ">
                    <p><Link to='/'>Home</Link></p>
                    <p><Link to='/adult'>Adult</Link></p>
                    <p><Link to='/children'>Children</Link></p>
                </div>

                <div className="col-md-3 ">
                    <p><Link to='/history'>History</Link></p>
                    <p><Link to='/masters'>Masters</Link></p>
                    <p><Link to='/newsletter'>Newsletter</Link></p>
                </div>
                <div className="col-md-3 footer-contact">
                    <p>Contact</p>
                    <p>Southfield Martial Arts Institute</p>
                    <p>29100 Southfield Rd</p>
                    <p>Southfield MI 48076</p>
                    <hr></hr>
                    <p>248.569.7030</p>
                    <p>smaiadams@aol.com</p>
                    <hr></hr>
                </div>
            </div>
            <div className="row">
                <div className="col-md-9">Copyright © 2020 Southfield Martial Arts. All rights reserved. Powered by: <a href="https://www.jcbdigital.com" target="_blank">JCB Digital </a>| Sitemap</div>
                <div className="col-md-3"><p>Facebook</p></div>
            </div>


        </div >
    )
}

export default Footer;