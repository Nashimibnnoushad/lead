import React, { useState, useEffect } from 'react'
import '../css/index.css'
import '../js/index.js'
import './style.css'
import sun from '../image/sun-svgrepo-com.svg'
import logo from '../image/Logo.png'
import user from '../image/user.png'
import { Link, Navigate } from 'react-router-dom';
import configData from "../config.json"
export const Navigation = (props) => {

  const [colorMode, setColorMode] = useState(true)
  const [language, setLanguage] = useState('1')

  useEffect(() => {
    const languageval = JSON.parse(localStorage.getItem("language"));
    if (languageval !== null) {
      setLanguage(languageval)
    }
  }, []);

  const languageChange = (value) => {
    setLanguage(value)
    localStorage.setItem("language", JSON.stringify(value))
    window.location.reload()
  }

  return (
    <>
      <div className="homenav">
        <div className="nav-bar nav-blue">
          <div className="container">
            <div className="row">
              <div className="col-2 " style={{ cursor: "pointer" }}>
                <div className="languagedropboxitem" >
                  <div className="languagedrophead " style={{ "padding": "0px 10px;", textTransform: 'capitalize' }}>
                    {language === '1' ? 'English' : 'తెలుగు'}  <i className="fa fa-chevron-down" aria-hidden="true"></i>
                  </div>
                  <div className="languagedropitems">
                    {configData.LANGUAGES.map((value, index) =>
                      <span key={index} className={language === value.id ? 'languagedrop-content selectedlanguage' : 'languagedrop-content'} onClick={() => languageChange(value.id)}>
                        {value.language} </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-10  text-end">
                <span className="mx-3" style={{ "display": "inline-block", cursor: "pointer" }}>
                  <a className='link' href={`mailto:${configData.NAVBAR_MAIL}`}>
                    <i className="fa fa-envelope mr-2" aria-hidden="true"></i>{configData.NAVBAR_MAIL}
                  </a>
                </span>
                <span className="mx-3" style={{ "display": "inline-block ", cursor: "pointer" }}>
                <a className='link' href={`tel:${configData.NAVBAR_CONTACT}`}>
                <i className="fa fa-phone mr-2" aria-hidden="true"></i>{configData.NAVBAR_CONTACT}
                </a>
                </span>
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
                <a className="reg-button" href='/Register' >Register</a>
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
          {configData.LANGUAGES.map((value, index) =>
            <div key={index} className="resp-item-child language" onClick={() => languageChange(value.id)}>
              {language === value.id &&
                <i className="fa fa-check" aria-hidden="true"></i>
              }
              {value.language}
            </div>
          )}
        </div>
        <div className="resp-item-list">
          <div className="hoveritem">
            Contact
          </div>
          <div className="resp-item-child">
            <a className='' href={`tel:${configData.NAVBAR_CONTACT}`}>{configData.NAVBAR_CONTACT}</a>
          </div>
          <div className="resp-item-child">
            <a className="tab " href={`mailto:${configData.NAVBAR_MAIL}`}>{configData.NAVBAR_MAIL}</a>
          </div>
        </div>
      </div>

      {/* responcive nav  */}
      <div className="resp-nav">
        <div className="res-nav-head">
          <div className="headeritemsresp" >  <img src={logo} alt="" srcset="" /></div>
          <div className="headeritemsresp text-center"  ><a href="#" className="btn-language">
            {language === '1' ? 'English' : 'తెలుగు'}
          </a></div>
          <div className="headeritemsresp text-end"  ><span className="navitemsresp "><i className="fa fa-bars sidebar" aria-hidden="true"></i></span></div>
        </div>
        <div className="regbutton">
          <div className="row">
            <div className="col-6">
              <a href="#" className="res-btn-sign"> <img src={user} alt="" srcset="" /> Sign In</a>
            </div>
            <div className="col-6">
              <a className="res-btn-reg" href='/Register'>Register</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
