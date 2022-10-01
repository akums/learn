

import React from 'react';
import './App.css';
import Fcleaning from '../Components/Fcleaning/Fcleaning';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';
import NotFound from '../NotFound/NotFound';
import ContactUs from '../Components/ContactUs/ContactUs';
import AboutUs from '../Components/AboutUs/AboutUs';
import Review from '../Components/Review/Review';
import StandardCleaning from '../Components/StandardCleaning/StandardCleaning';
import DeepCleaning from '../Components/DeepCleaning/DeepCleaning';
import AirBnb from '../Components/AirBnb/AirBnb';
import CommercialCleaning from '../Components/CommercialCleaning/CommercialCleaning';
import WindowsCleaning from '../Components/WindowsCleaning/WindowsCleaning';
import CarpetCleaning from '../Components/CarpetCleaning/CarpetCleaning';
import PostConstruction from '../Components/PostConstruction/PostConstruction';
import MoveInMoveOut from '../Components/MoveInMoveOut/MoveInMoveOut';




const App = ({ appName })=>{

  return (<>

    <div>
      <NavBar />
    </div>

    <section>
      <Routes>
      

        <Route path="*" element={ <NotFound /> } />
        <Route path="/" element={ <Fcleaning /> }></Route>
        <Route path='/about-us' element={ <AboutUs /> } />
        <Route path="/contacts" element={ <ContactUs /> } />
        <Route path='/reviews' element={ <Review /> } />
        <Route path="services/standard-cleaning" element={ <StandardCleaning/> } />
        <Route path="/services/deep-cleaning" element={ <DeepCleaning /> } />
        <Route path="/services/airbnb-cleaning" element={ <AirBnb/> } />
        <Route path="/services/commercial-cleaning" element={ <CommercialCleaning /> } />
        <Route path="/services/windows-cleaning" element={ <WindowsCleaning /> } />
        <Route path="/services/carpet-cleaning" element={ <CarpetCleaning /> } />
        <Route path="/services/post-construction" element={ <PostConstruction /> } />
        <Route path="/services/move-inout" element={ <MoveInMoveOut /> } />
        

      </Routes>
    </section>

    <div>
      <Footer />
    </div>

  </>)
};



export default App;