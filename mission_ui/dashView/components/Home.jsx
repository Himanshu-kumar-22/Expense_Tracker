import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

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

  return (
    <>
      <nav className="navbar navbar-expand-lg px-4">
        <div className="container-fluid d-flex overflow-hidden flex-wrap justify-content-between align-items-center" style={{ rowGap: '1rem' }}>

          <div className='d-flex flex-grow-1 flex-wrap align-items-center' style={{ gap: '0.1rem', fontFamily: 'Poppins, sans-serif', minWidth: 0 }}>
            {/* Logo + Title */}
            <div className="d-flex align-items-center flex-shrink-0 me-4">
              <a href='/'><img src="Rectangle.png" alt="Logo" width={60} height={60}/></a>
              <a className="navbar-brand text-white" style={{ fontSize: '26px' }} href="/">
                Expense Tracker
              </a>
            </div>

            {/* Nav Links */}
            <div className="d-flex align-items-center flex-wrap" style={{ gap: '2rem', fontSize: '16px', whiteSpace: 'nowrap' }}>
              <a className="nav-link text-white" style={underlining('Home')} onClick={() => setActive('Home')} href="/">Home</a>
              <a className="nav-link text-white" style={underlining('Features')} onClick={() => setActive('Features')} href="#">Features</a>
              <a className="nav-link text-white" style={underlining('Contact')} onClick={() => setActive('Contact')} href="#">Contact</a>
            </div>
          </div>

          <div className='d-flex flex -wrap align-items-center gap-3 mt-lg-0' style={{ fontFamily: 'poppins', flexShrink: 0 }}>
            {/* Toggle */}
            <div
              onClick={toggleMode}
              style={{
                cursor: 'pointer',
                width: '50px',
                height: '26px',
                backgroundColor: darkMode ? '#222' : '#ddd',
                borderRadius: '20px',
                border: `1px solid ${darkMode ? 'white' : '#A1B5CD'}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: darkMode ? 'flex-end' : 'flex-start',
                padding: '4px',
                transition: 'all 0.6s ease-in-out',
              }}
            >
              {darkMode ? (
                <FaMoon color="#A1B5CD" size={18} />
              ) : (
                <FaSun color="#C1C7E3" size={18} />
              )}
            </div>
            <div>

              <div>
                {/* Sign In/Sign Up Button */}
                <button
                  className="btn btn-primary rounded-pill px-4"
                  style={{ fontSize: '14px', fontFamily: 'poppins' }}
                >
                  Sign in/Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="position-relative text-white d-flex justify-content-center overflow-hidden" style={{ minHeight: '100vh', paddingTop: '4rem'}}>
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
          <span style={{ display: 'block', width: '100%'}}>
            <h1 className="display-2 mb-3" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              MAKING SHARED <br /> EXPENSES EFFORTLESS
            </h1>
            <p className="lead text-light" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Track shared expenses with roommates, friends, and travel groups effortlessly.
            </p>
            <button
              className="btn btn-outline-light rounded-pill mt-4 px-4 py-2"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Ready to split smarter?
            </button>
          </span>
        </div>

      </div>

      {/* cards */}
      <div className="d-flex align-items-center flex-wrap justify-content-center" style={{ height: '300px', zIndex: 1, gap: '10rem', marginTop: '-200px', rowGap: '2rem'}}>
        <div
          style={{
            height: '300px',
            width: '250px',
            background: '#04356E',
            borderRadius: '24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '40px 24px',
            color: 'white',
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
            Get notified who owes<br />whom
          </div>

          {/* Arrow */}
          <div style={{ fontSize: '28px', marginLeft: '150px' }}>
            <img src="right-chevron.png" alt="" height={50} width={50} />
          </div>
        </div>
        <div
          style={{
            height: '300px',
            width: '250px',
            background: '#04356E',
            borderRadius: '24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '40px 24px',
            color: 'white',
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
            Get notified who owes<br />whom
          </div>

          {/* Arrow */}
          <div style={{ fontSize: '28px', marginLeft: '150px' }}>
            <img src="right-chevron.png" alt="" height={50} width={50} />
          </div>
        </div>
        <div
          style={{
            height: '300px',
            width: '250px',
            borderRadius: '24px',
            background: '#04356E',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '40px 24px',
            color: 'white',
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
            Get notified who owes<br />whom
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
