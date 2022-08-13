import "../App.css";
import '../css/index.css'
import '../css/form.css'
import '../css/confo.css'
import '../js/index.js'
import './style.css'
import successimg from '../image/success.png'
import backbutton from '../image/backbutton.png'
import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Success = () => {
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
    const [invitenumber, setinvitenumber] = useState(5)
    const [invitearray, setinvitearray] = useState([])

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("leaduservalue"));
        if (user !== null) {
            setuserdata(user)
        }
        var temparr = []
        for(let i=0; i<invitenumber;i++){
            let data = {
                'name': '',
                'email': '',
                'phone': ''
            }
            temparr.push(data)
        }
        setinvitearray(temparr)
    }, []);

    const renderInvite = () => {
        var invarr = []
        for (let i = 0; i < invitenumber; i++) {
            invarr.push(
                <div className="addfrnds">
                    <span className="listnum"><span>{i + 1}</span></span>
                    <div className="textbox">
                        <input type="text" className="form-control" placeholder="Full Name" />
                    </div>
                    <div className="textbox ">
                        <input type="email" className="form-control" placeholder="Email Address" />
                    </div>
                    <div className="textbox">
                        <div className="input-group mb-3">
                            <span className="input-group-text " style={{ backgroundColor: "#0079A4", color: "#fff" }} id="basic-addon1">+91</span>
                            <input type="text" className="form-control" placeholder="Mobile Number" />
                        </div>
                    </div>
                    {i === 0 &&
                        <span className="addornot"><i className="fa fa-check" aria-hidden="true"></i></span>
                    }
                    {i !== 0 &&
                        <span className="addornot">
                            <i className="fa fa-times" style={{cursor:'pointer'}} onClick={()=>removeinvite()} aria-hidden="true"></i>
                        </span>
                    }
                </div>
            )
        }
        return invarr
    }

    const addinvite = () => {
        var newnum = invitenumber + 1
        setinvitenumber(newnum)
    }

    const removeinvite = () => {
        var newnum = invitenumber - 1
        setinvitenumber(newnum)
    }

    const register = () => {
        let data = {
            "fullname": userdata.fullname,
            "gender": userdata.gender,
            "email": userdata.email,
            "phone": userdata.mobile,
            "address1": userdata.address1,
            "address2": userdata.address2,
            "cityTownVillage": userdata.cityTownVillage,
            "district": userdata.district,
            "pincode": userdata.pincode,
            "highestQua": userdata.highestQua,
            "language": userdata.language,
            "programType": userdata.programType
        }
        const headers = {
            'ApiKey': '1f94878b-8e91-449c-8942-9df195581f16',
        }
        axios.post(`https://leadappdev-api.azurewebsites.net/api/UserRegistration/AddUser`, data, { headers: headers })
            .then((response) => {
                console.log(response, 'response')
            })

    }

    return (
        <>
            <div className="back-button">
                <a href="./Home"> <img src={backbutton} alt="" srcset="" /></a>
            </div>
            <div className="success-confram  faq-color-C3EEFE">
                <div className="details">
                    <h2>Payment is successfully done</h2>
                    <img src={successimg} alt="" srcset="" />
                    <p>
                        Thank you! We’ve received your payment of ₹<b>1,920.00</b>  for the skill-building course, and the reference number is xxxxxx. We’ve sent the payment confirmation information and invoice to your email address and sent the payment confirmation in an SMS. Once the program is launched, we’ll send you an invitation to join the platform.
                    </p>
                    <a className="openpopup">Let your friends know about the program! </a>
                </div>
            </div>

            {/* Popup */}

            <div className="popup">
                <div className="invite">
                    <div className="pop-head">
                        Invite your friends
                    </div>
                    <div className="addtextboxs">
                        {renderInvite()}
                        {/* <div className="addfrnds">
                            <span className="listnum"><span>1</span></span>
                            <div className="textbox">
                                <input type="text" className="form-control" placeholder="Full Name" />
                            </div>
                            <div className="textbox ">
                                <input type="email" className="form-control" placeholder="Email Address" />
                            </div>
                            <div className="textbox">
                                <div className="input-group mb-3">
                                    <span className="input-group-text " style={{ backgroundColor: "#0079A4", color: "#fff" }} id="basic-addon1">+91</span>
                                    <input type="text" className="form-control" placeholder="Mobile Number" />
                                </div>
                            </div>
                            <span className="addornot"><i className="fa fa-check" aria-hidden="true"></i></span>
                        </div>


                        <div className="addfrnds">
                            <span className="listnum"><span>2</span></span>
                            <div className="textbox">
                                <input type="text" className="form-control" placeholder="Full Name" />
                            </div>
                            <div className="textbox ">
                                <input type="email" className="form-control" placeholder="Email Address" />
                            </div>
                            <div className="textbox">
                                <div className="input-group mb-3">
                                    <span className="input-group-text " style={{ backgroundColor: "#0079A4", color: "#fff" }} id="basic-addon1">+91</span>
                                    <input type="text" className="form-control" placeholder="Mobile Number" />
                                </div>
                            </div>
                            <span className="addornot"><i className="fa fa-times" aria-hidden="true"></i></span>
                        </div>
                        <div className="addfrnds">
                            <span className="listnum"><span>3</span></span>
                            <div className="textbox">
                                <input type="text" className="form-control" placeholder="Full Name" />
                            </div>
                            <div className="textbox ">
                                <input type="email" className="form-control" placeholder="Email Address" />
                            </div>
                            <div className="textbox">
                                <div className="input-group mb-3">
                                    <span className="input-group-text " style={{ backgroundColor: "#0079A4", color: "#fff" }} id="basic-addon1">+91</span>
                                    <input type="text" className="form-control" placeholder="Mobile Number" />
                                </div>
                            </div>
                            <span className="addornot"><i className="fa fa-times" aria-hidden="true"></i></span>
                        </div>
                        <div className="addfrnds">
                            <span className="listnum"><span>4</span></span>
                            <div className="textbox">
                                <input type="text" className="form-control" placeholder="Full Name" />
                            </div>
                            <div className="textbox ">
                                <input type="email" className="form-control" placeholder="Email Address" />
                            </div>
                            <div className="textbox">
                                <div className="input-group mb-3">
                                    <span className="input-group-text " style={{ backgroundColor: "#0079A4", color: "#fff" }} id="basic-addon1">+91</span>
                                    <input type="text" className="form-control" placeholder="Mobile Number" />
                                </div>
                            </div>
                            <span className="addornot"><i className="fa fa-times" aria-hidden="true"></i></span>
                        </div>
                        <div className="addfrnds">
                            <span className="listnum"><span>5</span></span>
                            <div className="textbox">
                                <input type="text" className="form-control" placeholder="Full Name" />
                            </div>
                            <div className="textbox ">
                                <input type="email" className="form-control" placeholder="Email Address" />
                            </div>
                            <div className="textbox">
                                <div className="input-group mb-3">
                                    <span className="input-group-text " style={{ backgroundColor: "#0079A4", color: "#fff" }} id="basic-addon1">+91</span>
                                    <input type="text" className="form-control" placeholder="Mobile Number" />
                                </div>
                            </div>
                            <span className="addornot"><i className="fa fa-times" aria-hidden="true"></i></span>
                        </div> */}
                        <div className="additems">
                            <span style={{cursor:'pointer'}} onClick={()=>addinvite()}>+ Add friend</span>
                        </div>
                        <div className="addbtns">
                            <a href="/Invitationsuccess" className="Invitesuccess"> Invite</a><a className="Invitecancel"> Cancel</a>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
};

export default Success;
