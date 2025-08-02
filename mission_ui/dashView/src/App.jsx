// import React from 'react';
// import Home from './components/Home.jsx'
// import SignIn from './components/SignIn.jsx';
// import SignUp from './components/SignUp.jsx';
// import Feature from './components/Feature.jsx';
// import Contact from './components/Contact.jsx';
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Dashboard from './components/Dashboard.jsx';
// import Profile from './components/Profile.jsx';
// import Customcalendar from './components/Customcalendar.jsx';




// const App = () => {
//   return (


//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/signin" element={<SignIn />} />
//       <Route path="/signup" element={<SignUp />} />
//       <Route path="/feature" element={<Feature />} />
//       <Route path="/contact" element={<Contact />} />
//       <Route path="/dashboard" element={<Dashboard />} />
//       <Route path="/profile" element={<Profile />} />
//       <Route path="/calendar" element={<Customcalendar />} />

//     </Routes>


//   )
// }

// export default App

import React from 'react';
import Home from './components/Home.jsx';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';
import Feature from './components/Feature.jsx';
import Contact from './components/Contact.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard.jsx';
import Profile from './components/Profile.jsx';
import Customcalendar from './components/Customcalendar.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FriendsPage from './components/FriendsPage';

const App = () => {
  return (
    <>

      <Routes>

        <Route path="/friends" element={<FriendsPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/calendar" element={<Customcalendar />} />
        
      </Routes>
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
    </>
  );
};

export default App;
