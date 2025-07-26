import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Navbar from "./Navbar.jsx"
import LandingLayout from './LandingLayout.jsx';

const Contact = () => {
  const [active, setActive] = useState('Contact');

  return (
    <LandingLayout active={active} setActive={setActive}>
      {({ mystyle, btnborder }) => (
        <>

          <div
            className="container-fluid d-flex align-items-center justify-content-center py-5"
          >
            <div className="row w-100 px-4" style={{ maxWidth: '1300px' }}>
              {/* Left Section - Contact Form */}
              <div className="col-md-7" style={mystyle}>
                <h1
                  className="mb-3"
                  style={{ fontSize: '64px', fontFamily: 'Bebas Neue' }}
                >
                  CONTACT US
                </h1>
                <p className="mb-4 fs-5" style={{ fontFamily: 'poppins' }}>
                  Contact us anytime for product-related questions.
                </p>

                <form>
                  <div className="mb-4">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control text-dark"
                      placeholder="Enter your name"
                      style={{ backgroundColor: '#92A7C1', border: 'none' }}
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label" style={{ fontFamily: 'Poppins' }}>
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control text-dark"
                      placeholder="Enter your email"
                      style={{ backgroundColor: '#92A7C1', border: 'none' }}
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label" style={{ fontFamily: 'Poppins' }}>
                      Message
                    </label>
                    <textarea
                      className="form-control text-dark"
                      rows="4"
                      placeholder="Write your message"
                      style={{ backgroundColor: '#92A7C1', border: 'none' }}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn rounded-pill px-4 py-2"
                    style={{ ...btnborder, ...mystyle }}
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Right Section - Info */}
              <div className="col-md-5 mt-5 mt-md-0 d-flex flex-column justify-content-center gap-4" style={mystyle}>
                <div className="d-flex align-items-center gap-3">
                  <FaPhoneAlt className="fs-10" />
                  <span className="fs-5">1800-562-456</span>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <FaEnvelope className="fs-5" />
                  <span className="fs-5">contact@et.com</span>
                </div>

                <p className="fs-5">
                  Call us for urgent matters.
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </LandingLayout>
  );
};

export default Contact;
