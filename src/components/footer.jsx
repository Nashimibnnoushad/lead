import '../css/index.css'
import '../js/index.js'
import privacy from '../image/privacy.png'
import mediaicon from '../image/mediaicon.png'
import help from '../image/help.png'
import call from '../image/call.png'
import mail from '../image/mail.png'
import twitter from '../image/twitter.png'
import fb from '../image/fb.png'
import linkedin from '../image/in.png'
import insta from '../image/insta.png'
import youtube from '../image/youtube.png'
import configData from "../config.json"

export const Footer = (props) => {
    return (
        <>
            <footer className="color-C3EEFE footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mb-5">
                            <h3>The Program</h3>
                            <a className='footerlink' style={{textIndent:'3px'}} href='/Privacypolicy'>
                                <p>
                                    <img src={privacy} className="icons" alt="" srcset="" />  Privacy Policy
                                </p> </a>
                            <a className='footerlink' style={{textIndent:'3px'}} href='/Refundpolicy'>
                                <p>
                                    <i className="fa fa-refresh icons" aria-hidden="true"></i> Refund Policy
                                </p>
                            </a>
                            <p style={{textIndent:'3px'}}><img src={mediaicon}  className="icons" alt="" srcset="" />  Media Center</p>
                            <p style={{textIndent:'3px'}}><img src={help}  className="icons" alt="" srcset="" /> Help Center</p>

                        </div>
                        <div className="col-md-5  mb-5">
                            <h3>Contact Us</h3>
                            <div> </div>
                            <p style={{textIndent:'3px'}}>
                                <a className='footerlink' href={`tel:${configData.FOOTER_CONTACT}`}>
                                    <img src={call} className="icons" alt="" srcset="" />
                                    {configData.FOOTER_CONTACT}
                                </a>
                                <br />
                                <span style={{ paddingLeft: "35px" }}>(9am to 6 pm, Monday to Friday) </span></p>
                            <p style={{textIndent:'3px'}}>
                                <a className='footerlink' href={`mailto:${configData.FOOTER_MAIL}`}>
                                    <img src={mail} className="icons" alt="" srcset="" /> Write to us at {configData.FOOTER_MAIL}
                                </a>
                            </p>
                        </div>
                        <div className="col-md-3  mb-5">
                            <h3> Follow Us</h3>
                            <img src={twitter} alt="" className="socialmedia" srcset="" />
                            <img src={fb} alt="" className="socialmedia" srcset="" />
                            <img src={linkedin} alt="" className="socialmedia" srcset="" />
                            <img src={insta} alt="" className="socialmedia" srcset="" />
                            <img src={youtube} alt="" className="socialmedia" srcset="" />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
