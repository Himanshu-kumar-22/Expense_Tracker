
import { FaSun, FaMoon } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = ({
  darkMode,
  toggleMode,
  mystyle,
  btnborder,
  btnBackground,
  underlining,
  setActive,

}) => {
  const navigate = useNavigate();
  const [activate, setActivate] = useState("Home");
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    // After first render, disable animation
    setIsFirstLoad(false);
  }, []);

  const links = [
    { label: "Home", path: "/" },
    { label: "Features", path: "/feature" },
    { label: "Contact", path: "/contact" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen)

  return (

    <>
      <div className="w-full flex overflow-hidden flex-wrap justify-between items-center py-4 px-4" style={{ rowGap: '1rem' }}>
        <div className="flex flex-grow flex-wrap items-center" style={{ gap: '5rem', fontFamily: 'Poppins, sans-serif', minWidth: 0 }}>
          {/* Logo + Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{

              damping: 25,
              delay: 0.3,
              duration: 0.8
            }}
            className="flex items-center shrink-0 mr-4">
            <a href='/'><img src="/logo.png" alt="Logo" width={60} height={60} /></a>
            <a className=" no-underline " style={{ ...mystyle, fontSize: '26px' }} href="/">
              Expense Tracker
            </a>
          </motion.div>

          {/* Nav Links */}
          <div
            className=" show-on-lg-up flex items-center "
            style={{ gap: "2rem", fontSize: "16px", whiteSpace: "nowrap" }}
          >
            {links.map((link, i) => (
              <motion.div
                key={link.label}
                initial={isFirstLoad ? { opacity: 0, y: -20 } : false}
                animate={isFirstLoad ? { opacity: 1, y: 0 } : false}
                transition={{
                  type: "spring",
                  damping: 20,
                  delay: 0.5 + i * 0.2,
                }}
                onClick={() => {
                  setActive;
                  setActivate(link.label);
                  navigate(link.path);
                }}
                className={`relative cursor-pointer pb-1 
        after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-white 
        after:transition-all after:duration-300 after:ease-in-out 
        ${activate === link.label ? "after:w-full" : "after:w-0 hover:after:w-full"}`}
        style={mystyle}
              >
                {link.label}
              </motion.div>
            ))}
          </div>

        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{

            damping: 25,
            delay: 0.3,
            duration: 0.8
          }}
          className="flex flex-wrap items-center gap-3 lg:mt-0 shrink-0 font-[Poppins,sans-serif]">
          {/* Toggle */}
          <div
            onClick={toggleMode}
            style={{
              cursor: 'pointer',
              width: '50px',
              height: '26px',
              backgroundColor: darkMode ? '#C1C7E3' : ' #032248',
              borderRadius: '20px',
              border: `1px solid ${darkMode ? '#02172F' : '#A1B5CD'}`,
              display: 'flex',
              alignItems: 'center',
              padding: '4px',
              transition: 'all 0.5s ease',
            }}
          >
            <div
              style={{
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                backgroundColor: darkMode ? '#021933' : ' #A1B5CE',
                transform: darkMode ? 'translateX(24px)' : 'translateX(0px)',
                transition: 'all 0.5s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {darkMode ? (
                <FaSun color="#C1C7E3" size={12} />
              ) : (
                <FaMoon color="#032248" size={12} />
              )}
            </div>
          </div>



          {/* Sign In/Sign Up Button */}
          <Link className="no-underline" to="/signup">
            <button
              className=" py-1 px-4 show-on-lg-up"
              style={{ ...btnborder, ...btnBackground, ...mystyle, fontSize: '14px', fontFamily: 'Poppins', borderRadius: '17px' }}
            >
              Sign Up/In
            </button>
          </Link>
        </motion.div>

        <div className=" custom-hide-on-md flex items-center p-4">
          <motion.button
            whileTap={{ scale: 0.7 }}
            onClick={toggleMenu}
            style={{ ...btnborder, ...btnBackground, ...mystyle, borderRadius: "8px", }}
          >
            {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}

          </motion.button>

        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
        transition={{


          duration: 0.5
        }}
        className=" custom-hide-on-md overflow-hidden " style={{ ...mystyle, ...btnborder, ...btnBackground, display: "flex", flexDirection: "column", }}>
        <nav className="p-4 " style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {[
            { label: "Home", path: "/" },
            { label: "Features", path: "/feature" },
            { label: "Contact", path: "/contact" },

          ].map((link) => (
            <div
              key={link.label}
              onClick={(toggleMenu) => {
                setActivate(link.label);
                navigate(link.path);
              }}
              className={"relative cursor-pointer "}
            >
              {link.label}
            </div>
          ))}


        </nav>
        <div className="p-2 ">
          <Link className="no-underline" to="/signup">
            <button
              className=" py-1 px-4 w-full "
              style={{ ...btnborder, ...btnBackground, ...mystyle, fontSize: '14px', fontFamily: 'Poppins', borderRadius: '10px' }}
            >
              Sign Up/In
            </button>
          </Link>

        </div>

      </motion.div>
    </>



  );
};

export default Navbar;
