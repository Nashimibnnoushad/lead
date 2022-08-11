import '../css/index.css'
import '../css/form.css'
import '../css/confo.css'
import '../js/index.js'


export const RegistrationForm = (props) => {
    console.log(props,'props')
    return (
        <>
            <div className="formdata color-C3EEFE">

                <div className="frm-head">
                    <h2>Registration Form</h2>
                </div>
                <div className="formcontents">
                    <form action="https://test.payu.in/_payment" method="post">
                        <div className="mb-3">
                            <label className="form-label">Full Name <span>*</span></label>
                            <input type="text" className="form-control " id="exampleFormControlInput1" placeholder="Example “Rohan Kumar”" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Gender<span>*</span></label><br />
                            <div className="row">
                                <div className="col-6">
                                    <div className="radiobtn-form">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                            <label className="form-check-label mx-3" for="flexRadioDefault2" >
                                                Male
                                            </label>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="radiobtn-form">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                            <label className="form-check-label mx-3" for="flexRadioDefault2" >
                                                Female                         </label>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email<span>*</span></label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Example “Rohan@mail.com”" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Mobile <span>*</span></label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Example “9800012345”" />
                        </div>


                        <div className="mb-3">
                            <label className="form-label">Address 1<span>*</span></label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="House numnber, Street number, Apartment" />
                        </div>


                        <div className="mb-3">
                            <label className="form-label">Address 2</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Area, Landmark" />
                        </div>


                        <div className="mb-3">
                            <label className="form-label">City/Town/Village<span>*</span></label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Example “Gowdavalli" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">District <span>*</span></label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Please select...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">PIN Code <span>*</span></label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Example “501401”" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Choose Highest Qualification<span>*</span></label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Please select...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>          </div>
                        <div className="mb-3">
                            <label className="form-label">Choose any one Program from below<span>*</span></label><br />
                            <div className="radiobtn-form">
                                <div className="form-check  ">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                    <label className="form-check-label mx-3" >
                                        Entrepreneurship Program
                                    </label>
                                </div>

                            </div>
                            <div className="radiobtn-form">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                    <label className="form-check-label mx-3"  >
                                        Skilling Program
                                    </label>
                                </div>

                            </div>


                        </div>

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
                        <div className="btns">
                            <p><b> Pay only Rs. 1920</b> (Course fee Rs. 1627 + Gst 18% Rs. 293)</p>
                            <button type="submit" className="btn-data">
                                i’m interested pay now!
                            </button>

                            <div className="redirectogin">
                                Already registered? <a href="./index.html" className="tosignin">  Sign In</a>
                            </div>
                        </div>

                        {/* Hidden Datas for API */}
                        <input type="hidden" name="key" value="DTOAGA" size="15" />
                        <input type="hidden" name="txnid" size="15" value="u9eSkm1365YoLP" required />
                        <input type="hidden" name="amount" size="15" value="10.00" required />
                        <input type="hidden" name="productinfo" size="15" value="iPhone" required />
                        <input type="hidden" name="firstname" size="15" value="PayU User" required />
                        <input type="hidden" name="email" size="15" value="test@gmail.com" required />
                        <input type="hidden" name="phone" size="15" value="9876543210" required />
                        <input type="hidden" name="surl" size="15" value="https://apiplayground-response.herokuapp.com/" required />
                        <input type="hidden" name="furl" size="15" value="https://apiplayground-response.herokuapp.com/" required />
                        <input type="hidden" name="hash" size="15" value="3ac8416ba5deb3f534b03b21841802a453404d914175544da6daaa32491f045b439715a53abca76ed291b414caf146c79d8655f9c4a75259d3dbbc9e011024db" required />
                    </form>
                </div>
            </div>
        </>
    );
};
