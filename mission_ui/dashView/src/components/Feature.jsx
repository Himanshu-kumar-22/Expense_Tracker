import React, { useState } from 'react';
import Navbar from "./Navbar.jsx"
import LandingLayout from './LandingLayout.jsx';



const Feature = () => {
  const [active, setActive] = useState('Features');


  return (
    <LandingLayout active={active} setActive={setActive}>
      {() => (
        <>
          <div className="d-flex justify-content-center align-items-center" style={{ height: "90vh" }}>
            <h1 className="text-xl font-bold text-white-800" style={{ color: 'whitesmoke' }} >🚧 Men at Work 👷‍♂️ </h1>
          </div>
        </>
      )}
    </LandingLayout>
  );
};

export default Feature;