
import './App.css';
import NavBar  from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewArrivals from './components/NewArrivals';
import BestSeller from './components/BestSeller';
import Women from './components/Women';
import Men from './components/Men';
import Kids from './components/Kids';
import Collection from './components/Collection';
import ReadyToShip from './components/ReadyToShip';
import SpecialPrice from './components/SpecialPrice';
import Home from './components/Home';
import Grids from './components/Grids';
import VideoCarousel from './components/VideoCarousel'
function App() {
  return (
    <div>
    <Router>
      <NavBar />
      <Routes>
      <Route path="/NewArrivals" element={<NewArrivals />} />
        <Route path="/BestSeller" element={<BestSeller />} />
        <Route path="/Women" element={<Women />} />
        <Route path="/Men" element={<Men />} />
        <Route path="/Kids" element={<Kids />} />
        <Route path="/Collection" element={<Collection />} />
        <Route path="/ReadyToShip" element={<ReadyToShip />} />
        <Route path="/SpecialPrice" element={<SpecialPrice />} />
      </Routes>
    </Router>
    <Home></Home>
    <Grids></Grids>
    <VideoCarousel></VideoCarousel>
    </div>
  );
}

export default App;
