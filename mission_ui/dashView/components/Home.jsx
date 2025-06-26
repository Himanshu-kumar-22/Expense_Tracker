import React, { useState, useEffect } from 'react';
import Navbar from './Navbar.jsx';

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [active, setActive] = useState('Home');

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  const underlining = (name) => ({
    borderBottom: active === name ? '2px solid white' : '2px solid transparent',
    fontWeight: active === name ? '900' : '400',
    color: active === name ? '#92A7C1' : 'white',
    padding: '8px 16px',
    cursor: 'pointer',
    color: 'white',
  });

  //button text change
  const [mystyle, setMyStyle] = useState({
    color: 'white',
  })
  const TextlightMode = () => {
    if (mystyle.color === 'white') {
      setMyStyle({
        color: '#032854',
      })
    }
    else {
      setMyStyle({
        color: 'white',
      })
    }
  }

  // button background change
  const [btnBackground, setbtnBackground] = useState({
    backgroundColor: '#043978',
  })
  const Textbackground = () => {
    if (btnBackground.backgroundColor === '#043978') {
      setbtnBackground({
        backgroundColor: '#C0C7E2',
      })
    }
    else {
      setbtnBackground({
        backgroundColor: '#043978',
      })
    }
  }

  //cards light & Dark mode
  const [cardColor, setCardColor] = useState({
    background: '#04356E',
    color: 'white'
  });

  const Cardbackground = () => {
    if (cardColor.background === '#04356E') {
      setCardColor({
        background: '#A2B5CE',
        color: '#1F3F5E'
      });
    } else {
      setCardColor({
        background: '#04356E',
        color: 'white'
      });
    }
  };

  
  //Button border
  const [btnborder, setbtnborder] = useState({
    borderWidth: '1px',
    borderColor: 'white',
  })
  const btnborderColor = () => {
    if (btnborder.borderColor === 'white') {
      setbtnborder({
        borderColor: '#032854',
      });
    } else {
      setbtnborder({
        borderColor: 'white'
      });
    }
  }
  useEffect(() => {
    if (darkMode) {
      document.body.style.background = 'linear-gradient(to bottom, #9EB3CC 0%, #C2C8E4 100%)';
    } else {
      document.body.style.background = 'linear-gradient(to bottom, #010C19 0%, #053D7F 100%)';
    }

    document.body.style.minHeight = '100vh';
    document.body.style.minWidth = '100vw';
    document.body.style.overflowY = 'auto';
    document.body.style.overflowX = 'hidden';
  }, [darkMode]);

  return (
    <>

      <Navbar
        darkMode={darkMode}
        toggleMode={() => {
          toggleMode();
          TextlightMode();
          Textbackground();
          Cardbackground();
          btnborderColor();
        }}
        mystyle={mystyle}
        btnborder={btnborder}
        btnBackground={btnBackground}
        underlining={underlining}
        active={active}
        setActive={setActive}
      />


      {/* Hero Section */}
      <div className="position-relative text-white d-flex justify-content-center overflow-hidden" style={{ minHeight: '100vh', paddingTop: '4rem' }}>
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
        {/* Hero Section*/}
        {/* Hero Section */}
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
            <button
              className="btn rounded-pill mt-4 px-4 py-2"
              style={{ ...btnborder, ...btnBackground, ...mystyle, fontFamily: 'Poppins, sans-serif' }}
            >
              Ready to split smarter?
            </button>
          </span>
        </div>

      </div>

      {/* cards */}
      <div className="d-flex align-items-center flex-wrap justify-content-center" style={{ height: '300px', zIndex: 1, gap: '10rem', marginTop: '-200px', rowGap: '2rem' }}>
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
            <img src="/notification.png" alt="" height={"100"} width={"100"} />
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
          <div style={{ fontSize: '28px', marginLeft: '150px' }}>
            <img src="right-chevron.png" alt="" height={50} width={50} />
          </div>
        </div>
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
            <img src="/bar-graph.png" alt="" height={"100"} width={"100"} />
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
          <div style={{ fontSize: '28px', marginLeft: '150px' }}>
            <img src="right-chevron.png" alt="" height={50} width={50} />
          </div>
        </div>
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
            <img src="/ancestors.png" alt="" height={"100"} width={"100"} />
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
          <div style={{ fontSize: '28px', marginLeft: '150px' }}>
            <img src="right-chevron.png" alt="" height={50} width={50} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
