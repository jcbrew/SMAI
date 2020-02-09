import React, { Component } from 'react';
import Header from './Header';
import ichi from '/assets/01-ichi.png';
import ni from '/assets/02-ni.png';
import san from '/assets/03-san.png';
import shi from '/assets/04-shi.png';
import go from '/assets/05-go.png';
import roku from '/assets/06-roku.png';
import shichi from '/assets/07-shichi.png';
import hachi from '/assets/08-hachi.png';
import ku from '/assets/09-ku.png';
import ju from '/assets/10-ju.png';
// import newsletterImage from'/16x6_placeholder.jpg';
import Calendar from './Calendar';
import Questions from './Questions';
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

                <div className="container">
                    <div className="row py-5">
                        <div className="col-lg-6">
                            <h3>Isshinryu Karate Kicks</h3>
                            <ol id="columns-2" className="noBullets my-5">
                                <li className="text-left mb-5"><strong>Cross Kick</strong><br />SHOBA KONATA<br />SHOW ba cone AH tay</li>
                                <li className="text-left mb-5"><strong>Front Kick</strong><br />MAE GERI<br />MY gary</li>
                                <li className="text-left mb-5"><strong>Knee KICK</strong><br />HIZA GERI<br />HEEza gary</li>
                                <li className="text-left mb-5"><strong>Heel Thrust Kick</strong><br />MAE KONATA<br />MY cone Ahtay</li>
                                <li className="text-left mb-5"><strong>Forward Angle Kick</strong><br />SOKUTO GERI	<br />so KOO toe gary</li>
                                <li className="text-left mb-5"><strong>Squat Kick</strong>	<br />OTOSHI GERI	<br />o TOE sha gary</li>
                                <li className="text-left mb-5"><strong>Side Snap Kick, Ball of Foot</strong><br />SHOBA GERI<br />SHOW ba gary</li>
                                <li className="text-left mb-5"><strong>Side Snap Kick, Blade of Foot</strong><br />YOKO GERI<br />Yoko gary</li>
                                <li className="text-left mb-5"><strong>Front Kick Back Kick</strong><br />MAE GERI-UROSHI GERI<br />MY gary-your OH sha gary</li>
                                <li className="text-left mb-3"><strong>Back Kick Front Kick</strong><br />UROSHI GERI-MAE GERI<br />your OH sha gary-MY gary</li>
                            </ol>

                            <h3>THE 15 BASIC ISSHINRYU EXERCISES</h3>
                            <ol>
                                <li><strong>Seiken Oi Tsuki</strong> (SAY ken o eat SU key)</li>
                                <li><strong>Jodan Oi Tsuki</strong>	(Joe don o eat SU key)</li>
                                <li><strong>Seiken Giyak Tsuki</strong>	(SAY ken GE yak SU key)</li>
                                <li><strong>Jodan Giyak Tsuki</strong> (JOE don GE yak SU key)</li>
                                <li><strong>Gedan Barrai Seiken Tsuki</strong> (GAY don bar RYE SAY ken SU key)</li>
                                <li><strong>Chudan Uke Seiken Tsuki</strong> (CHEW don OO key SAY ken SU key)</li>
                                <li><strong>Tegate Barrai Nukite</strong> (ta GOT ta bar RYE NEW key tay)</li>
                                <li><strong>Jodan Tegate Uke Jodan Tsuki</strong> (JOE don ta GOT ta OO key JOE don SU key)</li>
                                <li><strong>Jodan Uke Seiken Tsuki</strong>	(JOE don OO key SAY ken SU key)</li>
                                <li><strong>Ura Uchi Seiken Tsuki</strong> (U rah OOCH SAY ken SU key)</li>
                                <li><strong>Gedan Barrai Godan Joku Tsuki</strong> (Gay don bar RYE GO den JOE koo SU key)</li>
                                <li><strong>Chudan Uke Goden Joku Tsuki</strong> (CHEW don OO key GO den JOE koo SU key)</li>
                                <li><strong>Shuto Uchi Shuto Uchi</strong> (sh-toe OOCH sh-toe OOCH)</li>
                                <li><strong>O-Uchi O-Uchi</strong> (oh OOCH oh OOCH)</li>
                                <li><strong>Hige No Ato Tsukai</strong>	(HEE gee no AH-toe su KAI)</li>
                            </ol>


                        </div>

                        <div className="col-lg-5 offset-1 mt-5 mt-lg-0">
                            <h3>COUNTING IN OKINAWAN</h3>
                            <ol id="columns-2" className="noBullets mt-5">
                                <li className="text-left mb-5"><img src={ichi} /> <br />1. ICHI</li>
                                <li className="text-left mb-5"><img src={ni} /> <br />2. NI</li>
                                <li className="text-left mb-5"><img src={san} /> <br />3. SAN</li>
                                <li className="text-left mb-5"><img src={shi} /> <br />4. SHI</li>
                                <li className="text-left mb-5"><img src={go} /> <br />5. GO</li>
                                <li className="text-left mb-5"><img src={roku} /> <br />6. ROKO</li>
                                <li className="text-left mb-5"><img src={shichi} /> <br />7. SHICHI</li>
                                <li className="text-left mb-5"><img src={hachi} /> <br />8. HACHI</li>
                                <li className="text-left mb-5"><img src={ku} /> <br />9. KU</li>
                                <li className="text-left mb-5"><img src={ju} /> <br />10. JU</li>
                                <li className="text-left mb-5"><img src={ju} /><img src={ichi} /> <br />11. JU-ICHI</li>
                                <li className="text-left mb-5"><img src={ju} /><img src={ni} /> <br />12. JU-NI</li>
                                <li className="text-left mb-5"><img src={ju} /><img src={san} /> <br />13. JU-SAN</li>
                                <li className="text-left mb-5"><img src={ju} /><img src={shi} /> <br />14. JU-SHI (etc.)</li>
                                <li className="text-left mb-5"><img src={ni} /><img src={ju} /> <br />20. NI-JU</li>
                                <li className="text-left mb-5 text-nowrap"><img src={ni} /> <img src={ju} /> <img src={ichi} /> <br />21. NI-JU ICHI</li>
                                <li className="text-left mb-5 text-nowrap"><img src={ni} /> <img src={ju} /> <img src={ni} /> <br />22.NI-JU NI</li>
                                <li className="text-left mb-5 text-nowrap"><img src={ni} /> <img src={ju} /> <img src={san} /> <br />23. NI-JU SAN (etc.)</li>
                                <li className="text-left mb-5"><img src={san} /><img src={ju} /> <br />30. SAN-JU</li>
                            </ol>
                        </div>
                    </div>
                    {/* <div className="row">
                        <div className="col">
                            <h3>THE 15 BASIC ISSHINRYU EXERCISES</h3>
                            <ol>
                                <li><strong>Seiken Oi Tsuki</strong> (SAY ken o eat SU key)</li>
                                <li><strong>Jodan Oi Tsuki</strong>	(Joe don o eat SU key)</li>
                                <li><strong>Seiken Giyak Tsuki</strong>	(SAY ken GE yak SU key)</li>
                                <li><strong>Jodan Giyak Tsuki</strong> (JOE don GE yak SU key)</li>
                                <li><strong>Gedan Barrai Seiken Tsuki</strong> (GAY don bar RYE SAY ken SU key)</li>
                                <li><strong>Chudan Uke Seiken Tsuki</strong> (CHEW don OO key SAY ken SU key)</li>
                                <li><strong>Tegate Barrai Nukite</strong> (ta GOT ta bar RYE NEW key tay)</li>
                                <li><strong>Jodan Tegate Uke Jodan Tsuki</strong> (JOE don ta GOT ta OO key JOE don SU key)</li>
                                <li><strong>Jodan Uke Seiken Tsuki</strong>	(JOE don OO key SAY ken SU key)</li>
                                <li><strong>Ura Uchi Seiken Tsuki</strong> (U rah OOCH SAY ken SU key)</li>
                                <li><strong>Gedan Barrai Godan Joku Tsuki</strong> (Gay don bar RYE GO den JOE koo SU key)</li>
                                <li><strong>Chudan Uke Goden Joku Tsuki</strong> (CHEW don OO key GO den JOE koo SU key)</li>
                                <li><strong>Shuto Uchi Shuto Uchi</strong> (sh-toe OOCH sh-toe OOCH)</li>
                                <li><strong>O-Uchi O-Uchi</strong> (oh OOCH oh OOCH)</li>
                                <li><strong>Hige No Ato Tsukai</strong>	(HEE gee no AH-toe su KAI)</li>
                            </ol>
                        </div>
                    </div> */}
                </div>

                <section className="w-100 schedule my-5">
                    <Questions />
                </section>

                <div className="container">
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
            </div >
        );
    }
}

export default Newsletter;