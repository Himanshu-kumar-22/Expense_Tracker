import React from 'react';
import Home from './components/Home.jsx'
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';
import Feature from './components/Feature.jsx';
import Contact from './components/Contact.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard.jsx';
import Profile from './components/Profile.jsx';
import Customcalendar from './components/Customcalendar.jsx';




const App = () => {
  return (


    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/feature" element={<Feature />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/calendar" element={<Customcalendar />} />

    </Routes>


  )
}

export default App