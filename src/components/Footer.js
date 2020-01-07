import React from 'react';

import logo2 from '/logo-tainted.jpg';


const Footer = () => {
    return (
        <div className="container">

            <div className="row pt-5">
                <div className="col-md-3">
                    <img src={logo2} className='logo2' alt="Logo" />
                </div>
                <div className="col-md-3 ">
                    <p>Home</p>
                    <p>Adult</p>
                    <p>Children</p>
                </div>

                <div className="col-md-3 ">
                    <p>History</p>
                    <p>Masters</p>
                    <p>Newsletter</p>
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