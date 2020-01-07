import React, { Component } from 'react';
import Header from './Header';
import IFrame from 'react-iframe';
import Footer from './Footer';

class Contact extends Component {

    state = { contact: {} };

    componentDidMount() {

        //fetch('https://www.jayesonbrewster.com/display_table.php')
        fetch('http://localhost:1234/contact.json')

            .then(response => response.json())
            .then(json => this.setState({ contact: json }));

        // .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"));

    }

    render() {

        //const { title, content, id, date, author } = this.state.contact;
        const { name, address, citystatezip, phone, email } = this.state.contact;

        return (
            <div>
                <Header />
                <div className='bannerWrapper contact'>
                    <div className='bannerTitle'>Contact Us</div>
                    {/* <div><img src={newsletterImage} className='responsiveImage' alt="newsletter" /></div> */}
                </div>
                <div className="container pt-5">

                    <section className="row">
                        <div className="col-md-6"><h2>Southfield Martial Arts</h2></div>
                        <div className="col-md-3">
                            <p> <b>{name}</b><br />
                                {address}<br />
                                {citystatezip}</p>
                        </div>
                        <div className="col-md-3">
                            <p><br />{phone}<br />{email}</p>
                        </div>




                    </section>
                </div>
                <div className="mt-5">
                    <IFrame url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2941.451075729804!2d-83.22355944857577!3d42.50322127907544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824c876b8ea2f7d%3A0x1d60ab6a55c7bb5d!2sSouthfield%20Martial%20Arts%20Institute!5e0!3m2!1sen!2sus!4v1577647419916!5m2!1sen!2sus" width="100%" height="400px" frameBorder="0" style="border:0;" allowFullScreen=""></IFrame>
                </div>

                <div className='footer'>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Contact;