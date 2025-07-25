import React, { useState } from 'react';
import Navbar from './Navbar.jsx';
import LandingLayout from './LandingLayout.jsx';
import { Link } from 'react-router-dom';

const Home = () => {
  const [active, setActive] = useState('Home');

  return (

    <LandingLayout active={active} setActive={setActive}>
      {({ mystyle, btnBackground, btnborder, cardColor }) => (
        <>

          {/* Hero Section */}
          < div className="position-relative text-white d-flex justify-content-center overflow-hidden" style={{ minHeight: '100vh', paddingTop: '4rem' }}>
            <img
              src="/bkgGif.gif"
              alt="Background"
              className="position-absolute"
              style={{
                top: '-10%',
                left: 0,
                zIndex: -1,
                objectFit: 'cover',
                width: '100%',
                height: '97.5%',
                opacity: 0.2
              }}
            />
            <div
              className="position-absolute w-100 h-100"
              style={{
                top: 0,
                left: 0,
                zIndex: -1,
              }}
            />
            <div
              className="text-center mt-3 d-flex justify-content-center"
              style={{
                maxWidth: '600px',
                height: '100vh',
                zIndex: 2,
              }}
            >
              <span style={{ display: 'block', width: '100%' }}>
                <h1 className="display-2 mb-3" style={{ ...mystyle, fontFamily: 'Bebas Neue, sans-serif' }}>
                  MAKING SHARED <br /> EXPENSES EFFORTLESS
                </h1>
                <p className="lead" style={{ ...mystyle, fontFamily: 'Poppins, sans-serif' }}>
                  Track shared expenses with roommates, friends, and travel groups effortlessly.
                </p>
                <Link to="/signup"> <button
                  className="btn rounded-pill mt-4 px-4 py-2"
                  style={{ ...btnborder, ...btnBackground, ...mystyle, fontFamily: 'Poppins, sans-serif' }}
                >
                  Ready to split smarter?
                </button></Link>
              </span>
            </div>

          </div>

          {/* cards */}
          <div className="d-flex align-items-center flex-wrap justify-content-center"
            style={{
              marginTop: '-200px', // Half of card height
              left: 0,
              width: '100%',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '3.5rem',
              zIndex: 2
            }}>

            {/*First card*/}
            <div
              style={{
                ...cardColor,
                height: '300px',
                width: '250px',
                borderRadius: '24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '40px 24px',
                opacity: 0.7,
                zIndex: 1,
                boxSizing: 'border-box'
              }}
            >
              {/* Icon placeholder */}
              <div style={{ fontSize: '64px' }}>
                <img src="/bell3.png" alt="" height={"100"} width={"100"} />
              </div>

              {/* Text */}
              <div
                style={{
                  textAlign: 'center',
                  fontSize: '20px',
                  fontWeight: '500',
                  lineHeight: '28px'
                }}
              >
                Get notified who owes
              </div>

              {/* Arrow */}
              <Link to='/feature' style={{ textDecoration: 'none' }}>
                <div style={{ fontSize: '28px', marginLeft: '150px' }}>
                  <img src="right-chevron.png" alt="" height={50} width={50} />
                </div>
              </Link>
            </div>

            {/*Second card*/}
            <div
              style={{
                ...cardColor,
                height: '300px',
                width: '250px',
                borderRadius: '24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '40px 24px',
                opacity: 0.7,
                zIndex: 1,
                // boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
                boxSizing: 'border-box'
              }}
            >
              {/* Icon placeholder */}
              <div style={{ fontSize: '64px' }}>
                {/* Insert your icon here */}
                <img src="/graph.png" alt="" height={"100"} width={"100"} />
              </div>

              {/* Text */}
              <div
                style={{
                  textAlign: 'center',
                  fontSize: '20px',
                  fontWeight: '500',
                  lineHeight: '28px'
                }}
              >
                Track balance and payments
              </div>

              {/* Arrow */}
              <Link to='/feature' style={{ textDecoration: 'none' }}>
                <div style={{ fontSize: '28px', marginLeft: '150px' }}>
                  <img src="right-chevron.png" alt="" height={50} width={50} />
                </div>
              </Link>
            </div>

            {/*Third card*/}
            <div
              style={{
                ...cardColor,
                height: '300px',
                width: '250px',
                borderRadius: '24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '40px 24px',
                opacity: 0.7,
                zIndex: 1,
                // boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
                boxSizing: 'border-box'
              }}
            >
              <div style={{ fontSize: '64px' }}>
                {/* Insert your icon here */}
                <img src="/graph.png" alt="" height={"100"} width={"100"} />
              </div>

              {/* Text */}
              <div
                style={{
                  textAlign: 'center',
                  fontSize: '20px',
                  fontWeight: '500',
                  lineHeight: '28px'
                }}
              >
                Track balance and payments
              </div>

              {/* Arrow */}
              <Link to='/feature' style={{ textDecoration: 'none' }}>
                <div style={{ fontSize: '28px', marginLeft: '150px' }}>
                  <img src="right-chevron.png" alt="" height={50} width={50} />
                </div>
              </Link>
            </div>

            {/*Fourth card*/}
            <div
              style={{
                ...cardColor,
                height: '300px',
                width: '250px',
                borderRadius: '24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '40px 24px',
                opacity: 0.7,
                zIndex: 1,
                // boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
                boxSizing: 'border-box'
              }}
            >
              {/* Icon placeholder */}
              <div style={{ fontSize: '64px' }}>
                {/* Insert your icon here */}
                <img src="/group.png" alt="" height={"100"} width={"100"} />
              </div>

              {/* Text */}
              <div
                style={{
                  textAlign: 'center',
                  fontSize: '20px',
                  fontWeight: '500',
                  lineHeight: '28px'
                }}
              >
                Create and manage groups
              </div>

              {/* Arrow */}
              <Link to='/feature' style={{ textDecoration: 'none' }}>
                <div style={{ fontSize: '28px', marginLeft: '150px' }}>
                  <img src="right-chevron.png" alt="" height={50} width={50} />
                </div>
              </Link>
            </div>
          </div>
        </>
      )
      }
    </LandingLayout >
  );
};

export default Home;
