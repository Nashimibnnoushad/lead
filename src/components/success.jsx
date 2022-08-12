import "../App.css";
import '../css/index.css'
import '../css/form.css'
import '../css/confo.css'
import '../js/index.js'
import './style.css'
import successimg from '../image/success.png'
import backbutton from '../image/backbutton.png'
import React, { useState, useEffect } from 'react'

const Success = () => {

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
                        <div className="addfrnds">
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
                        </div>
                        <div className="additems">
                            <span>+ Add friend</span>
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
