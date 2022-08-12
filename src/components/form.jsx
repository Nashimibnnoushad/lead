import React, { useState, useEffect } from 'react'
import '../css/index.css'
import '../css/form.css'
import '../css/confo.css'
import '../js/index.js'
import './style.css'
import axios from 'axios';
import { sha512 } from 'js-sha512';

export const RegistrationForm = (props) => {
    const [fullname, setFullname] = useState('')
    const [gender, setGender] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [address1, setAddress1] = useState('')
    const [address2, setAddress2] = useState('')
    const [city, setCity] = useState('')
    const [districtArray, setdistrictArray] = useState([])
    const [district, setDistrict] = useState('')
    const [pincode, setPincode] = useState('')
    const [highestqualification, setHighestQualification] = useState('')
    const [qualificationArray, setqualificationArray] = useState([])
    const [program, setProgram] = useState('')
    const [paybuttonEnable, setpaybuttonEnable] = useState(false)
    const [registerbuttonEnable, setregisterbuttonEnable] = useState(false)
    const [fullnameError, setfullnameError] = useState(false)
    const [genderError, setgenderError] = useState(false)
    const [emailError, setemailError] = useState(false)
    const [mobileError, setmobileError] = useState(false)
    const [address1Error, setaddress1Error] = useState(false)
    const [cityError, setcityError] = useState(false)
    const [districtError, setdistrictError] = useState(false)
    const [pincodeError, setpincodeError] = useState(false)
    const [highestqualificationError, sethighestqualificationError] = useState(false)


    useEffect(() => {
        if (districtArray.length === 0) {
            getDistrict()
        }
        if (qualificationArray.length === 0) {
            getQualification()
        }
        enableRegister()

    });

    const getDistrict = () => {
        const program = localStorage.getItem("program");
        if (program === null) {
            setProgram('Entrepreneurship Program')
        }
        else {
            setProgram(program)
        }
        const headers = {
            'ApiKey': '1f94878b-8e91-449c-8942-9df195581f16',
        }
        axios.get(`https://leadappdev-api.azurewebsites.net/api/UserRegistration/GetAllDistricts`, { headers: headers })
            .then((response) => {
                console.log(response, 'response')
                setdistrictArray(response.data)

            })
    }

    const getQualification = () => {
        const headers = {
            'ApiKey': '1f94878b-8e91-449c-8942-9df195581f16',
        }
        axios.get(`https://leadappdev-api.azurewebsites.net/api/UserRegistration/GetAllHighestQua`, { headers: headers })
            .then((response) => {
                console.log(response, 'response')
                setqualificationArray(response.data)
            })
    }

    const fullnameChange = (value) => {
        setFullname(value)
        if (value === '') {
            setfullnameError(true)
        }
        else {
            setfullnameError(false)
        }
    }

    const genderChange = (value) => {
        setGender(value)
        if (value === '') {
            setgenderError(true)
        }
        else {
            setgenderError(false)
        }
    }

    const emailChange = (value) => {
        setEmail(value)
        if (value === '') {
            setemailError(true)
        }
        else {
            var decimal = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
            if (decimal.test(value)) {
                setemailError(false)
            }
            else {
                setemailError(true)
            }
        }
    }

    const mobileChange = (value) => {
        setMobile(value)
        if (value === '') {
            setmobileError(true)
        }
        else {
            if (value.length === 10) {
                setmobileError(false)
            }
            else {
                setmobileError(true)
            }
        }
    }

    const address1Change = (value) => {
        setAddress1(value)
        if (value === '') {
            setaddress1Error(true)
        }
        else {
            setaddress1Error(false)
        }
    }

    const cityChange = (value) => {
        setCity(value)
        if (value === '') {
            setcityError(true)
        }
        else {
            setcityError(false)
        }
    }

    const districtChange = (value) => {
        setDistrict(value)
        if (value === '') {
            setdistrictError(true)
        }
        else {
            setdistrictError(false)
        }
    }

    const pincodeChange = (value) => {
        setPincode(value)
        if (value === '') {
            setpincodeError(true)
        }
        else {
            if (value.length === 6) {
                setpincodeError(false)
            }
            else {
                setpincodeError(true)
            }
        }
    }

    const highestqualificationChange = (value) => {
        setHighestQualification(value)
        if (value === '') {
            sethighestqualificationError(true)
        }
        else {
            sethighestqualificationError(false)
        }
    }

    const enableRegister = () => {
        if (fullname === '' || gender === '' || email === '' || mobile === '' || address1 === ''
            || city === '' || district === '' || pincode === '' || highestqualification === '') {
            setregisterbuttonEnable(false)
        }
        else if (fullname === null || gender === null || email === null || mobile === null || address1 === null
            || city === null || district === null || pincode === null || highestqualification === null) {
            setregisterbuttonEnable(false)
        }
        else if (fullnameError === true || genderError === true || emailError === true || mobileError === true || address1Error === true
            || cityError === true || districtError === true || pincodeError === true || highestqualificationError === true) {
            setregisterbuttonEnable(false)
        }
        else {
            setregisterbuttonEnable(true)
        }

    }

    const register = () => {
        // checking email and phone number
        const headers = {
            'ApiKey': '1f94878b-8e91-449c-8942-9df195581f16',
        }
        axios.get(`https://leadappdev-api.azurewebsites.net/api/UserRegistration/EmailPhValidation?email=${email}&Ph=${mobile}`, { headers: headers })
            .then((response) => {
                console.log(response, 'response')
                if(response.data.MSG ===  "NOT EXIST"){
                    let data = {
                        "fullname": fullname,
                        "gender": gender,
                        "email": email,
                        "phone": mobile,
                        "address1": address1,
                        "address2": address2,
                        "cityTownVillage": city,
                        "district": district,
                        "pincode": pincode,
                        "highestQua": highestqualification,
                        "language": "English",
                        "programType": program
                    }
                    const headers = {
                        'ApiKey': '1f94878b-8e91-449c-8942-9df195581f16',
                    }
                    axios.post(`https://leadappdev-api.azurewebsites.net/api/UserRegistration/AddUser`, data, { headers: headers })
                        .then((response) => {
                            console.log(response, 'response')
                        })
                }
            })

    }



    var hashdata = sha512('DTOAGA|u9eSkm1365YoLP|10.00|iPhone|PayU User|test@gmail.com|||||||||||gfSJyPzFkBAr0ATzFgLa7nwb9kQoZjK7')

    return (
        <>
            <div className="formdata color-C3EEFE">

                <div className="frm-head">
                    <h2>Registration Form</h2>
                </div>
                <div className="formcontents">
                    <div className="mb-3">
                        <label className="form-label">Full Name <span>*</span></label>
                        <input type="text" className={fullnameError ? 'error-form-control form-control' : 'form-control'} value={fullname}
                            onClick={(e) => fullnameChange(fullname)} onChange={(e) => fullnameChange(e.target.value)} id="exampleFormControlInput1" placeholder="Example “Rohan Kumar”" />
                        {fullnameError &&
                            <span className='error-message'>Please enter fullname</span>
                        }
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Gender<span>*</span></label><br />
                        <select className={genderError ? 'error-form-select form-select' : 'form-select'}
                            value={gender} onClick={(e) => genderChange(gender)} onChange={(e) => genderChange(e.target.value)} aria-label="Default select example">
                            <option selected value=''>Please select...</option>
                            <option selected value='Male'>Male</option>
                            <option selected value='Female'>Female</option>
                        </select>
                        {genderError &&
                            <span className='error-message'>Please select gender</span>
                        }
                        {/* <div className="row">
                                <div className="col-6">
                                    <div className="radiobtn-form">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" value={gender} onChange={()=>setGender('Male')} name="genderselected" id="genderselected" checked/>
                                            <label className="form-check-label mx-3" for="flexRadioDefault2" >
                                                Male
                                            </label>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="radiobtn-form">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" value={gender} onChange={()=>setGender('Female')} name="genderselected" id="genderselected"  />
                                            <label className="form-check-label mx-3" for="flexRadioDefault2" >
                                                Female</label>
                                        </div>

                                    </div>
                                </div>

                            </div> */}

                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email<span>*</span></label>
                        <input type="email" className={emailError ? 'error-form-control form-control' : 'form-control'} value={email}
                            onClick={(e) => emailChange(email)} onChange={(e) => emailChange(e.target.value)} id="exampleFormControlInput1" placeholder="Example “Rohan@mail.com”" />
                        {emailError &&
                            <span className='error-message'>Please enter valid email</span>
                        }
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Mobile <span>*</span></label>
                        <input type="number" className={mobileError ? 'error-form-control form-control' : 'form-control'} value={mobile}
                            onClick={() => mobileChange(mobile)} onChange={(e) => mobileChange(e.target.value)} id="exampleFormControlInput1" placeholder="Example “9800012345”" />
                        {mobileError &&
                            <span className='error-message'>Please enter valid mobile number</span>
                        }
                    </div>


                    <div className="mb-3">
                        <label className="form-label">Address 1<span>*</span></label>
                        <input type="text" className={address1Error ? 'error-form-control form-control' : 'form-control'} value={address1}
                            onClick={() => address1Change(address1)} onChange={(e) => address1Change(e.target.value)} id="exampleFormControlInput1" placeholder="House numnber, Street number, Apartment" />
                        {address1Error &&
                            <span className='error-message'>Please enter address1</span>
                        }
                    </div>


                    <div className="mb-3">
                        <label className="form-label">Address 2</label>
                        <input type="text" className="form-control" value={address2} onChange={(e) => setAddress2(e.target.value)} id="exampleFormControlInput1" placeholder="Area, Landmark" />
                    </div>


                    <div className="mb-3">
                        <label className="form-label">City/Town/Village<span>*</span></label>
                        <input type="text" className={cityError ? 'error-form-control form-control' : 'form-control'} value={city}
                            onClick={() => cityChange(city)} onChange={(e) => cityChange(e.target.value)} id="exampleFormControlInput1" placeholder="Example “Gowdavalli" />
                        {cityError &&
                            <span className='error-message'>Please enter city</span>
                        }
                    </div>
                    <div className="mb-3">
                        <label className="form-label">District <span>*</span></label>
                        <select className={districtError ? 'error-form-select form-select' : 'form-select'} value={district}
                            onClick={() => districtChange(district)} onChange={(e) => districtChange(e.target.value)} aria-label="Default select example">
                            <option selected value=''>Please select...</option>
                            {districtArray.map((value, index) => <option key={value.id} value={value.district}>{value.district}</option>)}
                        </select>
                        {districtError &&
                            <span className='error-message'>Please select district</span>
                        }
                    </div>
                    <div className="mb-3">
                        <label className="form-label">PIN Code <span>*</span></label>
                        <input type="number" className={pincodeError ? 'error-form-control form-control' : 'form-control'} value={pincode}
                            onClick={() => pincodeChange(pincode)} onChange={(e) => pincodeChange(e.target.value)} id="exampleFormControlInput1" placeholder="Example “501401”" />
                        {pincodeError &&
                            <span className='error-message'>Please enter a valid pincode</span>
                        }
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Choose Highest Qualification<span>*</span></label>
                        <select className={highestqualificationError ? 'error-form-select form-select' : 'form-select'} value={highestqualification}
                            onClick={() => highestqualificationChange(highestqualification)} onChange={(e) => highestqualificationChange(e.target.value)} aria-label="Default select example">
                            <option selected value=''>Please select...</option>
                            {qualificationArray.map((value, index) => <option key={value.id} value={value.highestQua}>{value.highestQua}</option>)}
                        </select>
                        {highestqualificationError &&
                            <span className='error-message'>Please select Highest Qualification</span>
                        }
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Choose any one Program from below<span>*</span></label><br />
                        <div className="radiobtn-form">
                            <div className="form-check  ">
                                <input className="form-check-input" type="radio" value={program} onChange={(e) => setProgram('Entrepreneurship Program')} name="flexRadioDefault" id="flexRadioDefault2"
                                    checked={program === 'Entrepreneurship Program' ? true : false} />
                                <label className="form-check-label mx-3" >
                                    Entrepreneurship Program
                                </label>
                            </div>

                        </div>
                        <div className="radiobtn-form">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" value={program} onChange={(e) => setProgram('Skilling Program')} name="flexRadioDefault" id="flexRadioDefault2"
                                    checked={program === 'Skilling Program' ? true : false} />
                                <label className="form-check-label mx-3"  >
                                    Skilling Program
                                </label>
                            </div>

                        </div>


                    </div>
                    {program === 'Entrepreneurship Program' &&
                        <div className="ordersummery">
                            <div className="summeryhead mb-4">
                                Order Summary
                            </div>
                            <div className="tittle-summery">
                                <div className="summeryitem">Program item</div>  <div className="summeryprice">Cost</div>
                            </div>
                            <div className="details-summery">
                                <div>
                                    <span className="summeryitem">Entrepreneurship Program (For 1 year from the date
                                        of Sign Up)</span>  <span className="summeryprice"> <i className="fa fa-inr" aria-hidden="true"></i>
                                        1,627.00</span>
                                </div>
                                <div>
                                    <span className="summeryitem">18% GST</span>  <span className="summeryprice"> <i className="fa fa-inr" aria-hidden="true"></i>
                                        293.00</span>
                                </div>

                            </div>
                            <div className="total-summary">
                                <span className="summeryitem" >Total </span>  <span className="summeryprice"> <i className="fa fa-inr" aria-hidden="true"></i>
                                    1920.00</span>
                            </div>
                        </div>
                    }
                    {program === 'Skilling Program' &&
                        <div className="ordersummery">
                            <div className="summeryhead mb-4">
                                Order Summary
                            </div>
                            <div className="tittle-summery">
                                <div className="summeryitem">Program item</div>  <div className="summeryprice">Cost</div>
                            </div>
                            <div className="details-summery">
                                <div>
                                    <span className="summeryitem">Skillling program (For 1 year from the date
                                        of Sign Up)</span>  <span className="summeryprice"> <i className="fa fa-inr" aria-hidden="true"></i>
                                        1,627.00</span>
                                </div>
                                <div>
                                    <span className="summeryitem">18% GST</span>  <span className="summeryprice"> <i className="fa fa-inr" aria-hidden="true"></i>
                                        293.00</span>
                                </div>

                            </div>
                            <div className="total-summary">
                                <span className="summeryitem" >Total </span>  <span className="summeryprice"> <i className="fa fa-inr" aria-hidden="true"></i>
                                    1920.00</span>
                            </div>
                        </div>
                    }
                    <div className="btns">
                        <p><b> Pay only Rs. 1920</b> (Course fee Rs. 1627 + Gst 18% Rs. 293)</p>
                        <button className={registerbuttonEnable === false ? 'disabled-btn-data' : 'btn-data'} 
                        disabled={registerbuttonEnable === false ? true : false} style={{ marginBottom: '10px' }}
                        onClick={()=>register()}>
                            Register
                        </button>
                        {/* Hidden Datas for API */}
                        <form action="https://test.payu.in/_payment" method="post">                            
                            <input type="hidden" name="key" value="DTOAGA" size="15" />
                            <input type="hidden" name="txnid" size="15" value="u9eSkm1365YoLP" required />
                            <input type="hidden" name="amount" size="15" value="10.00" required />
                            <input type="hidden" name="productinfo" size="15" value="iPhone" required />
                            <input type="hidden" name="firstname" size="15" value="PayU User" required />
                            <input type="hidden" name="email" size="15" value="test@gmail.com" required />
                            <input type="hidden" name="phone" size="15" value="9876543210" required />
                            <input type="hidden" name="surl" size="15" value="https://apiplayground-response.herokuapp.com/" required />
                            <input type="hidden" name="furl" size="15" value="https://apiplayground-response.herokuapp.com/" required />
                            <input type="hidden" name="hash" size="15" value={hashdata} required />
                            <button type="submit" className={paybuttonEnable === false ? 'disabled-btn-data' : 'btn-data'} disabled={paybuttonEnable === false ? true : false}>
                            i’m interested pay now!
                        </button>
                        </form>

                        <div className="redirectogin">
                            Already registered? <a href="./index.html" className="tosignin">  Sign In</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
