import React, { useState, useEffect } from 'react'
import '../css/index.css'
import '../js/index.js'
import group from '../image/group.png'
import tabletop from '../image/tabletop.png'
import microsoft from '../image/microsoft.png'
import { Link } from 'react-router-dom';

export const Services = (props) => {

  useEffect(() => {
      localStorage.setItem("program", 'Entrepreneurship Program')
  });

  const setProgram = (value) => {
    localStorage.setItem("program", value)
  }

  return (
    <>
      <div  className="skil-view mt-5">
        <div  className="sliderscrool text-center">
          <div  className="selectitem">
            <span  className="slide slideractive slide-ent" onClick={()=>setProgram('Entrepreneurship Program')}>Entrepreneurship</span>
            <span  className="slide slide-skil" onClick={()=>setProgram('Skilling Program')}>Skilling</span>
          </div>
        </div>
        <div  className="Entrepreneurship enterpre color-0B546F">
          <div  className="container">
            <div  className="detail-ent">
              <h2 style={{color:'white'}}>Entrepreneurship Program, brought to you by TASK powered by Ed4All™ </h2>
              <ul>
                <li style={{marginTop: "1rem"}}> Looking to be your own Boss?
                </li>
                <li style={{marginTop: "1rem"}}> Do you have a Business Idea?
                </li>
                <li style={{marginTop: "1rem"}}> Are you looking for a platform to learn new skills to run a successful business?
                </li>
              </ul>
              <p style={{marginTop: "2rem"}}>You are at the right place at the right time!
              </p>
            </div>
            <div  className="btn-Entre mt-4">
              <p style={{marginTop: "3rem"}}>Interested? Pay only <b>Rs 1,920</b>  for Skills, Certifications worth <b> Rs 16,000!</b>
              </p>
              <a className="btn-sate"  href='/Register'>Register</a>
            </div>
          </div>
        </div>
        <div  className="Entrepreneurship skils  color-0B546F" style={{display: "none"}}>
          <div  className="container">
            <div  className="detail-ent">
              <h2 style={{color:'white'}}>Skilling Program, brought to you by TASK powered by Ed4All™</h2>
              <ul>
                <li style={{marginTop: "1rem"}}> Are you a Graduate?
                </li>
                <li style={{marginTop: "1rem"}}> Are you looking for a Job?
                </li>
                <li style={{marginTop: "1rem"}}> You are at the right place, at the right time!
                </li>
              </ul>
              <p style={{marginTop: "2rem"}}>Learn new Skills to get your dream Job.
              </p>
            </div>
            <div  className="btn-Entre mt-4">
              <p style={{marginTop: "3rem"}}>Interested? Pay only <b>Rs 1,920</b>  for Skills, Certifications worth <b> Rs 16,000!</b>
              </p>
              <a className="btn-sate"   href='/Register'>Register</a>
            </div>
          </div>
        </div>
        <div  className="skil-card color-0B546F">
          <div  className="container">
            <div  className="row">
              <div  className="col-md-4">
                <div  className="box" style={{float:'left'}}>
                  <div  className="box-head">
                    <img src={group} alt="" srcset="" />
                  </div>
                  <div  className="box-details">
                    <div  className="heading-box">
                      <h3>Incubate your business! </h3>
                    </div>
                    <ul>
                      <li>Graduate with this Program </li>
                      <li>   Get your cloud storage package from AdiTech and Crayon  </li>
                      <li>  Become a job-giver and an icon of Telangana!  </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div  className="col-md-4">
                <div  className="box">
                  <div  className="box-head">
                    <img src={tabletop} alt="" srcset="" />
                  </div>
                  <div  className="box-details">
                    <div  className="heading-box">
                      <h3>Skilling Curriculum </h3>
                    </div>
                    <ul>
                      <li>   Entrepreneurship Skills      </li>
                      <li>   Technology Skills    </li>
                      <li>   Corporate Skills </li>
                      <li> Creative Skills </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div  className="col-md-4">
                <div  className="box" style={{float:'right'}}>
                  <div  className="box-head">
                    <img src={microsoft} alt="" srcset="" />
                  </div>
                  <div  className="box-details">
                    <div  className="heading-box">
                      <h3>Certifications  </h3>
                    </div>
                    <ul>
                      <li>Microsoft </li>
                      <li>   LinkedIn Learning   </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
