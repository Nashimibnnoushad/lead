import { Navigation } from "./navigation";
import { Features } from "./features";
import { FAQ } from "./faq";
import { Services } from "./services";
import { Footer } from "./footer";
import "../App.css";
import React, { useState, useEffect } from 'react'

const Home = () => {

  return (
    <div>
      <Features />     
      <Services />
      <FAQ />
    </div>
  );
};

export default Home;
