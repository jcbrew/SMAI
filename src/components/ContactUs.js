import React from 'react';
import { Link } from 'react-router-dom';


const ContactUs = () => {
    return (
        <div className="w-100 contentWrapper content pt-4 pb-5">

            <div className="row">
                <div className="col-md-8">
                    <h3>Let us show you how we can help you train your mind and body.</h3>
                </div>
                <div className="col-md-4 mt-3 mt-md-0 text-center text-md-right">

                    <Link to='/contact'><button className="btn btn-outline-light">Learn More About Us</button></Link>

                </div>

            </div>


        </div>
    )
}

export default ContactUs;