import '../css/index.css'
import '../js/index.js'
import plus from '../image/plus.png'
import minus from '../image/minus.png'

export const RegistrationFAQ = (props) => {
  return (
    <>
      <div className="faq my-5">
        <div className="container">
          <h2>FAQ</h2>
          <div className="faqlist faq-color-C3EEFE">
            <div className="faqhead">
              <div className="row">
                <div className="col-10">
                  <p>What is the refund policy?</p>
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
          </div>
        </div>
      </div>
    </>
  );
};
