import React, { Component } from 'react';
import Header from './Header';
// import newsletterImage from'/16x6_placeholder.jpg';

import Calendar from './Calendar';
import Questions from './Questions'
import Creeds from './Creeds';
import Rules from './Rules';

import Footer from './Footer';


class Newsletter extends Component {

    render() {
        return (
            <div className='pageWrapper'>
                <Header />
                <div className='bannerWrapper'>
                    <div className='bannerTitle'>Newsletter</div>
                    {/* <div><img src={newsletterImage} className='responsiveImage' alt="newsletter" /></div> */}
                </div>

                <div className='schedule'>
                    <Calendar />
                </div>




                <div className="content">
                    <div className="row">
                        <div className="col-lg-4">
                            <h3>Isshinryu Karate Kicks</h3>
                            <p>Front Kick<br />MAE GERI<br />MY gary</p>
                            <p>Cross Kick<br />SHOBA KONATA<br />SHOW ba cone AH tay</p>
                            <p>Knee KICK<br />HIZA GERI<br />HEEza gary</p>
                            <p>Heel Thrust Kick<br />MAE KONATA<br />MY cone Ahtay</p>
                            <p>Forward Angle Kick<br />SOKUTO GERI	<br />so KOO toe gary</p>
                            <p>Squat Kick	<br />OTOSHI GERI	<br />o TOE sha gary</p>
                            <p>Side Snap Kick, Ball of Foot<br />SHOBA GERI<br />SHOW ba gary</p>
                            <p>Side Snap Kick, Blade of Foot<br />YOKO GERI<br />Yoko gary</p>
                            <p>Front Kick Back Kick<br />MAE GERI-UROSHI GERI<br />MY gary-your OH sha gary</p>
                            <p>Back Kick Front Kick<br />UROSHI GERI-MAE GERI<br />your OH sha gary-MY gary</p>
                        </div>
                        <div className="col-lg-4">
                            <h3>THE 15 BASIC ISSHINRYU EXERCISES</h3>
                            <ol>
                                <li>Seiken Oi Tsuki	(SAY ken o eat SU key)</li>
                                <li>Jodan Oi Tsuki	(Joe don o eat SU key)</li>
                                <li>Seiken Giyak Tsuki	(SAY ken GE yak SU key)</li>
                                <li>Jodan Giyak Tsuki	(JOE don GE yak SU key)</li>
                                <li>Gedan Barrai Seiken Tsuki	(GAY don bar RYE SAY ken SU key)</li>
                                <li>Chudan Uke Seiken Tsuki	(CHEW don OO key SAY ken SU key)</li>
                                <li>Tegate Barrai Nukite	(ta GOT ta bar RYE NEW key tay)</li>
                                <li>Jodan Tegate Uke Jodan Tsuki	(JOE don ta GOT ta OO key JOE don SU key)</li>
                                <li>Jodan Uke Seiken Tsuki	(JOE don OO key SAY ken SU key)</li>
                                <li>Ura Uchi Seiken Tsuki	(U rah OOCH SAY ken SU key)</li>
                                <li>Gedan Barrai Godan Joku Tsuki	(Gay don bar RYE GO den JOE koo SU key)</li>
                                <li>Chudan Uke Goden Joku Tsuki	(CHEW don OO key GO den JOE koo SU key)</li>
                                <li>Shuto Uchi Shuto Uchi	(sh-toe OOCH sh-toe OOCH)</li>
                                <li>O-Uchi O-Uchi	(oh OOCH oh OOCH)</li>
                                <li>Hige No Ato Tsukai	(HEE gee no AH-toe su KAI)</li>
                            </ol>
                        </div>
                        <div className="col-lg-4">
                            <h3>COUNTING IN OKINAWAN</h3>
                            <ol className="noBullets">
                                <li>1. ICHI</li>
                                <li>2. NI</li>
                                <li>3. SAN</li>
                                <li>4. SHI</li>
                                <li>5. GO</li>
                                <li>6. ROKO</li>
                                <li>7. SHICHI</li>
                                <li>8. HACHI</li>
                                <li>9. KU</li>
                                <li>10. JU</li>
                                <li>11. JU-ICHI</li>
                                <li>12. JU-NI</li>
                                <li>13. JU-SAN</li>
                                <li>14. JU-SHI (etc.)</li>
                                <li>20. NI-JU</li>
                                <li>21. NI-JU ICHI</li>
                                <li>22.NI-JU NI</li>
                                <li>23. NI-JU SAN (etc.)</li>
                                <li>30. SAN-JU</li>
                            </ol>
                        </div>
                    </div>
                </div>

                <section className="schedule my-5">
                    <Questions />
                </section>

                <div className="content">
                    <section>
                        <Creeds />
                    </section>
                </div>

                <section className='w-100 rules mt-5'>
                    <Rules />
                </section>

                <div className='footer'>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Newsletter;