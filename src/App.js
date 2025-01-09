import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './Pages/Login/Login'
import JobPortal from './Pages/Job Portal/JobPortal';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/Job-Portal' element={<JobPortal />} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
