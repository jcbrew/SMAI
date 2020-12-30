import React from 'react';
import mizugami from '/assets/mizu-gami-250.png';


const Questions = () => {
    return (
        // <div className='rules mt-5'>

        <div className="container py-5">
            <h3>Common Questions About Karate</h3>
            <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" href="#q1">What is Karate?</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#q2">What will I learn in the beginning?</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#q3">Is karate training difficult?</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#q4">Who can do karate?</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#q5">How will karate help me?</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#q6">How often should I train?</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#q7">How will I progress?</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#q8">Why Isshinryu Karate?</a>
                </li>
            </ul>



            <div className="tab-content">
                <div id="q1" className="content tab-pane active">
                    <h4><em>What is Karate?</em></h4>
                    <p>Translated karate means "empty hand". The oriental art of unarmed self-defense has been around since ancient times. It is the ultimate power of the unity of mind and body. People spend their lives training their spirits as well as their bodies. In addition to being an excellent self-defense system, sport, and work-out, karate provides a heightened appreciation of one's self and the world. The combination of strength, grace and precision give students self confidence while developing their body, integrity and serenity.</p>
                </div>
                <div id="q2" className="content tab-pane fade">
                    <h4><em>What will I learn in the beginning?</em></h4>
                    <p>The first three months will be dedicated to basic exercises, punches and stretches. You will also learn basic self-defense techniques that will eventually be used in classroom sparring. You will also learn the moves that will lead you to your first belt promotion.</p>
                </div>
                <div id="q3" className="content tab-pane fade">
                    <h4><em>Is karate training difficult?</em></h4>
                    <p>Yes and No. Since karate is an individual sport, you can work at a pace you feel comfortable with. The hardest part of karate is the mental conditioning. But as your karate improves, so will your physical power and mind control.</p>
                </div>
                <div id="q4" className="content tab-pane fade">
                    <h4><em>Who can do karate?</em></h4>
                    <p>Anyone, any age, any sex. As a form of fitness for the mind and body, karate is a sport for everyone.</p>
                </div>
                <div id="q5" className="content tab-pane fade">
                    <h4><em>How will karate help me?</em></h4>
                    <p>Karate improves individuals both mentally and physically. Some benefits you will experience from karate are physical conditioning, improved concentration, self-confidence, inner peace, self-defense, weight control, more energy, self-discipline, athletic skills, improved mental attitude, temper control, improved grades, and respect for self and others.</p>
                </div>
                <div id="q6" className="content tab-pane fade">
                    <h4><em>How often should I train?</em></h4>
                    <p>For a constant progression in belts, biweekly formal classroom sessions and daily practices at home are recommended.</p>
                </div>
                <div id="q7" className="content tab-pane fade">
                    <h4><em>How will I progress?</em></h4>
                    <p>The progression of belts depends on the amount of dedication and discipline each student can give. But the average progression of the belts is as follows:</p>
                    <div className="row">
                        <div className="col-lg-4">
                            <p><b>White belt</b> - beginner<br />
                                1 yellow stripe - 1 month<br />
                                2 yellow stripes - 2 months<br />
                                3 yellow stripes - 3 months</p>
                        </div>

                        <div className="col-lg-4">
                            <p><b>Yellow belt</b> - 5 months<br />
                                1 green stripe - 7 months<br />
                                2 green stripes - 9 months<br />
                                3 green stripes - 11 months</p></div>
                        <div className="col-lg-4">
                            <p><b>Green belt</b> - 1 year<br />
                                1 brown stripe - 13 months<br />
                                2 brown stripes - 15 months<br />
                                3 brown stripes - 17 months</p></div>
                        <div className="col-lg-4">
                            <p><b>Brown belt</b> - 1 1/2 years<br />
                                1 red stripe - 18 months<br />
                                2 red stripes - 2 years<br />
                                3 red stripes - 2 1/2 years</p></div>
                        <div className="col-lg-4">
                            <p><b>Black belt candidate</b> - 3 years<br />
                                Black Belt - 3 1/2 - 4 years</p></div>
                    </div>
                </div>
                <div id="q8" className="content tab-pane fade">
                    <h4><em>Why Isshinryu Karate?</em></h4>
                    <img className='float-right pl-3 pb-3' src={mizugami} /><p>Isshinryu (one heart/mind) was developed by Sensei Shimabuku, Okinawa's Grand Master of Shorin-Ryu, who devoted his life to the study of karate. He was a master of Goju-Ryu; studied Kobayshi-Ryu under famous Chotokan Kiyan and later under legendary Choki Motobu. He then studied the art of Bo and Sai weapons defense and Tee-faa under Okinawa's most noted instructors. Master Shimabuku combined the best of these styles into Isshinryu, which epitomizes the powerful, lightening-fast techniques that in ancient times enabled the weaponless Okinawans to defeat the sword-wielding Samurai warriors of Japan.</p>

                    <p>Isshinryu's main objective is the perfection of oneself through both physical and mental development. As students learn the art of self defense, they acquire self-confidence, serenity and the ability to concentrate. Isshinryu Karate combines a well rounded exercise program with some important advantages over other styles, including:</p>

                    <ul>
                        <li>Isshinryu kicks and punches are thrown from natural stances, eliminating wasted motions and giving you split-second advantages over opponents using other styles.</li>
                        <li>Isshinryu stresses proficiency with both hand and foot techniques, making it the most versatile form of karate because you have no weak points.</li>
                        <li>Isshinryu is the most realistic style of karate, stressing "close-in" techniques necessary for "street fighting" where you haven't time for elaborate, time-consuming wind-ups of other styles.</li>
                        <li>Isshinryu is the most sensible form of karate, with snap-punch and snap-kick techniques that permit you to move in and out quickly without committing yourself to a disadvantaged position should you miss or misjudge.</li>
                        <li>Isshinryu is more adaptable to the American physique temperament than other more rigid styles because the Okinawan Master designed it to follow natural body movements.</li>
                        <li>Isshinryu will put you into better physical shape because it provides you with an aggressive exercise program that will improve your muscle tone, suppleness, speed, and mind.</li>
                        <li>Isshinryu may help you in your job since the mental and physical conditioning provides you with an opportunity to "wind down" from daily tensions and frustrations.</li>
                    </ul>
                </div>

            </div>


        </div>
    )
}

export default Questions;