import React, { Component } from 'react';
import Header from './Header';
import AudioPlayerIntro from './AudioPlayerIntro';

import tiger from '/assets/tiger-large.jpg';


import Calendar from './Calendar';
import Footer from './Footer';



class Intro extends Component {

    render() {
        return (
            <div className='pageWrapper'>
                <Header />
                <div className='container-fluid animatedText'>
                    <div className="container">
                        <div className="text-center fade-in-tiger">
                            <img src={tiger} />
                        </div>
                    </div>
                    <div className="container">
                        <div className="row flex align-items-center">
                            <div className="col-sm-11 col-sm-offset-1 text-center animation animation-9 my-3">with sweat and tears you enter the spirit of martial arts</div>
                        </div>
                        <div className="row flex align-items-center">
                            <div className="col-sm-12 text-center animation animation-1 my-3">tell me, I'll forget. show me, I may remember. Involve me, I'll understand</div>
                        </div>
                        <div className="row flex align-items-center">
                            <div className="col-sm-4 offset-sm-1 text-center animation animation-2 my-3">may practice always strengthen your mind, body & spirit</div>
                            <div className="col-sm-5 offset-sm-1 text-center animation animation-3 my-3">a black belt is a white belt that never quit</div>
                        </div>
                        <div className="row flex align-items-center">
                            <div className="col-sm-4 text-center animation animation-4 my-3">to fall 7 times and to rise 8, that is when life begins</div>
                            {/* <div className="col-sm-3 text-center fade-in"><img src="tiger-sm.jpg" /></div> */}
                            <div className="col-sm-5 text-center animation animation-5 my-3">a good day is not a day without chaos, but rather a day in which we remain calm within the chaos</div>
                        </div>
                        <div className="row flex align-items-center">
                            <div className="col-sm-6 text-center animation animation-6 my-3">move like a cat...strike like a tiger</div>
                            <div className="col-sm-6 text-center animation animation-7 my-3">we will give out before we give in</div>
                        </div>
                        <div className="row flex align-items-center">
                            <div className="col-sm-12 text-center animation animation-8 my-3">a person who attains mastery of an art reveals it in their every action</div>
                        </div>
                        <div className="row flex align-items-center mt-5">
                            <div className="col-sm-12 text-center mt-sm-5"><AudioPlayerIntro /></div>
                        </div>

                        {/* <div className='bannerTitle'>Lorum ipsum </div>
                    <div><img src={newsletterImage} className='responsiveImage' alt="newsletter" /></div> */}

                    </div>

                </div>

                <div className='container py-5'>
                    <h1>About Our School</h1>
                    <section>
                        <p>The Southfield Martial Arts Institute is the ultimate contemporary training complex. It’s over 15,000 square foot state-of-the-art facility makes it one of the largest and finest martial art schools in the country.</p>
                        <p>Frequent practice regimes and structured programs go on seven days a week. At Southfield Martial Arts Institute, commitment and discipline are what it is all about. Our school has a diverse make-up of students including children, seniors, laborers and professionals. Everyone works together and helps one another achieve the highest level of martial arts education.</p>
                        <p>Southfield Martial Arts InstituteIn 1987, Grand Master Willie Adams was inducted into the Karate Hall of Fame. Today, he is head instructor at the Southfield Martial Arts Institute and president of the Karate International Association of Isshinryu. As a 10th degree black belt, Grand Master Adams has been a major figure on the Metro Detroit karate scene for over 40 years.</p>
                        <p>The highest ranking Isshinryu Master Instructor is Harold Mitchum. He was the senior American on Okinawa with Grandmaster Tatsu Shimabuku. He was made president of Hanshi Shimabuku's association on Okinawa called the Okinawan American Karate Association. Hanshi Mitchum recognized Hanshi Adams as a 10th degree black belt in June of 2008.</p>
                        <p>Southfield Martial Arts Institute facility includes several other certified black belts, both male and female, who assist in the class. And Grand Master Adams personally oversees the action in every class taught at the school.</p>
                        <p>Southfield Martial Arts, home of the North American Karate Championship, is located on the northeast corner of Southfield and 12 mile road making it convenient to every city in metro Detroit.</p>


                    </section>
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
}

export default Intro;