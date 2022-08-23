import React from 'react';
import axios from 'axios';
import "../App.css";
import '../css/index.css'
import '../css/form.css'
import '../css/confo.css'
import '../js/index.js'
import './style.css'
import successimg from '../image/success.png'
import backbutton from '../image/backbutton.png'


class RegSuccess extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userdata: {
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
            },
            invitenumber: 5,
            invitearray: []
        }
    }

    componentDidMount() {
        const user = JSON.parse(localStorage.getItem("leaduservalue"));
        if (user !== null) {
            this.setState({ userdata: user })
        }
        var temparr = []
        for (let i = 0; i < this.state.invitenumber; i++) {
            let data = {
                'name': '',
                'email': '',
                'phone': ''
            }
            temparr.push(data)
        }
        this.setState({ invitearray: temparr })
    }

    renderInvite = () => {
        var invarr = []
        for (let i = 0; i < this.state.invitearray.length; i++) {
            invarr.push(
                <div className="addfrnds">
                    <span className="listnum"><span>{i + 1}</span></span>
                    <div className="textbox">
                        <input type="text" className="form-control" placeholder="Full Name"
                            value={this.state.invitearray[i].name}
                            onChange={(e) => this.setinvitevalue(e.target.value, i, 'name')}
                        />
                    </div>
                    <div className="textbox ">
                        <input type="email" className="form-control" placeholder="Email Address"
                            value={this.state.invitearray[i].email}
                            onChange={(e) => this.setinvitevalue(e.target.value, i, 'email')}
                        />
                    </div>
                    <div className="textbox">
                        <div className="input-group mb-3">
                            <span className="input-group-text " style={{ backgroundColor: "#0079A4", color: "#fff" }} id="basic-addon1">+91</span>
                            <input type="text" className="form-control" placeholder="Mobile Number"
                                value={this.state.invitearray[i].phone}
                                onChange={(e) => this.setinvitevalue(e.target.value, i, 'phone')}
                            />
                        </div>
                    </div>
                    {i === 0 &&
                        <span className="addornot"><i className="fa fa-check" aria-hidden="true"></i></span>
                    }
                    {i !== 0 &&
                        <span className="addornot">
                            <i className="fa fa-times" style={{ cursor: 'pointer' }} onClick={() => this.removeinvite(i)} aria-hidden="true"></i>
                        </span>
                    }
                </div>
            )
        }
        return invarr
    }

    setinvitevalue = (value, index, param) => {
        var temparr = this.state.invitearray
        for (let i = 0; i < temparr.length; i++) {
            if (i === index) {
                if (param === 'name') {
                    temparr[i].name = value
                }
                else if (param === 'email') {
                    temparr[i].email = value
                }
                else {
                    temparr[i].phone = value
                }
            }
        }
        this.setState({ invitearray: temparr })
    }

    addinvite = () => {
        var temparr = this.state.invitearray
        var newinvite = {
            'name': '',
            'email': '',
            'phone': ''
        }
        temparr.push(newinvite)
        this.setState({ invitearray: temparr })
    }

    removeinvite = (index) => {
        var temparr = this.state.invitearray
        temparr.splice(index, 1)
        this.setState({ invitearray: temparr })
    }

    register = () => {
        let data = {
            "fullname": this.state.userdata.fullname,
            "gender": this.state.userdata.gender,
            "email": this.state.userdata.email,
            "phone": this.state.userdata.mobile,
            "address1": this.state.userdata.address1,
            "address2": this.state.userdata.address2,
            "cityTownVillage": this.state.userdata.cityTownVillage,
            "district": this.state.userdata.district,
            "pincode": this.state.userdata.pincode,
            "highestQua": this.state.userdata.highestQua,
            "language": this.state.userdata.language,
            "programType": this.state.userdata.programType
        }
        const headers = {
            'ApiKey': '1f94878b-8e91-449c-8942-9df195581f16',
        }
        axios.post(`https://leadappdev-api.azurewebsites.net/api/UserRegistration/AddUser`, data, { headers: headers })
            .then((response) => {
                console.log(response, 'response')
            })

    }

    inviteFriends = () => {
        console.log(this.state.invitearray,'invited array details')
    }

    render() {
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
                            {this.renderInvite()}
                            <div className="additems">
                                <span style={{ cursor: 'pointer' }} onClick={() => this.addinvite()}>+ Add friend</span>
                            </div>
                            <div className="addbtns">
                                <a onClick={()=>this.inviteFriends()} className="Invitesuccess"> Invite</a>
                                <a className="Invitecancel"> Cancel</a>
                            </div>
                        </div>

                    </div>

                </div>
            </>
        )
    }
}

export default RegSuccess