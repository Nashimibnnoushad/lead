import React, { useState } from 'react'
import '../css/index.css'
import '../js/index.js'
import axios from 'axios';
import { sha512 } from 'js-sha512';
import sun from '../image/sun-svgrepo-com.svg'
import logo from '../image/Logo.png'
import user from '../image/user.png'
import { Link } from 'react-router-dom';

export const Navigation = (props) => {

  const [colorMode, setColorMode] = useState(true)

  const gotoRegister = () => {
    
  }

  const runApi = () => {
    var hashdata = sha512('DTOAGA|Lv14zk11rTBmqT|10.00|iPhone|PayU User|test@gmail.com|||||||||||gfSJyPzFkBAr0ATzFgLa7nwb9kQoZjK7')
    const formData = new FormData();
    formData.append('key', 'DTOAGA');
    formData.append('txnid', 'Lv14zk11rTBmqT');
    formData.append('amount', '10.00');
    formData.append('firstname', 'PayU User');
    formData.append('email', 'test@gmail.com');
    formData.append('phone', '9876543210');
    formData.append('productinfo', 'iPhone');
    formData.append('surl', 'https://apiplayground-response.herokuapp.com/');
    formData.append('furl', 'https://apiplayground-response.herokuapp.com/');
    formData.append('hash', '46fac96f57c6cd5429e1910f7046625dfd96671a284a6850e7b1e1d381279208efec4bdaaa13a2967869c286301a84c9ff3e107d39fd506191fb77611d8df935')
    // formData.append('hash', 'd3dbb13032154ebccf2e0ec76135b5206a4b6699e537e2408c9bff0e595d46ff1900325d49bbb07b1c07b6f7b3cb9b843e766ca8d73212560a1b32075e777594');
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
    axios.post(`https://test.payu.in/_payment`, formData, { headers: headers })
      .then((response) => {
        console.log(response, 'response')
      })

  }

  return (
    <>
      <div className="homenav">
        <div className="nav-bar nav-blue">
          <div className="container">
            <div className="row">
              <div className="col-2 " style={{ cursor: "pointer" }}>
                తెలుగు
              </div>
              <div className="col-10  text-end">
                <span className="mx-3" style={{ "display": "inline-block", cursor: "pointer" }}> <i className="fa fa-envelope mr-2" aria-hidden="true"></i>  happytohelp@.gov.in</span>
                <span className="mx-3" style={{ "display": "inline-block ", cursor: "pointer" }}>    <i className="fa fa-phone mr-2" aria-hidden="true"></i>   1800 0000 0000</span>
                <span className="mx-3" style={{ "display": "inline-block ", cursor: "pointer" }}>
                  <div className="dropboxitem" >
                    <div className="drophead " style={{ "padding": "0px 10px;" }}>
                      ACCESSIBILITY  <i className="fa fa-chevron-down" aria-hidden="true"></i>
                    </div>
                    <div className="dropitems">
                      <span className="drop-content">
                        <img src={sun} style={{ width: "22px", color: "#fff !important" }} alt="" srcset="" />
                        Colors </span>
                      <span className="drop-content"><i className="fa fa-circle" aria-hidden="true"></i>
                        Dark Mode</span>
                    </div>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="nav-header">
          <div className="container">
            <div className="row">
              <div className="col-5">
                <img src={logo} alt="" srcset="" />
              </div>
              <div className="col-7 text-end">
                <a href="http://" className="sig-button">Sign In</a>
                <Link className="reg-button" target="_blank" to={`/Register`}>Register</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sidenavbar">
        <div className="closebtn">
          <i className="fa fa-times" aria-hidden="true"></i>
        </div>
        <div className="resp-item-list">
          <div className="hoveritem">
            <a href="#">Sign In</a>
          </div>
        </div>
        <div className="resp-item-list">
          <div className="hoveritem">
            <span> Night mode</span>
            <div className="form-check form-switch" style={{ "display": "inline-block ;min-height: auto; margin: auto;" }}>
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked={colorMode}
                onChange={() => {
                  setColorMode(!colorMode)
                }} />
            </div>
          </div>
        </div>
        <div className="resp-item-list">
          <div className="hoveritem">
            <p>Language</p>
          </div>
          <div className="resp-item-child language">
            <i className="fa fa-check" aria-hidden="true"></i> English
          </div>
          <div className="resp-item-child language">
            తెలుగు
          </div>
        </div>
        <div className="resp-item-list">
          <div className="hoveritem">
            Contact
          </div>
          <div className="resp-item-child">
            <a href="tel:1800-1234-0000">1800-1234-0000</a>
          </div>
          <div className="resp-item-child">
            <a className="tab" href="mailto:Help-line@lead.com">Help-line@lead.com</a>
          </div>
        </div>
      </div>

      {/* responcive nav  */}
      <div className="resp-nav">
        <div className="res-nav-head">
          <div className="headeritemsresp" >  <img src={logo} alt="" srcset="" /></div>
          <div className="headeritemsresp text-center"  ><a href="#" className="btn-language">
            language
          </a></div>
          <div className="headeritemsresp text-end"  ><span className="navitemsresp "><i className="fa fa-bars sidebar" aria-hidden="true"></i></span></div>
        </div>
        <div className="regbutton">
          <div className="row">
            <div className="col-6">
              <a href="#" className="res-btn-sign"> <img src={user} alt="" srcset="" /> Sign In</a>
            </div>
            <div className="col-6">
              <a href="/form.html" className="res-btn-reg"> Regisiter</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
