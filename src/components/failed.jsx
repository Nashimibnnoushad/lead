import "../App.css";
import '../css/index.css'
import '../css/form.css'
import '../css/confo.css'
import '../js/index.js'
import './style.css'
import failedimg from '../image/failed.png'
import backbutton from '../image/backbutton.png'
import React, { useState, useEffect } from 'react'

const Failed = () => {
    const [userdata, setuserdata] = useState({
        "fullname": '',
        "gender": '',
        "email": '',
        "phone": '',
        "address1": '',
        "address2": '',
        "cityTownVillage": '',
        "district": '',
        "pincode": '',
        "highestQua": '',
        "language": "",
        "programType": '',
        "txnid": '',
        "hash": '',
        "amount": ''
    })
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("leaduservalue"));
        if (user !== null) {
            setuserdata(user)
        }
    }, []);

    return (
        <>
            <div className="back-button">
                <a href="./Home"> <img src={backbutton} alt="" srcset="" /></a>
            </div>
            <div className="success-confram  faq-color-C3EEFE">
                <div className="details">
                    <form action="https://test.payu.in/_payment" method="post">
                        <h2>Payment is Failed</h2>
                        <img src={failedimg} style={{width:'20%'}} alt="" srcset="" />
                        <p>
                            Ppayment of ₹<b>1,920.00</b>  for the skill-building course is failed. Please retry!
                        </p>
                        {/* <a className="addbtns">Retry </a> */}
                        {/* Hidden Datas for API */}
                        <input type="hidden" name="key" value="DTOAGA" size="15" />
                        <input type="hidden" name="txnid" size="15" value={userdata.txnid} required />
                        <input type="hidden" name="amount" size="15" value={userdata.amount} required />
                        <input type="hidden" name="productinfo" size="15" value={userdata.programType} required />
                        <input type="hidden" name="firstname" size="15" value={userdata.fullname} required />
                        <input type="hidden" name="email" size="15" value={userdata.email} required />
                        <input type="hidden" name="phone" size="15" value={userdata.phone} required />
                        <input type="hidden" name="surl" size="15" value="http://localhost:3000/Success/" required />
                        <input type="hidden" name="furl" size="15" value="http://localhost:3000/Success/" required />
                        <input type="hidden" name="hash" size="15" value={userdata.hash} required />
                        <button type="submit" className='btn-data' style={{marginTop: '20px'}}>
                            Retry
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Failed;
