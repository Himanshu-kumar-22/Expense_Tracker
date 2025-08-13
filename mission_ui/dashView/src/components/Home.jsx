import React, { useState, useEffect } from 'react';
import LandingLayout from './LandingLayout.jsx';
import { Link } from 'react-router-dom';
import Spline from '@splinetool/react-spline';
import { motion } from "motion/react";
const Home = () => {
  const [active, setActive] = useState('Home');
  const words = [
    { text: 'Seamless' },
    { text: 'Smarter' },
    { text: 'Organized' },
    { text: 'Transparent' }
  ]
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // 2 seconds

    return () => clearInterval(timer);
  }, []);
  const FEATURE_CARDS = [
    {
      id: 1,
      icon: "/bell3.png",
      title: "Get notified who owes",
      alt: "Notification bell icon"
    },
    {
      id: 2,
      icon: "/graph.png",
      title: "Track balance and payments",
      alt: "Graph icon"
    },
    {
      id: 3,
      icon: "/calculator.png", // Changed from duplicate graph.png
      title: "Split expenses easily",
      alt: "Calculator icon"
    },
    {
      id: 4,
      icon: "/group.png",
      title: "Create and manage groups",
      alt: "Group icon"
    },
    {
      id: 5,
      icon: "/group.png",
      title: "Create and manage groups",
      alt: "Group icon"
    }
  ];

  const FeatureCard = ({ icon, title, alt, cardColor }) => (
    <div
      style={{
        ...cardColor,
        height: '300px',
        width: '250px',
        borderRadius: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '40px 24px',
        opacity: 0.7,
        zIndex: 1,
        boxSizing: 'border-box',
        transition: 'all 0.3s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.opacity = '1';
        e.currentTarget.style.transform = 'translateY(-5px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.opacity = '0.7';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {/* Icon */}
      <div style={{ fontSize: '20px' }}>
        <img
          src={icon}
          alt={alt}
          height="100"
          width="100"
          style={{ objectFit: 'contain' }}
        />
      </div>

      {/* Text */}
      <div
        style={{
          textAlign: 'center',
          fontSize: '20px',
          fontWeight: '500',
          lineHeight: '28px',
          color: 'inherit'
        }}
      >
        {title}
      </div>

      {/* Arrow */}
      <Link to='/feature' style={{ textDecoration: 'none' }}>
        <div
          style={{
            fontSize: '28px',
            marginLeft: '150px',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateX(5px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateX(0)';
          }}
        >
          <img
            src="right-chevron.png"
            alt="Arrow right"
            height={50}
            width={50}
            style={{ objectFit: 'contain' }}
          />
        </div>
      </Link>
    </div>
  );


  return (

    <LandingLayout active={active} setActive={setActive}>
      {({ mystyle, btnBackground, btnborder, cardColor }) => (
        <>

          {/* Hero Section */}
          <div className="relative h-[75vh] text-white flex custom-flex-layout justify-between items-center overflow-hidden " style={{ paddingTop: '4rem' }}>
            <div className="w-1/2 px-5 items-center justify-center">
              <motion.h1
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{

                  stiffness: 40,
                  damping: 25,
                  delay: 0.3,
                  duration: 0.7
                }}
                className="display-2 mb-3" style={{ ...mystyle, fontFamily: 'Bebas Neue, sans-serif' }}>
                MAKING SHARED <br /> EXPENSES EFFORTLESS</motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{

                  stiffness: 40,
                  damping: 25,
                  delay: 0.5,
                  duration: 0.9
                }}
                className="lead" style={{ ...mystyle, fontFamily: 'Poppins, sans-serif' }}>
                Track shared expenses with roommates, friends, and travel groups effortlessly.
              </motion.p>
              <Link to="/signup"> <motion.button
               initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{

                  stiffness: 40,
                  damping: 25,
                  delay: 0.7,
                  duration: 1
                }}

                whileTap={{ scale: 0.9 }}
                className="btn rounded-pill my-4 px-4 py-2 "
                style={{ ...btnborder, ...btnBackground, ...mystyle, fontFamily: 'Poppins, sans-serif' }}
              >
                Ready to split smarter?
              </motion.button></Link>
            </div>
            <div className="w-1/2 flex items-center justify-center">
              <Spline className="absolute  " style={{}} scene="https://prod.spline.design/OTQHL6h2i5jg-uA5/scene.splinecode" />

            </div>
          </div>

          {/* cards */}
          <div className="d-flex align-items-center flex-wrap px-5 "
            style={{
              marginTop: '', // Half of card height
              left: 0,
              width: '100%',
              display: 'flex',
              flexWrap: 'wrap',

              gap: '2.5rem',
              zIndex: 2
            }}>
            {FEATURE_CARDS.map((card) => (
              <FeatureCard
                key={card.id}
                icon={card.icon}
                title={card.title}
                alt={card.alt}
                cardColor={cardColor}
              />
            ))}


          </div>
        </>
      )
      }
    </LandingLayout >
  );
};

export default Home;
