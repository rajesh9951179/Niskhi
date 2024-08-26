import React, { useState } from 'react';
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

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('/Home'); // Redirect to Home page after login
  };

  const handleAccountCreated = () => {
    navigate('/Login'); // Redirect to Login after account creation
  };

  const isAuthPage = location.pathname === '/Login' || location.pathname === '/Createaccount';

  return (
    <>
      {/* Conditionally render NavBar and Footer based on login status and path */}
      {isLoggedIn && !isAuthPage && <NavBar />}
      
      <Routes>
        {!isLoggedIn ? (
          <>
            <Route path="/" element={<Login onLogin={handleLogin} />} />
            <Route path="/Home" element={<Home onLogin={handleLogin} />} />
            <Route path="/Createaccount" element={<Createaccount onAccountCreated={handleAccountCreated} />} />
          </>
        ) : (
          <>
            <Route path="/Home" element={<Home />} />
            <Route path="/NewArrivals" element={<NewArrivals />} />
            <Route path="/BestSeller" element={<BestSeller />} />
            <Route path="/Women" element={<Women />} />
            <Route path="/Lehenga" element={<Lehenga />} />
            <Route path="/Anarkali" element={<Anarkali />} />
            <Route path="/Sarees" element={<Sarees />} />
            <Route path="/Dresses" element={<Dresses />} />
            <Route path="/Men" element={<Men />} />
            <Route path="/Kids" element={<Kids />} />
            <Route path="/Shirts" element={<Shirts />} />
            <Route path="/Jackets" element={<Jackets />} />
            <Route path="/KurtaSets" element={<KurtaSets />} />
            <Route path="/Collection" element={<Collection />} />
            <Route path="/ReadyToShip" element={<ReadyToShip />} />
            <Route path="/SpecialPrice" element={<SpecialPrice />} />
            <Route path="/KidsDresses" element={<KidsDresses />} />
            <Route path="/LehengaKids" element={<LehengaKids />} />
            <Route path="/GhararaSets" element={<GhararaSets />} />
            <Route path="/SlideoutSearchbox" element={<SlideoutSearchbox />} />
          </>
        )}
      </Routes>

      {/* Conditionally render Footer based on login status and path */}
      {isLoggedIn && !isAuthPage && <Footer />}
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
