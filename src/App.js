import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import NavBar from './components/Navbar';
import Footer from './components/footer';
import Home from './components/Home';
import NewArrivals from './components/NewArrivals';
import BestSeller from './components/BestSeller';
import Women from './components/Women';
import Men from './components/Men';
import Kids from './components/Kids';
import Collection from './components/Collection';
import ReadyToShip from './components/ReadyToShip';
import SpecialPrice from './components/SpecialPrice';
import Lehenga from './components/Lehenga';
import Anarkali from './components/Anarkali';
import Sarees from './components/Sarees';
import Dresses from './components/Dresses';
import Jackets from './components/Jackets';
import KurtaSets from './components/KurtaSets';
import Shirts from './components/Shirts';
import KidsDresses from './components/KidsDresses';
import LehengaKids from './components/LehengaKids';
import GhararaSets from './components/GhararaSets';
import SlideoutSearchbox from './components/SlideoutSearchbox';
import Login from './components/Login';
import Createaccount from './components/Createaccount';
import WhatsAppButton from './components/WhatsAppButton';
import Policies from './components/Policies';
import TrackmyOrder from './components/TrackmyOrder';
import Shipping from './components/Shipping';
import AboutUs from './components/AboutUs';
import Contactus from './components/Contactus';
import FAQ from './components/FAQ';





function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const userLoggedIn = localStorage.getItem('isLoggedIn');
    if (userLoggedIn && location.pathname !== '/') {
      setIsLoggedIn(true);
    }
  }, [location.pathname]);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', true);
    navigate('/Home', { replace: true });
  };
  const handleAccountCreated = () => {
    navigate('/Login');
  };

  const isAuthPage = () => {
    const authPages = ['/Login', '/Createaccount'];
    return authPages.includes(location.pathname);
  };

  return (
    <div>
      {isLoggedIn && !isAuthPage() && (
        <>
          <NavBar fixed="top" /> 
          <WhatsAppButton/>
        </>
      )}
      
      <Routes>
      <Route path="/" element={isLoggedIn ? <Home /> : <Login onLogin={handleLogin} />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/NewArrivals" element={<NewArrivals />} />
        <Route path="/BestSeller" element={<BestSeller />} />
        <Route path="/Women" element={<Women />} />
        <Route path="/Men" element={<Men />} />
        <Route path="/Kids" element={<Kids />} />
        <Route path="/Collection" element={<Collection />} />
        <Route path="/ReadyToShip" element={<ReadyToShip />} />
        <Route path="/SpecialPrice" element={<SpecialPrice />} />
        <Route path="/Lehenga" element={<Lehenga />} />
        <Route path="/Anarkali" element={<Anarkali />} />
        <Route path="/Sarees" element={<Sarees />} />
        <Route path="/Dresses" element={<Dresses />} />
        <Route path="/Jackets" element={<Jackets />} />
        <Route path="/KurtaSets" element={<KurtaSets />} />
        <Route path="/Shirts" element={<Shirts />} />
        <Route path="/KidsDresses" element={<KidsDresses />} />
        <Route path="/LehengaKids" element={<LehengaKids />} />
        <Route path="/GhararaSets" element={<GhararaSets />} />
        <Route path="/SlideoutSearchbox" element={<SlideoutSearchbox />} />
        <Route path="/Login" element={<Login onLogin={handleLogin} />} />
        <Route path="/Createaccount" element={<Createaccount onAccountCreated={handleAccountCreated} />} />
        <Route path="/firebase" element={<firebase />} />
        <Route path="/Policies" element={<Policies />} />
        <Route path="/TrackmyOrder" element={<TrackmyOrder />} />
        <Route path="/Shipping" element={<Shipping />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/FAQ" element={<FAQ />} />

        

      </Routes>
      {isLoggedIn && !isAuthPage() && (
        <>
          <Footer /> 
        </>
      )}
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
