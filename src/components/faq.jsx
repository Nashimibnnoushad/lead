import React, { useState, useEffect } from 'react'
import '../css/index.css'
import '../js/index.js'
import plus from '../image/plus.png'
import minus from '../image/minus.png'
import axios from 'axios';
import PaginationComponent from 'react-reactstrap-pagination'
import "bootstrap/dist/css/bootstrap.min.css";

export const FAQ = (props) => {
  const [faqList, setfaqList] = useState([])
  const [activefaqList, setactivefaqList] = useState([])
  const [activeid, setactiveid] = useState(0)
  const [activepage, setactivepage] = useState(1)
  const [totalitems, settotalitems] = useState(0)

  useEffect(() => {
    setactiveid(0)
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
        console.log(response.data,response.data.length, 'faq response')
        setfaqList(response.data)
        settotalitems(response.data.length)
        if(response.data.length > 10){
          setcurrentfaqlist()
        }
        else{
          setactivefaqList(response.data)
        }
      })
  }, []);

  const setfaqid = (id) => {
    setactiveid(id)
  }

  const setcurrentfaqlist = () => {
    var newarr = []
    console.log(activepage,(activepage-1)*10,(activepage*10)-1,'page,start,end')
    for(let i=(activepage-1)*10;i<(activepage*10)-1;i++){
      if(faqList[i] !== undefined){
        newarr.push(faqList[i])
      }
    }
    setactivefaqList(newarr)
  }

  const handlePageChange = (selectedPage) => {
    console.log(selectedPage,'selected page')
    setactivepage(selectedPage)
    setcurrentfaqlist()
  }

  return (
    <>
      <div className="faq my-5" >
        <div className="container" style={{marginBottom:'5rem'}}>
          <h2>FAQ</h2>

          {activefaqList.map((value, index) =>
            <div key={index} className="faqlist faq-color-C3EEFE">
              <div className="faqhead">
                <div className="row">
                  <div className="col-10">
                    <p>{value.faqQuestion}</p>
                  </div>
                  <div className="col-2 text-end">
                    {activeid !== value.id &&
                      <span className="plus">
                        <img src={plus} alt="" srcset="" onClick={() => setfaqid(value.id)} />
                      </span>
                    }
                    {activeid === value.id &&
                      <span className="minus">
                        <img src={minus} alt="" srcset="" onClick={() => setfaqid(0)} />
                      </span>
                    }
                  </div>
                </div>
              </div>
              {activeid === value.id &&
                <div className="faqdetails">
                  <p>{value.faqAnswer}</p>
                </div>
              }
            </div>
          )}
          <div style={{float:'right'}}>
            <PaginationComponent
              totalItems={totalitems}
              pageSize={10}
              onSelect={handlePageChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};
