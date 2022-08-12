import "../App.css";
import '../css/index.css'
import '../css/form.css'
import '../css/confo.css'
import '../js/index.js'
import './style.css'
import successimg from '../image/success.png'
import backbutton from '../image/backbutton.png'
import React, { useState, useEffect } from 'react'

const InvitationSuccess = () => {

    return (
        <>
            <div className="back-button">
                <a href="./Home"> <img src={backbutton} alt="" srcset="" /></a>
            </div>
            <div className="success-confram ">
                <div className="details">
                    <img src={successimg} alt="" srcset="" />
                    <p>
                        Successfully invited! Your friends are on the way!
                    </p>
                </div>
            </div>
        </>
    );
};

export default InvitationSuccess;
