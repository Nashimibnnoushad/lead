import React, { useState } from 'react'
import '../css/index.css'
import '../js/index.js'
import sun from '../image/sun-svgrepo-com.svg'
import logo from '../image/Logo.png'
import user from '../image/user.png'
import { Link, Navigate } from 'react-router-dom';

export const Navigation = (props) => {

  const [colorMode, setColorMode] = useState(true)

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
                <a className="reg-button"  href='/Register' >Register</a>
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
              <a className="res-btn-reg"  href='/Register'>Register</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
