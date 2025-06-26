import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = ({
  darkMode,
  toggleMode,
  mystyle,
  btnborder,
  btnBackground,
  underlining,
  active,
  setActive
}) => {
  return (
    <nav className="navbar navbar-expand-lg px-4">
      <div className="container-fluid d-flex overflow-hidden flex-wrap justify-content-between align-items-center" style={{ rowGap: '1rem' }}>
        <div className='d-flex flex-grow-1 flex-wrap align-items-center' style={{ gap: '0.1rem', fontFamily: 'Poppins, sans-serif', minWidth: 0 }}>
          {/* Logo + Title */}
          <div className="d-flex align-items-center flex-shrink-0 me-4">
            <a href='/'><img src="Rectangle.png" alt="Logo" width={60} height={60} /></a>
            <a className="navbar-brand " style={{ ...mystyle, fontSize: '26px' }} href="/">
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
              backgroundColor: darkMode ? '#ddd' : '#222',
              borderRadius: '20px',
              border: `1px solid ${darkMode ? 'black' : 'white'}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: darkMode ? 'flex-end' : 'flex-start',
              padding: '4px',
              transition: 'all 0.6s ease-in-out',
            }}
          >
            {darkMode ? (
              <FaSun color="#C1C7E3" size={18} />
            ) : (
              <FaMoon color="#A1B5CD" size={18} />

            )}
          </div>

          {/* Sign In/Sign Up Button */}
          <button
            className="btn px-4"
            style={{ ...btnborder, ...btnBackground, ...mystyle, fontSize: '14px', fontFamily: 'poppins', borderRadius: '10px' }}
          >
            Sign in/Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
