import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Login from './Pages/Login/Login'
import JobPortal from './Pages/Job Portal/JobPortal';
import Footer from './Components/Footer/Footer';
import Signup from './Pages/Sign up/Signup';
import {ToastContainer} from "react-toastify"
import { useEffect, useState } from 'react';
import { auth } from './Context/firebase';

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    })
  })
  return (
    <BrowserRouter>
    
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={user? <Navigate to="/"/>: <Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/Job-Portal' element={<JobPortal />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
