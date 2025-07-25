import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);
  const toggleConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$&-_]).{8,}$/;

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.includes('@')) newErrors.email = "Valid email required";
    if (!formData.mobile.match(/^\d{10}$/)) newErrors.mobile = "Enter 10-digit number";
    if (!passwordPattern.test(formData.password)) newErrors.password = "Password must be 8+ chars with letters, numbers, and symbols (@,#,$,&,_,-)";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {

      const response = await axios.post('http://localhost:5000/api/users/signup', formData);
      const message = response.data.message;

      toast.success(message);
      setTimeout(() => {
        navigate("/signin");
      }, 2000);

    } catch (err) {

      if (err.response) {
        const status = err.response.status;
        const message = err.response.data.message;

        if (status === 400) {
          toast.error(message);
        } else if (status === 409) {
          toast.error(message, {
            style: {
              width: "500px",
              fontSize: "16px",
              textAlign: "center"
            }
          });
        } else if (status === 500) {
          toast.error(message);
        } else {
          toast.error("Unexpected error occurred.");
        }
      } else {
        toast.error("Network error. Please try again later.");
      }
    }
  };

  return (

    <>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />

      <div
        className="container-fluid min-vh-100 d-flex align-items-center justify-content-center position-relative "
        style={{ background: 'linear-gradient(to bottom, #010C19 0%, #053D7F 100%)' }}
      >
        {/* Background Logo */}
        <img
          src="/logo.png"
          alt="bg logo"
          className="position-absolute  top-0"
          style={{ left: 'calc(-2vw)', width: '80vw', height: '100vh', opacity: "0.2", objectFit: 'contain', zIndex: 0 }}
        />

        {/* Main Content */}
        <div className="w-100 px-4" style={{ maxWidth: '1300px', zIndex: 1, rowGap: '1px' }}>
          <div className="d-flex flex-wrap justify-content-between align-items-start"
          >

            {/* Left - Form Section */}
            <div className="text-white col-lg-7 mb-5 mb-lg-5"
            >
              <h1 style={{ fontFamily: "Bebas Neue", fontSize: "64px" }}>SIGN UP</h1>
              <p style={{ fontFamily: "Poppins", fontSize: "20px" }}>
                Already have an account? <Link to="/signin" style={{ color: '#92A7C1', fontWeight: 'bold' }}>Sign in</Link>
              </p>

              <div className="p-4 rounded-4 border border-info" style={{ backgroundColor: 'rgba(1, 8, 37, 0.4)' }}>
                <form style={{ fontFamily: "Poppins" }} onSubmit={handleSubmit}>

                  {/* First + Last Name */}
                  <div className="d-flex gap-3">
                    <div className="flex-grow-1">
                      <label className="form-label fs-5">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        className="form-control"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
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
                        onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                      />
                      {errors.lastName && <small className="text-danger">{errors.lastName}</small>}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="mt-3">
                    <label className="form-label fs-5">Email</label>
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                    />
                    {errors.email && <small className="text-danger">{errors.email}</small>}
                  </div>

                  {/* Mobile */}
                  <div className="mt-3">
                    <label className="form-label fs-5">Mobile Number</label>
                    <input
                      type="text"
                      name="mobile"
                      className="form-control"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                    />
                    {errors.mobile && <small className="text-danger">{errors.mobile}</small>}
                  </div>

                  {/* Password */}
                  <div className="mt-3">
                    <label className="form-label fs-5">Password</label>
                    <div className="input-group">
                      <input style={{ borderRight: 'none', }}
                        type={showPassword ? "text" : "password"}
                        name="password"
                        className="form-control"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                      />
                      <button type="button" className="btn btn-outline-secondary" style={{
                        backgroundColor: "white",
                        border: "1px solid #ced4da",
                        borderLeft: "none",
                        borderRadius: "0 0.375rem 0.375rem 0", // right corners only
                        padding: "0 12px",
                        color: "#010D1B",
                        boxShadow: "none"
                      }} onClick={togglePassword}>
                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                      </button>
                    </div>
                    {errors.password && <small className="text-danger">{errors.password}</small>}
                  </div>

                  {/* Confirm Password */}
                  <div className="mt-3">
                    <label className="form-label fs-5">Confirm Password</label>
                    <div className="input-group">
                      <input style={{ borderRight: 'none', }}
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        className="form-control"
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                      />
                      <button type="button" className="btn btn-outline-secondary" style={{
                        backgroundColor: "white",
                        border: "1px solid #ced4da",
                        borderLeft: "none",
                        borderRadius: "0 0.375rem 0.375rem 0", // right corners only
                        padding: "0 12px",
                        color: "#010D1B",
                        boxShadow: "none"
                      }} onClick={toggleConfirmPassword}>
                        {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                      </button>
                    </div>
                    {errors.confirmPassword && <small className="text-danger">{errors.confirmPassword}</small>}
                  </div>

                  <button type="submit" className="btn btn-info text-white mt-4 px-4 rounded-pill fs-5" style={{ border: '2px solid #92A7C1', backgroundColor: "#043978" }}>
                    Create Account
                  </button>
                </form>
              </div>
            </div>

            {/* Right - Illustration Section */}
            <div className=" col-lg-4 text-white ">
              <div style={{
                color: '#ffffff',
                fontFamily: 'Poppins',
                paddingTop: '133px',
                maxWidth: '35vw',

              }} >
                <img src="/signup.png" alt="stats" style={{ borderRadius: "10px", width: '100%', marginBottom: '15px' }} />

                <h2 style={{ fontFamily: "Bebas Neue", fontSize: '40px', marginBottom: '10px' }}>Manage Your Money Smarter</h2>
                <ul style={{ listStyle: 'none', paddingLeft: 0, fontSize: '20px', lineHeight: '1.8' }}>
                  <li>✔ Track expenses & savings</li>
                  <li>✔ Secure & encrypted accounts</li>
                  <li>✔ Smart budgeting suggestions</li>
                  <li>✔ Timely reminders for bills</li>
                </ul>

              </div >

            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;


