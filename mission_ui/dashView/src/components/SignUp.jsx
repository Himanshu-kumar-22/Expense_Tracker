import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from "motion/react";


const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);
  const toggleConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$&-_]).{8,}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const cleanData = {
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email.trim(),
      mobile: formData.mobile.toString().trim(),
      password: formData.password,
      confirmPassword: formData.confirmPassword
    };

    if (!cleanData.firstName) newErrors.firstName = "First name is required";
    if (!cleanData.lastName) newErrors.lastName = "Last name is required";
    if (!emailPattern.test(cleanData.email)) newErrors.email = "Enter valid email";
    if (!cleanData.mobile.match(/^\d{10}$/)) newErrors.mobile = "Enter 10-digit number";
    if (!passwordPattern.test(cleanData.password)) newErrors.password = "Password must be 8+ chars with letters, numbers, and symbols (@,#,$,&,_,-)";
    if (cleanData.password !== cleanData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    try {
      const response = await axios.post('http://localhost:5000/api/users/signup', cleanData);
      toast.success(response.data.message);
      setTimeout(() => {
        navigate("/signin");
      }, 2000);
    } catch (err) {
      const status = err.response?.status;
      const message = err.response?.data?.message || "Unexpected error";

      if (status === 400 || status === 409 || status === 500) {
        toast.error(message);
      } else {
        toast.error("Network error. Please try again later.");
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div
      className="container-fluid min-vh-100 d-flex align-items-center justify-content-center position-relative"
      style={{ background: 'linear-gradient(to bottom, #010C19 0%, #053D7F 100%)' }}
    >
      <motion.img
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{
          duration: 0.7
        }}

        src="/logo.png"
        alt="bg logo"
        className="position-absolute top-0"
        style={{
          left: 'calc(-2vw)',
          width: '80vw',
          height: '100vh',
          opacity: 0.2,
          objectFit: 'contain',
          zIndex: 0
        }}
      />

      <div className="w-100 px-4" style={{ maxWidth: '1300px', zIndex: 1 }}>
        <div className="d-flex flex-wrap justify-content-between align-items-start">

          {/* Left Form Section */}
          <div className="text-white col-lg-7 mb-5">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: 'spring',
                duration: 1
              }}
              style={{ fontFamily: "Bebas Neue", fontSize: "64px" }}>SIGN UP</motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: 'spring',
                duration: 1
              }}
              style={{ fontFamily: "Poppins", fontSize: "20px" }}>
              Already have an account? <Link to="/signin" className='text-info' style={{ fontWeight: 'bold', textDecoration: 'none' }}>Sign in</Link>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: 'spring',

                duration: 1
              }}
              className="p-4 rounded-4 border border-info" style={{ backgroundColor: 'rgba(1, 8, 37, 0.4)' }}>
              <form style={{ fontFamily: "Poppins" }} onSubmit={handleSubmit}>

                <div className="d-flex gap-3">
                  <div className="flex-grow-1">
                    <label className="form-label fs-5">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      className="form-control"
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                    {errors.firstName && <small className="text-danger">{errors.firstName}</small>}
                  </div>
                  <div className="flex-grow-1">
                    <label className="form-label fs-5">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      className="form-control"
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                    {errors.lastName && <small className="text-danger">{errors.lastName}</small>}
                  </div>
                </div>

                <div className="mt-3">
                  <label className="form-label fs-5">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && <small className="text-danger">{errors.email}</small>}
                </div>

                <div className="mt-3">
                  <label className="form-label fs-5">Mobile Number</label>
                  <input
                    type="text"
                    name="mobile"
                    className="form-control"
                    value={formData.mobile}
                    onChange={handleInputChange}
                  />
                  {errors.mobile && <small className="text-danger">{errors.mobile}</small>}
                </div>

                <div className="mt-3">
                  <label className="form-label fs-5">Password</label>
                  <div className="input-group">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      className="form-control"
                      style={{ borderRight: 'none' }}
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      style={{
                        backgroundColor: "white",
                        border: "1px solid #ced4da",
                        borderLeft: "none",
                        borderRadius: "0 0.375rem 0.375rem 0",
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

                <div className="mt-3">
                  <label className="form-label fs-5">Confirm Password</label>
                  <div className="input-group">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      className="form-control"
                      style={{ borderRight: 'none' }}
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                    />
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      style={{
                        backgroundColor: "white",
                        border: "1px solid #ced4da",
                        borderLeft: "none",
                        borderRadius: "0 0.375rem 0.375rem 0",
                        padding: "0 12px",
                        color: "#010D1B",
                        boxShadow: "none"
                      }}
                      onClick={toggleConfirmPassword}
                    >
                      {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                    </button>
                  </div>
                  {errors.confirmPassword && <small className="text-danger">{errors.confirmPassword}</small>}
                </div>

                <motion.button
                  whileTap={{ scale: 0.9 }}
                  type="submit"
                  className="btn btn-info text-white mt-4 px-4 rounded-pill fs-5"
                  style={{ border: '2px solid #92A7C1', backgroundColor: "#043978" }}
                >
                  Create Account
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: 'spring',

              duration: 1
            }}
            className="col-lg-4 text-white">
            <div style={{ fontFamily: 'Poppins', paddingTop: '133px', maxWidth: '35vw' }}>
              <img src="/signup.png" alt="illustration" style={{ borderRadius: "10px", width: '100%', marginBottom: '15px' }} />
              <h2 style={{ fontFamily: "Bebas Neue", fontSize: '40px', marginBottom: '10px' }}>Manage Your Money Smarter</h2>
              <ul style={{ listStyle: 'none', paddingLeft: 0, fontSize: '20px', lineHeight: '1.8' }}>
                <li>✔ Track expenses & savings</li>
                <li>✔ Secure & encrypted accounts</li>
                <li>✔ Smart budgeting suggestions</li>
                <li>✔ Timely reminders for bills</li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Signup;
