import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div
      className="container-fluid min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        background: 'linear-gradient(to bottom, #00172D 0%, #01366C 100%)',
        padding: '60px 0',
      }}
    >
      <div className="row w-100 px-4" style={{ maxWidth: '1300px' }}>
        {/* Left Section - Contact Form */}
        <div className="col-md-7 text-white">
          <h1
            className="mb-3"
            style={{ fontSize: '64px', fontFamily: 'Bebas Neue' }}
          >
            CONTACT US
          </h1>
          <p className="mb-4 text-light fs-5" style={{fontFamily:'Pacifico'}}>
            Reach out to us at any time, for any product-related questions you may have.
          </p>

          <form>
            <div className="mb-4">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control text-white"
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
                className="form-control text-white"
                placeholder="Enter your email"
                style={{ backgroundColor: '#92A7C1', border: 'none' }}
              />
            </div>

            <div className="mb-4">
              <label className="form-label" style={{ fontFamily: 'Poppins' }}>
                Message
              </label>
              <textarea
                className="form-control text-white"
                rows="4"
                placeholder="Write your message"
                style={{ backgroundColor: '#92A7C1', border: 'none' }}
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-outline-light rounded-pill px-4 py-2"
              style={{ backgroundColor: '#043978' }}
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Section - Info */}
        <div className="col-md-5 text-white mt-5 mt-md-0 d-flex flex-column justify-content-center gap-4">
          <div className="d-flex align-items-center gap-3">
            <FaPhoneAlt className="fs-10" />
            <span className="fs-5">1800-562-456</span>
          </div>

          <div className="d-flex align-items-center gap-3">
            <FaEnvelope className="fs-5" />
            <span  className="fs-5">contact@et.com</span>
          </div>

          <p className="text-light fs-5">
            Feel free to give us a call if you have a more urgent matter.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
