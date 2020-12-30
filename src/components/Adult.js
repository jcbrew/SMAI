import React, { Component } from 'react';
import Header from './Header';

import Calendar from './Calendar';
import ContactUs from './ContactUs';

import masterAdams from '/assets/masterAdams_200.jpg';


import Questions from './Questions';
import Footer from './Footer';

class Adult extends Component {

    render() {
        return (
            <div>
                <Header />
                <div className='bannerWrapper adult'>
                    <div className='bannerTitle'>Adult Program</div>
                    {/* <div><img src={newsletterImage} className='responsiveImage' alt="newsletter" /></div> */}
                </div>
                <div className="container py-5">
                    <h2>The Program That Gets Results!</h2>
                    <section>
                        <img className='float-right pl-3 pb-3' src={masterAdams} /><p>We have set a goal at Southfield Martial Arts Insitute. Our goal is to get out the message about the benefits of our unique program. We have seen some astounding results in our school. The redefined adult classes were structured after careful study and research by Grand Master Willie Adams. He has developed a results orientated fitness program that stresses the following essential elements.</p>
                        <p>Number one, the workout is safe. The program was designed with adults in mind. We have purposely developed our systems techniques that were created for a realistic self defense, not for sport.Secondly, you will not be embarrassed. We have awesome instructors who will guide you through the orientation period. We want you to look good and become comfortable in the class environment. </p>
                        <p>Thirdly, the classes are fun. You will enjoy each and every class as you start to reach your personal fitness goals. You will always leave class feeling great about yourself and the experience you've had. In addition, it is very interesting learning the concepts of the martial arts. It may not change your standard of living. You will still eat food, wear clothes, and drive a car, but as you embrace the concepts of the martial arts it will change the way you live.</p>


                    </section>
                </div>
                <div className='schedule'>
                    <Questions />
                </div>
                <div className='contact-us'>
                    <ContactUs />
                </div>
                <div className='schedule'>
                    <Calendar />
                </div>
                <div className='footer'>
                    <Footer />
                </div>

            </div>

        );
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

}

export default Adult;