// import React, { useState, useEffect } from 'react';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';



// const SignUp = () => {
//   const navigate = useNavigate();
//   const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%&\-_.!]).{8,}$/;
//   const [errors, setErrors] = useState({});


//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     mobile: '',
//     password: '',
//     confirmPassword: ''
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const togglePassword = () => setShowPassword(!showPassword);
//   const togglePassword1 = () => setShowConfirmPassword(!showConfirmPassword);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const newErrors = {};

//     // Validate password
//     const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$&\-_.]).{8,}$/;

//     if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
//     if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
//     if (!formData.email.includes('@')) newErrors.email = "Valid email required";
//     if (!formData.mobile.match(/^\d{10}$/)) newErrors.mobile = "Enter 10-digit number";

//     if (!passwordPattern.test(formData.password)) {
//       newErrors.password = "Password must be 8+ characters with  letters, numbers, and symbols (@,#,$,&,_,-)";
//     }

//     if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = "Passwords do not match";
//     }

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors); // Set validation errors to show next to inputs
//       return;
//     }

//     try {
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//       alert("Account created successfully!");
//       navigate("/signin");
//       setErrors({});
//     } 
//  catch (err) {
//       console.error(err);
//       alert("Signup failed");
//     }
//   };


//   useEffect(() => {
//     document.body.style.background = 'linear-gradient(to bottom, #010C19 0%, #053D7F 100%)';
//     document.body.style.minHeight = '100vh';


//     return () => {


//       document.body.style.background = '';
//     };
//   }, []);


//   return (
//     <>
//       <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 50px', height: '125vh', alignItems: 'center' }}>

//         <div  >
//           <img
//             src="/logo.png"
//             alt="Background"
//             className="position-absolute"
//             style={{

//               position: 'absolute',
//               top: 0,
//               left: -100,
//               zIndex: -1,
//               width: '80vw',
//               height: '120vh',
//               objectFit: 'contain', // or 'cover' based on your needs
//               opacity: 0.2,
//             }}
//           />




//           <div >
//             <h1 className="text-white mx-5 mt-4" style={{ fontFamily: "Bebas Neue", fontSize: "64px" }} >SIGN UP</h1>
//             <p className="text-white mx-5" style={{ fontFamily: "poppins", fontSize: "22px" }}>
//               Already have an account ? <Link to="/signin"><span className="font-bold text-[#1d3557]" style={{ fontFamily: "poppins", color: '#92A7C1', fontWeight: 'bold', fontSize: "22px" }}>Sign in</span></Link>
//             </p>

//             <div className={' text-white  '}
//               style={{
//                 borderRadius: "32px",
//                 marginLeft: '50px',
//                 height: '100vh',
//                 width: '50vw',
//                 border: '1px solid #92A7C1',
//                 backgroundColor: 'rgba(1, 8, 37, 0.4)'
//               }}>
//               <form onSubmit={handleSubmit}>
//                 <div style={{ marginLeft: '50px' }}>
//                   {/*  first name and last name  */}
//                   <div>
//                     <div className={'  d-flex mt-4'}>
//                       <label style={{ fontFamily: "poppins", fontSize: "20px" }}>First Name</label>
//                       <label style={{ fontFamily: "poppins", fontSize: "20px", marginLeft: '30%' }}>Last Name</label>
//                     </div>
//                     <div className={'d-flex mt-2'} >

//                       <div style={{ display: 'flex', flexDirection: 'column' }}>
//                         <input name="firstName" value={formData.firstName}
//                           onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
//                           style={{ borderRadius: "6.5px", width: '18vw' }}
//                           type="text" />
//                         {errors.firstName && (
//                           <p style={{ color: 'red', fontSize: '14px', marginTop: '4px' }}>
//                             {errors.firstName}
//                           </p>
//                         )}
//                       </div>

//                       <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '6%' }}>
//                         <input name="lastName" value={formData.lastName}
//                           onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
//                           style={{ borderRadius: "6.5px", width: '18vw' }} type="text" />
//                         {errors.lastName && (
//                           <p style={{ color: 'red', fontSize: '14px', marginTop: '4px' }}>
//                             {errors.lastName}
//                           </p>
//                         )}

//                       </div>

//                     </div>
//                   </div>


//                   {/*  Email ID  */}
//                   <div className=" mt-4 " style={{ fontFamily: "poppins", fontSize: "20px" }}>
//                     <label >Email ID</label>
//                   </div>
//                   <div className=" mt-2 ">
//                     <input name="email" value={formData.email}
//                       onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
//                       style={{ borderRadius: "6.5px", width: '36vw' }} type="text" />
//                     {errors.email && (
//                       <p style={{ color: 'red', fontSize: '14px', marginTop: '4px' }}>
//                         {errors.email}
//                       </p>
//                     )}

