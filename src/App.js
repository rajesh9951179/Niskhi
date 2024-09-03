import './App.css';
import NavBar from './components/Navbar';
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
import VideoPlayer from './components/VideoPlayer';
import Footer from './components/footer';
import Card from './components/Card';
import GridsVideo from './components/GridsVideo';

// Import images for the first Card component
import card_1_1 from './images/card_1_1.jpg';
import card_2_1 from './images/card_2_1.jpg';
import card_3_1 from './images/card_3_1.jpg';
import card_4_1 from './images/card_4_1.jpg';
import card_5_1 from './images/card_5_1.jpg';
import card_6_1 from './images/card_6_1.jpg';

// Import images for the second Card component
import card_1_2 from './images/card_1_2.jpg';
import card_2_2 from './images/card_2_2.jpg';
import card_3_3 from './images/card_3_3.jpg';
import card_4_4 from './images/card_4_4.jpg';
import card_5_5 from './images/card_5_5.jpg';
import card_6_6 from './images/card_6_6.jpg';


// Import images for the first Grids component
import image_1_1 from './images/image_1_1.jpg';
import image_2_1 from './images/image_2_1.jpg';
import image_3_1 from './images/image_3_1.jpg';
import image_4_1 from './images/image_4_1.jpg';
import image_5_1 from './images/image_5_1.jpg';
import image_6_1 from './images/image_6_1.jpg';
import image_1_2 from './images/image_1_2.jpg';
import image_2_2 from './images/image_2_2.jpg';
import image_3_2 from './images/image_3_2.jpg';
import image_4_2 from './images/image_4_2.jpg';
import image_5_2 from './images/image_5_2.jpg';
import image_6_2 from './images/image_6_2.jpg';

// Import images for the second Grids component
import front_1 from './images/front_1.jpg';
import hover_1 from './images/hover_1.jpg';
import front_2 from './images/front_2.jpg';
import hover_2 from './images/hover_2.jpg';
import front_3 from './images/front_3.jpg';
import hover_3 from './images/hover_3.jpg';
import front_4 from './images/front_4.jpg';
import hover_4 from './images/hover_4.jpg';
import front_5 from './images/front_5.jpg';
import hover_5 from './images/hover_5.jpg';
import front_6 from './images/front_6.jpg';
import hover_6 from './images/hover_6.jpg';

import video_2 from './images/video-2.mp4';
import video_3 from './images/video-3.mp4';
import video_4 from './images/video-4.mp4';
import video_5 from './images/video-5.mp4';
import video_6 from './images/video-6.mp4';
import video_7 from './images/video-7.mp4';
// import video_2_1 from './videos/video_2_1.mp4';
// import video_3_1 from './videos/video_3_1.mp4';
// import video_4_1 from './videos/video_4_1.mp4';
// import video_5_1 from './videos/video_5_1.mp4';
// import video_6_1 from './videos/video_6_1.mp4';
// import video_1_2 from './videos/video_1_2.mp4';
// import video_2_2 from './videos/video_2_2.mp4';
// import video_3_2 from './videos/video_3_2.mp4';
// import video_4_2 from './videos/video_4_2.mp4';
// import video_5_2 from './videos/video_5_2.mp4';
// import video_6_2 from './videos/video_6_2.mp4';

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
      <Home />
      <Grids 
        images={[image_1_1, image_2_1, image_3_1, image_4_1, image_5_1, image_6_1]}
        hoverImages={[image_1_2, image_2_2, image_3_2, image_4_2, image_5_2, image_6_2]}
        names={['New Dress', 'New Shirt', 'New Jacket', 'New Skirt', 'New Hat', 'New Shoes']}
        prices={['5500', '3500', '2500', '4500', '1500', '2000']}
      />
      
      <div className='programs'>
        <Card image={card_1_1} title="Elegant Evening Gown" itemCount="50" />
        <Card image={card_5_1} title="Cape Dress" itemCount="10" />
        <Card image={card_2_1} title="Sapphire Serenity Dress" itemCount="30" />
        <Card image={card_3_1} title="Radiant Red Dress" itemCount="20" />
        <Card image={card_4_1} title="Opulent Silk Dress" itemCount="40" />
        <Card image={card_6_1} title="Classic Wrap Dress" itemCount="15" />
      </div>
      
      <VideoPlayer /> 
        
      <Grids
       images={[front_1, front_2, front_3, front_4, front_5, front_6]}
       hoverImages={[hover_1, hover_2, hover_3, hover_4, hover_5, hover_6]}
       names={['Chiffon Dress', 'Shirt', 'Jacket', 'Skirt', 'Hat', 'Shoes']}
       prices={['5000', '3000', '2000', '4000', '1000', '1500']}
      />

      
      
      <div className='programs'>
        <Card image={card_1_2} title="Kameez Shalwar" itemCount="50" />
        <Card image={card_2_2} title="Bandhgala" itemCount="30" />
        <Card image={card_3_3} title="Bridal Ghagra Choli" itemCount="20" />
        <Card image={card_4_4} title="Bridal pattu Saree" itemCount="40" />
        <Card image={card_5_5} title="Salwar Kameez " itemCount="10" />
        <Card image={card_6_6} title="Gown" itemCount="15" />
      </div>

      <GridsVideo 
      
      videos={[video_2, video_3, video_4, video_5, video_6, video_7]}
      // hoverVideos={[video_1_2, video_2_2, video_3_2, video_4_2, video_5_2, video_6_2]}
      names={['New Dress', 'New Shirt', 'New Jacket', 'New Skirt', 'New Hat', 'New Shoes']}
      prices={['5500', '3500', '2500', '4500', '1500', '2000']}
      />
      <Footer />
    </div>
  );
}

export default App;
