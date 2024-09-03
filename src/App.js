import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import NavBar from './customerComponents/components/Navbar';
import Footer from './customerComponents/components/footer';
import Home from './customerComponents/components/Home';
import NewArrivals from './customerComponents/components/NewArrivals';
import BestSeller from './customerComponents/components/BestSeller';
import Women from './customerComponents/components/Women';
import Men from './customerComponents/components/Men';
import Kids from './customerComponents/components/Kids';
import Collection from './customerComponents/components/Collection';
import ReadyToShip from './customerComponents/components/ReadyToShip';
import SpecialPrice from './customerComponents/components/SpecialPrice';
import Lehenga from './customerComponents/components/Lehenga';
import Anarkali from './customerComponents/components/Anarkali';
import Sarees from './customerComponents/components/Sarees';
import Dresses from './customerComponents/components/Dresses';
import Jackets from './customerComponents/components/Jackets';
import KurtaSets from './customerComponents/components/KurtaSets';
import Shirts from './customerComponents/components/Shirts';
import KidsDresses from './customerComponents/components/KidsDresses';
import LehengaKids from './customerComponents/components/LehengaKids';
import GhararaSets from './customerComponents/components/GhararaSets';
import SlideoutSearchbox from './customerComponents/components/SlideoutSearchbox';
import Login from './customerComponents/components/Login';
import Createaccount from './customerComponents/components/Createaccount';
import WhatsAppButton from './customerComponents/components/WhatsAppButton';
import Policies from './customerComponents/components/Policies';
import TrackmyOrder from './customerComponents/components/TrackmyOrder';
import Shipping from './customerComponents/components/Shipping';
import AboutUs from './customerComponents/components/AboutUs';
import Contactus from './customerComponents/components/Contactus';
import FAQ from './customerComponents/components/FAQ';
import Cart from './customerComponents/components/Cart';
import ProductPage from './customerComponents/components/ProductPage';
import Careers from './customerComponents/components/Careers';
import Terms from './customerComponents/components/Terms';
import SizeGuide from './customerComponents/components/SizeGuide';




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
        <Route path="/ProductPage" element={<ProductPage/>}/>
        <Route path ="/Cart" element={<Cart/>}/>
        <Route path="/Careers" element={<Careers />} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="/SizeGuide" element={<SizeGuide />} />

        



        {/* <Route path ='/Cart' element={<Cart/>}/> */}
        

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