//                   </div>


//                   {/*  Mobile number  */}

//                   <div className=" mt-4 " style={{ fontFamily: "poppins", fontSize: "20px" }}>
//                     <label >Mobile Number</label>
//                   </div>

//                   <div className=" mt-2 ">
//                     <input name="mobile" value={formData.mobile}
//                       onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
//                       style={{ borderRadius: "6.5px", width: '36vw' }} type="text" />
//                     {errors.mobile && (
//                       <p style={{ color: 'red', fontSize: '14px', marginTop: '4px' }}>
//                         {errors.mobile}
//                       </p>
//                     )}
//                   </div>

//                   {/*  Password */}
//                   <div className=" mt-4 " style={{ fontFamily: "poppins", fontSize: "20px" }}>
//                     <label >Password</label>
//                   </div>
//                   <div className=" mt-2 ">
//                     <input name="password" value={formData.password}
//                       onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
//                       style={{ borderRadius: "6.5px", width: '36vw' }} type={showPassword ? "text" : "password"} />
//                     <button style={{
//                       backgroundColor: 'transparent', color: '#010D1B', border: 'none',
//                       outline: 'none', marginLeft: '-30px'
//                     }}
//                       type="button"

//                       onClick={togglePassword}
//                     >
//                       {showPassword ? <FaEye /> : <FaEyeSlash />}
//                     </button>
//                     {errors.password && (
//                       <p style={{ color: 'red', fontSize: '14px', marginTop: '4px' }}>
//                         {errors.password}
//                       </p>
//                     )}
//                   </div>


//                   {/*  Confirm password */}
//                   <div className=" mt-4 " style={{ fontFamily: "poppins", fontSize: "20px" }}>
//                     <label >Confirm Password</label>
//                   </div>
//                   <div className=" mt-2 ">
//                     <input name="confirmPassword" value={formData.confirmPassword}
//                       onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
//                       style={{ borderRadius: "6.5px", width: '36vw' }} type={showConfirmPassword ? "text" : "password"} />
//                     <button style={{
//                       backgroundColor: 'transparent', color: '#010D1B', border: 'none',
//                       outline: 'none', marginLeft: '-30px'
//                     }}
//                       type="button"

//                       onClick={togglePassword1}
//                     >
//                       {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
//                     </button>
//                     {errors.confirmPassword && (
//                       <p style={{ color: 'red', fontSize: '14px', marginTop: '4px' }}>
//                         {errors.confirmPassword}
//                       </p>
//                     )}
//                   </div>

//                   {/*  Create account or submit button   */}
//                   <button type="submit" className=" text-white mt-5 " style={{ fontFamily: "poppins", border: '2px solid #92A7C1', backgroundColor: "#043978", width: "13vw", borderRadius: "18px", fontSize: "20px" }}>
//                     Create Account
//                   </button>
//                 </div>
//               </form>
//             </div>




//           </div>

//         </div>

//         {/*  Illustration right side    */}              
//         <div style={{ width: '40%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
{/* <div style={{
  color: '#ffffff',
  fontFamily: 'Poppins',
  padding: '40px',
  maxWidth: '30vw'
}} >
  <img src="/signup.png" alt="stats" style={{ borderRadius: "10px", width: '100%', marginBottom: '20px' }} />

  <h2 style={{ fontFamily: "Bebas Neue", fontSize: '35px', marginBottom: '10px' }}>Manage Your Money Smarter</h2>
  <ul style={{ listStyle: 'none', paddingLeft: 0, fontSize: '20px', lineHeight: '1.8' }}>
    <li>✔ Track expenses & savings</li>
    <li>✔ Secure & encrypted accounts</li>
    <li>✔ Smart budgeting suggestions</li>
    <li>✔ Timely reminders for bills</li>
  </ul>
</div > */}
//         </div>
//       </div>
//     </>
//   );
// };

// export default SignUp

import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

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
      const response = await axios.post('http://localhost:5000/api/users/signin', formData);
      alert("Account created successfully!");
      navigate("/signin");
      setErrors({});
    } catch (err) {
      console.error(err);
      alert("Signup failed");
    }
  };

  return (
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
      <div className="w-100 px-4" style={{ maxWidth: '1300px', zIndex: 1 ,rowGap:'1px' }}>
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
  );
};

export default Signup;


