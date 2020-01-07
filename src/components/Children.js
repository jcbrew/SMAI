import React, { Component } from 'react';
import Header from './Header';
import img1 from '/assets/76863442-academic_800.jpg';
import img2 from '/assets/76746432-self-esteem_800.jpg';
import img3 from '/assets/33150246-smart-boy_800.jpg';
import img4 from '/assets/38312008-bully_800.jpg';

import ContactUs from './ContactUs';

import Calendar from './Calendar';

import Footer from './Footer';

class Children extends Component {

    render() {
        return (
            <div>
                <Header />
                <div className='bannerWrapper children'>
                    <div className='bannerTitle'>Youth Program</div>
                    {/* <div><img src={newsletterImage} className='responsiveImage' alt="newsletter" /></div> */}
                </div>

                <div className="container py-5">
                    <h2>The Program That Gets Results!</h2>
                    <section>
                        <div className='row'>
                            <div className='col-12'>
                                <p>For over 40 years, Grand Master Adams has been nurturing children like yours with character building tools found only in karate. No other sport can match them. After enrolling, watch as your child increases in confidence, energy, and spirit. Stand and be dazzled as he/she becomes unstoppable in his quest for:</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-4 col-sm-6 my-lg-3 img-w-100'>
                                <div className='child-title'><h5>Greater academic achievement</h5></div>
                                <div><img src={img1} /> </div>
                            </div>
                            <div className='col-lg-4 col-sm-6 my-lg-3 img-w-100'>
                                <div className='child-title'><h5>Unshakable self respect</h5></div>
                                <div><img src={img2} /> </div>
                            </div>
                            <div className='col-lg-4 col-sm-6 my-lg-3 img-w-100'>
                                <div className='child-title'><h5>Increased strength and fitness, in both body and mind</h5></div>
                                <div><img src={img3} /> </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12'>
                                <p>Look at it this way, your child’s first and biggest challenge comes not from “fighting for his rights on the street,” or “beating up the neighborhood bully.” Instead, it comes from battling more sinister forces, your child’s own fears and self doubts:</p>

                            </div></div>
                        <div className='row my-3'>
                            <div className='col-12 col-md-4 img-w-100'>
                                <img src={img4} />
                            </div>
                            <div className='col-12 col-md-7'>
                                <ul>
                                    <li>"I’m not as smart as John."</li>
                                    <li>"I don’t get what my teacher is saying."</li>
                                    <li>"I wish I was as [pretty, tall] as Sally."</li>
                                    <li>"Why does Jim keep calling me a bad name?"</li>
                                    <li>"Why can’t I be as popular as Lauryn?"</li>
                                </ul>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12'>

                                <p>The question is, how do you get your child to fight these demons? You know the problem; your child has a tough time even telling you she’s haunted by them - never mind how she might conquer them. The good news is I have a proven solution: a program that has already worked for over 3,000 local area children. A series kidsof lessons your child can learn easier than you think. I call it, “Kids With Kick.” Let me tell you it’s secret.</p>

                                <p>To repeat, martial arts are less about your child learning to fight others, and more about fighting... himself: His innermost fears. Conquer them, and your child unleashes within himself a powerful, unstoppable force; a force that gives him the strength to kick down the doors of his own self doubts; a force that opens your child to the exalting power of values.</p>

                                <p>In other words, when your child uses the discipline of karate to conquer his fears, he has power to transfer that discipline to all other areas of his life. I know of no other sport that does this better than karate.</p>

                            </div>
                        </div>
                    </section>
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
}

export default Children;