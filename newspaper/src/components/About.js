import React from "react";

import my from "./my2.jpg";

const About = () => {
  return (
    <>
      <div className="d-flex  flex-column justify-content-center align-items-center flex-wrap ">
        <img src={my} height={300} width={300} className="mt-4" />
        <div className="text-center">
          <p>Name: <span>Rathva Yuvraj</span></p>
          <p>Degree: <span>B.E (Computer Science Engineering)</span></p>
         
          
        </div>
      </div>
    </>
  );
};

export default About;
