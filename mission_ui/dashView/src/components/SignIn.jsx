import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignIn = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    mobile: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const togglePassword = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.mobile.match(/^\d{10}$/)) newErrors.mobile = "Enter a valid 10-digit number";
    if (!formData.password.trim()) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/users/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.status === 200) {
        toast.success(data.message);
        
      } else if (response.status === 400 || response.status === 401) {
        toast.error(data.message);
      } else if (response.status === 404) {
        toast.info(data.message, {
          style: {
            width: "500px",
            fontSize: "16px",
            textAlign: "center"
          }
        });
      } else {
        toast.error("Unexpected response from server.");
      }

    } catch (err) {
      console.error("Error:", err);
      toast.error("Server error. Please try again later.");
    }
  };


  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
      <div
        className="container-fluid min-vh-100 d-flex align-items-center justify-content-center position-relative"
        style={{ background: 'linear-gradient(to bottom, #010C19 0%, #053D7F 100%)' }}
      >
        {/* Faint Logo Background */}
        <img
          src="/logo.png"
          alt="background logo"
          className="position-absolute top-0 start-0 opacity-25"
          style={{ width: '100vw', height: '100vh', objectFit: 'contain', zIndex: 0 }}
        />

        <div className="w-100 px-3" style={{ maxWidth: '500px', zIndex: 1 }}>
          <div className="text-white text-center">
            <h1 style={{ fontFamily: "Bebas Neue", fontSize: "64px" }}>SIGN IN</h1>
            <p style={{ fontFamily: "Poppins", fontSize: "18px" }}>
              Don’t have an account? <Link to="/signup" className="text-info fw-semibold">Sign up</Link>
            </p>

            <div className="p-4 rounded-4 border border-info mt-4" style={{ backgroundColor: 'rgba(1, 8, 37, 0.4)' }}>
              <form onSubmit={handleSubmit}>

                {/* Mobile Field */}
                <div className="mb-3 text-start">
                  <label className="form-label">Mobile Number</label>
                  <input
                    type="text"
                    name="mobile"
                    className="form-control"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                  />
                  {errors.mobile && <small className="text-danger">{errors.mobile}</small>}
                </div>

                {/* Password Field */}
                <div className="mb-3 text-start">
                  <div className="d-flex justify-content-between">
                    <label className="form-label">Password</label>
                    <Link to="/dashboard"><span className="text-info" style={{ cursor: "pointer", fontSize: "14px" }}>Forgot Password?</span></Link>
                  </div>
                  <div className="input-group">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      className="form-control"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                    />
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      style={{
                        backgroundColor: "white",
                        border: "1px solid #ced4da",
                        borderLeft: "none",
                        borderRadius: "0 0.375rem 0.375rem 0", // right corners only
                        padding: "0 12px",
                        color: "#010D1B",
                        boxShadow: "none"
                      }}
                      onClick={togglePassword}
                    >
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </button>

                  </div>
                  {errors.password && <small className="text-danger">{errors.password}</small>}
                </div>

                {/* Submit */}
                <button type="submit" className="btn btn-info text-white w-100 rounded-pill mt-3 "
                  style={{
                    background: "#043978",
                    border: "3.18 px"
                  }}>
                  Sign In
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
