import React, { useState, useEffect } from 'react'
import '../css/index.css'
import '../js/index.js'
import plus from '../image/plus.png'
import minus from '../image/minus.png'
import axios from 'axios';

export const FAQ = (props) => {
  const [faqList, setfaqList] = useState([])

  useEffect(() => {
    var lang
    const languageval = JSON.parse(localStorage.getItem("language"));
    if (languageval !== null) {
      lang = languageval
    }
    else {
      lang = 1
    }
    const headers = {
      'ApiKey': '1f94878b-8e91-449c-8942-9df195581f16',
    }
    axios.get(`https://leadappdev-api.azurewebsites.net/api/UserRegistration/GetAllFaqs?pageno=1&languageid=${lang}`, { headers: headers })
      .then((response) => {
        console.log(response, 'faq response')
        setfaqList(response.data)
      })
  }, []);

  return (
    <>
      <div className="faq my-5">
        <div className="container">
          <h2>FAQ</h2>

          {faqList.map((value, index) => 
            <div className="faqlist faq-color-C3EEFE">
            <div className="faqhead">
              <div className="row">
                <div className="col-10">
                  <p>{value.faqQuestion}</p>
                </div>
                <div className="col-2 text-end">
                  <span className="plus">
                    <img src={plus} alt="" srcset="" />
                  </span>
                  <span className="minus">
                    <img src={minus} alt="" srcset="" />
                  </span>
                </div>
              </div>
            </div>
            <div className="faqdetails">
              <p>{value.faqAnswer}</p>
            </div>
          </div>
          )}
          {/* <div className="faqlist faq-color-C3EEFE">
            <div className="faqhead">
              <div className="row">
                <div className="col-10">
                  <p>Can I enroll in both courses?</p>
                </div>
                <div className="col-2 text-end">
                  <span className="plus">
                    <img src={plus} alt="" srcset="" />
                  </span>
                  <span className="minus">
                    <img src={minus} alt="" srcset="" />
                  </span>
                </div>
              </div>
            </div>
            <div className="faqdetails">
              <p>content</p>
            </div>
          </div>
          <div className="faqlist faq-color-C3EEFE">
            <div className="faqhead">
              <div className="row">
                <div className="col-10">
                  <p>The courses will be online or offline or blended?</p>
                </div>
                <div className="col-2 text-end">
                  <span className="plus">
                    <img src={plus} alt="" srcset="" />
                  </span>
                  <span className="minus">
                    <img src={minus} alt="" srcset="" />
                  </span>
                </div>
              </div>
            </div>
            <div className="faqdetails">
              <p>content</p>
            </div>
          </div>
          <div className="faqlist faq-color-C3EEFE">
            <div className="faqhead">
              <div className="row">
                <div className="col-10">
                  <p>What is Entrepreneurship Program?</p>
                </div>
                <div className="col-2 text-end">
                  <span className="plus">
                    <img src={plus} alt="" srcset="" />
                  </span>
                  <span className="minus">
                    <img src={minus} alt="" srcset="" />
                  </span>
                </div>
              </div>
            </div>
            <div className="faqdetails">
              <p>content</p>
            </div>
          </div>
          <div className="faqlist faq-color-C3EEFE">
            <div className="faqhead">
              <div className="row">
                <div className="col-10">
                  <p>Why start a career in Entrepreneurship Program?</p>
                </div>
                <div className="col-2 text-end">
                  <span className="plus">
                    <img src={plus} alt="" srcset="" />
                  </span>
                  <span className="minus">
                    <img src={minus} alt="" srcset="" />
                  </span>
                </div>
              </div>
            </div>
            <div className="faqdetails">
              <p>content</p>
            </div>
          </div>
          <div className="faqlist faq-color-C3EEFE">
            <div className="faqhead">
              <div className="row">
                <div className="col-10">
                  <p>What background knowledge is necessary?</p>
                </div>
                <div className="col-2 text-end">
                  <span className="plus">
                    <img src={plus} alt="" srcset="" />
                  </span>
                  <span className="minus">
                    <img src={minus} alt="" srcset="" />
                  </span>
                </div>
              </div>
            </div>
            <div className="faqdetails">
              <p>content</p>
            </div>
          </div> */}

        </div>
      </div>
    </>
  );
};
