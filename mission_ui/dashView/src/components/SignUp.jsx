import React, { useState, useEffect } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link} from 'react-router-dom';


const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);
  const togglePassword1 = () => setShowConfirmPassword(!showConfirmPassword);
  useEffect(() => {
    document.body.style.background = 'linear-gradient(to bottom, #010C19 0%, #053D7F 100%)';
    document.body.style.minHeight = '100vh'; 

    
    return () => {
        
  
      document.body.style.background = '';
    };
  }, []);


  return (
    <div  >
      <img
        src="/logo.png"
        alt="Background"
        className="position-absolute"
        style={{

          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
          width: '80vw',
          height: '100vh',
          objectFit: 'contain', // or 'cover' based on your needs
          opacity: 0.2,
        }}
      />

      <div >


        <div >
          <h1 className="text-white mx-5 mt-4" style={{ fontFamily: "Bebas Neue", fontSize: "64px" }} >SIGN UP</h1>
          <p className="text-white mx-5" style={{ fontFamily: "poppins", fontSize: "22px" }}>
            Already have an account ? <Link to = "/signin"><span className="font-bold text-[#1d3557]" style={{ fontFamily: "poppins", color: '#92A7C1', fontWeight: 'bold', fontSize: "22px" }}>Sign in</span></Link>
          </p>

          <div className={' text-white  '}
            style={{
              borderRadius: "32px",
              marginLeft: '50px',
              height: '80vh',
              width: '50vw',
              border: '1px solid #92A7C1',
              backgroundColor: 'rgba(1, 8, 37, 0.4)'
            }}>
            <div style={{ marginLeft: '50px' }}>
              <div >
                <div className={'  d-flex mt-4'}>
                  <div style={{ fontFamily: "poppins", fontSize: "20px" }}>First Name</div>
                  <div style={{ fontFamily: "poppins", fontSize: "20px", marginLeft: '30%' }}>Last Name</div>
                </div>
                <div className={'d-flex mt-2'} >
                  <div >
                    <input style={{ borderRadius: "6.5px", width: '18vw' }} type="text" />
                  </div>

                  <div style={{ marginLeft: '6%' }}>
                    <input style={{ borderRadius: "6.5px", width: '18vw' }} type="text" />
                  </div>
                </div>
              </div>

              <div>
                <div className=" mt-4 " style={{ fontFamily: "poppins", fontSize: "20px" }}>
                  <label >Email ID</label>

                </div>
              </div>
              <div>
                <div className=" mt-2 ">
                  <input style={{ borderRadius: "6.5px", width: '36vw' }} type="text" />
                </div>
              </div>
              <div>
                <div className=" mt-4 " style={{ fontFamily: "poppins", fontSize: "20px" }}>
                  <label >Mobile Number</label>

                </div>
                <div className=" mt-2 ">
                  <input style={{ borderRadius: "6.5px", width: '36vw' }} type="text" />
                </div>
              </div>
              <div>
                <div className=" mt-4 " style={{ fontFamily: "poppins", fontSize: "20px" }}>
                  <label >Password</label>
                </div>
                <div className=" mt-2 ">
                  <input style={{ borderRadius: "6.5px", width: '36vw' }} type="text" />
                  <button style={{
                    backgroundColor: 'transparent', color: '#010D1B', border: 'none',
                    outline: 'none', marginLeft: '-30px'
                  }}
                    type="button"

                    onClick={togglePassword}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

              </div>
              <div>
                <div className=" mt-4 " style={{ fontFamily: "poppins", fontSize: "20px" }}>
                  <label >Confirm Password</label>
                </div>
                <div className=" mt-2 ">
                  <input style={{ borderRadius: "6.5px", width: '36vw' }} type="text" />
                  <button style={{
                    backgroundColor: 'transparent', color: '#010D1B', border: 'none',
                    outline: 'none', marginLeft: '-30px'
                  }}
                    type="button"

                    onClick={togglePassword1}
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

              </div>
              <button className=" text-white mt-4 " style={{ fontFamily: "poppins", border: '2px solid #92A7C1', backgroundColor: "#043978", width: "13vw", borderRadius: "18px", fontSize: "20px" }}>
                Create Account
              </button>
            </div>






          </div>




        </div>
      </div>
    </div>
  );
};

export default SignUp