import { useState, useEffect, useRef } from 'react';
import Calendar from 'react-calendar'
import { Link } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css'
import { FiBell } from 'react-icons/fi';
import { FaBell } from 'react-icons/fa';
import { FaBars } from "react-icons/fa";
import { FaTimes } from 'react-icons/fa';
import { AiOutlineHome, AiFillHome } from 'react-icons/ai';
import { HiOutlineUserGroup, HiUserGroup } from 'react-icons/hi2';
import { FaQuestionCircle, FaRegQuestionCircle } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import Customcalendar from './Customcalendar';



const Dashboard = () => {

    const [hovered, setHovered] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [topVisible, setTopVisible] = useState(false);
    const [activeIcon, setActiveIcon] = useState(null);
    const [hoveredIcon, setHoveredIcon] = useState(null);
    const [notificationOpen, setNotificationOpen] = useState(false);
    const [fadeIn, setFadeIn] = useState(false);
    const bellRef = useRef(null);
    const [bellPosition, setBellPosition] = useState({ top: 0, left: 0 });

    useEffect(() => {
        if (notificationOpen && bellRef.current) {
            const rect = bellRef.current.getBoundingClientRect();
            setBellPosition({ top: rect.bottom + 8, left: rect.right - 250 });
        }
    }, [notificationOpen]);



    useEffect(() => {
        setTimeout(() => {
            setSidebarVisible(true);
            setTopVisible(true);
            setFadeIn(true);
        }, 100);
    }, []);




    return (
        <>
            <div className="d-flex flex-wrap container-fluid min-vh-100 d-flex  text-white   " style={{ background: 'linear-gradient(to bottom, #010C19 0%, #053D7F 100%)' }}>
                {/* SIDEBAR */}
                <div className={`sidebar-slide ${sidebarVisible ? 'show' : ''} d-flex flex-column align-items-center  pt-2  my-2  rounded-4`} style={{ height: "96vh", width: "80px", backgroundColor: 'rgba(0, 1, 3, 0.4)', border: "1px solid #1152A2" }}>

                    <div className="  rounded-4 p-1" style={{ backgroundColor: "#0a2039ff" }}><img src="/logo.png" width={50} height={50} /></div>
                    <div className="d-flex flex-column justify-content-between" style={{ minHeight: "80vh" }}>
                        <div className="d-flex flex-column gap-5 py-5 ">
                            <div style={{ width: "100%", cursor: "pointer", color: (activeIcon === "home" || hoveredIcon === "home") ? "#ffffff" : "#ffffffff" }}
                                onClick={() => setActiveIcon("home")}
                                onMouseEnter={() => setHoveredIcon("home")}
                                onMouseLeave={() => setHoveredIcon(null)}>
                                {(activeIcon === "home" || hoveredIcon === "home") ? (
                                    <AiFillHome size={30} />
                                ) : (
                                    <AiOutlineHome size={30} />
                                )}


                            </div>

                            <div style={{ width: "100%", cursor: "pointer", color: (activeIcon === "group" || hoveredIcon === "group") ? "#ffffff" : "#ffffffff" }}
                                onClick={() => setActiveIcon("group")}
                                onMouseEnter={() => setHoveredIcon("group")}
                                onMouseLeave={() => setHoveredIcon(null)}>
                                {(activeIcon === "group" || hoveredIcon === "group") ? (
                                    <HiUserGroup size={30} />
                                ) : (
                                    <HiOutlineUserGroup size={30} />
                                )}


                            </div>
                            <div className="d-flex justify-content-center align-items-center" style={{ width: "100%", cursor: "pointer", color: (activeIcon === "friend" || hoveredIcon === "friend") ? "#ffffff" : "#ffffffff" }}
                                onClick={() => setActiveIcon("friend")}
                                onMouseEnter={() => setHoveredIcon("friend")}
                                onMouseLeave={() => setHoveredIcon(null)}>
                                <img
                                    src={
                                        activeIcon === "friend" || hoveredIcon === "friend"
                                            ? "/friendfill.png"
                                            : "/friendoutline.png"
                                    }
                                    alt="Add Friend"
                                    width={25}
                                    height={25}
                                    style={{ objectFit: "contain" }}
                                />


                            </div>
                            <div style={{ width: "100%", cursor: "pointer", color: (activeIcon === "faq" || hoveredIcon === "faq") ? "#ffffff" : "#ffffffff" }}
                                onClick={() => setActiveIcon("faq")}
                                onMouseEnter={() => setHoveredIcon("faq")}
                                onMouseLeave={() => setHoveredIcon(null)}>
                                {(activeIcon === "faq" || hoveredIcon === "faq") ? (
                                    <FaQuestionCircle size={30} />
                                ) : (
                                    <FaRegQuestionCircle size={30} />
                                )}


                            </div>

                        </div>
                        <div style={{ width: "100%", cursor: "pointer", color: (activeIcon === "group" || hoveredIcon === "group") ? "#ffffff" : "#ffffffff" }}>

                            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}> <FiLogOut size={30} /></Link>


                        </div>
                    </div>

                </div>

                <div className="flex-grow-1  p-3 my-2">
                    {/* notification and avatar */}
                    <div className={`d-flex gap-3 justify-content-end align-items-center  mb-4 slide-down ${topVisible ? 'show' : ''}`}>
                        <div style={{ position: 'relative' }}>
                            {/* Notification Bell */}
                            <div
                                onClick={() => setNotificationOpen(!notificationOpen)}
                                onMouseEnter={() => setHovered(true)}
                                onMouseLeave={() => setHovered(false)}
                                style={{ cursor: 'pointer', position: 'relative' }}
                            >
                                {hovered || notificationOpen ? (
                                    <FaBell size={28} color="white" />
                                ) : (
                                    <FiBell size={28} color="#ffffff" />
                                )}
                            </div>


                        </div>

                        <button onClick={() => setProfileOpen(true)} className="d-flex border rounded-5 small-padding align-items-center" style={{ backgroundColor: "#04356E", color: "white" }}>
                            <div className="pe-3">
                                <img style={{ width: "35px", height: "35px" }} src="/profile.png" className="rounded-circle" alt="Profile" />
                            </div>
                            <div className=" d-flex align-items-center align-items-center pe-3"><FaBars size={15} /></div>
                        </button>
                    </div>

                    {/* CALENDAR & CHARTS */}
                    <div className={`rounded-4 main-content fade-in-section ${fadeIn ? 'show' : ''}`} style={{ height: "85vh", backgroundColor: 'rgba(0, 1, 3, 0.4)', border: "1px solid #1152A2" }}>
                        <div><Customcalendar /></div>
                        <div>Charts</div>
                    </div>


                </div>


                 {/* Notification drawer */}
                {notificationOpen && (
                    <div
                        className="notification-drawer"
                        style={{
                            position: 'absolute',
                            top: `${bellPosition.top}px`,
                            left: `${bellPosition.left}px`,
                            width: '15vw',
                            height:'50vh',
                            backgroundColor: '#021b38',
                            color: 'white',
                            border: '1px solid #1152A2',
                            borderRadius: '10px',
                            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
                            zIndex: 9999,
                            animation: 'slideDown 0.3s ease forwards',
                        }}
                    >
                        <div className="px-3 py-2">
                            <div>🔔 Trip to Manali added</div>
                            <div>✅ Your invite was accepted</div>
                            <div>💬 New message in Goa group</div>
                        </div>
                    </div>
                )}

                {/* Profile drawer */}
                <div
                    className={`profile-drawer ${profileOpen ? "open" : ""}`}
                    onClick={() => setProfileOpen(false)}
                >
                    <div className="drawer-content px-4" onClick={e => e.stopPropagation()}>

                        <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center">
                                <div className="pe-3">
                                    <img style={{ width: "45px", height: "45px" }} src="/profile.png" className="rounded-circle" alt="Profile" />
                                </div>
                                <div>
                                    NAME
                                </div>
                            </div>

                            <button className="btn d-flex align-items-center align-items-center" style={{ border: 'none' }} onClick={() => setProfileOpen(false)}>
                                <FaTimes
                                    size={25}
                                    style={{
                                        cursor: 'pointer', color: '#ffffff',       // your base color
                                        transition: 'none'
                                    }}
                                    onClick={() => setProfileOpen(false)}

                                />
                            </button>
                        </div>
                        <div className="d-flex flex-column gap-3 py-5">
                            <Link to="/profile" style={{ textDecoration: 'none', color: 'white' }}><div>Profile</div></Link>
                            <div>Account Settings</div>
                            <div>View Friends</div>
                            <div>Manage Payments</div>

                        </div>


                    </div>
                </div>
                
            </div>


        </>



    )
}

export default Dashboard
