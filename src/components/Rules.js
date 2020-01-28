import React from 'react';


const Rules = () => {
    return (
        // <div className='rules mt-5'>

        <div className="container py-5">
            <h3>GENERAL DOJO RULES</h3>
            <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" href="#beforeClass">Before Class</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#duringClass">During Class</a>
                </li>
            </ul>



            <div className="tab-content mt-5">
                <div id="beforeClass" className="container tab-pane active pt-3">
                    <h4>Before Class</h4>
                    <ul>
                        <li>Students should enter the dojo 10 minutes prior to their class.</li>
                        <li>Please sign in when you arrive.</li>
                        <li>Shoes should be removed and placed neatly on the shoe rack.</li>
                        <li>Students should wait at the edge of the mat for Black Belt permission to change.</li>
                        <li>Students must be properly attired at all times.</li>
                        <li>For safety reasons, wrist watches and jewelry (except for plain wedding bands) need to be removed when you change into your uniform (gi).</li>
                        <li>It’s a good idea to bring a lock for your locker, since the school isn’t responsible for lost or stolen items.</li>
                        <li>Change quickly! After changing, bow onto the mat and wait quietly for your class to start.</li>
                        <li>If your class has already begun, do ten push-ups before joining the line.</li>
                        <li>Any student with an injury must inform the instructor before working out.</li>
                    </ul>
                </div>
                <div id="duringClass" className="container tab-pane fade pt-3">
                    <h4>During Class</h4>
                    <ul>
                        <li>No profanity</li>
                        <li>No gum chewing</li>
                        <li>Line up quickly when called.</li>
                        <li>Keep conversation to a minimum. It only takes away from your training – as well as interfering with the training of the person you’re talking to.</li>
                        <li>All students must have permission from a Black Belt to leave the dojo floor.</li>
                        <li>Bow when entering or leaving the mat.</li>
                        <li>While in the dojo Black Belts should be addressed as “Mr.”, “Mrs.”, or “Ms.” 3rd Degree Black Belts and above should be addressed as Sensei.</li>
                        <li>No kumite is permitted without direct supervision of an instructor.</li>
                        <li>Safety is of prime importance.</li>
                        <li>Any student who acts without regard for the safety of other students or intentionally endangers or injures another student will be suspended or permanently dismissed.</li>
                    </ul>
                </div>

            </div>


        </div>
    )
}

export default Rules;