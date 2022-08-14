import "../App.css";
import '../css/index.css'
import '../css/form.css'
import '../css/confo.css'
import '../js/index.js'
import './style.css'
import React, { useState, useEffect } from 'react'
import backbutton from '../image/backbutton.png'

const Refund = () => {

    return (
        <>
            <div className="back-button">
                <a href="./Home"> <img src={backbutton} alt="" srcset="" /></a>
            </div>
            <div className="success-confram  faq-color-C3EEFE">
                <div className="privacy">
                    <h3>No-Refund Policy</h3><br />
                    <p>We thank you and appreciate your choice to enrol for LEAD, an initiative by Ed4All™ in partnership with
                        TASK. At Ed4All, we aim to ensure that every Learner achieves learning outcomes with our self-paced
                        learning courses. With every online purchase, there are terms and conditions that fall under our policy.
                        Kindly read the policy and conditions carefully as they provide you important information. With the
                        purchase of a course on Ed4All, you also agree to our terms of use and policy.</p><br /><br />
                    <h5>Cancellation and Refunds for the Purchase</h5><br />
                    <p>1. Once you subscribe and make the required payment, it shall be final and there cannot be any
                        changes or modifications to the same and there shall be no refund.</p><br />
                    <p>2. Anytime after making payment, you may cancel your Ed4All subscription and withdraw from the
                        program, for any reason whatsoever.</p><br />
                    <p>3. You can continue to have access to the Ed4All service/platform LEAD, an initiative by Ed4All in
                        partnership with TASK till the end of your subscription period of one year.</p><br />
                    <p>4. This ‘No-Refund Policy’ shall apply immediately upon making of payment.</p><br />
                    <p>5. The payments are non- refundable and we do not provide any refunds, credits or prorated billing
                        for any partial subscription periods or unused content, curriculum and certifications provided by
                        Ed4All for LEAD program.</p><br />
                    <p>By purchasing our product you hereby acknowledge and agree to our ‘No-Refund Policy’. This
                        ‘No-Refund Policy’ becomes applicable immediately upon the making of payment.</p>
                </div>
            </div>
        </>
    );
};

export default Refund;
