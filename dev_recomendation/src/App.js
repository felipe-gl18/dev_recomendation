import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Navbar from './Components/navbar';
import Footer from './Components/footerComponent';
import Home from './Components/homeComponent';
import About from './Components/aboutComponent';
import CreateRecomendation from './Components/createRecomendationsComponent';
import RecomendationPage from './Components/recomendation';

import { useEffect, useState } from 'react';

function App() {

  const [menuBarsActived, setMenuBarsActived] = useState(false);

  return (
    <Router>
        <div className='App'>
          <Navbar 
            menuBarsActived={menuBarsActived}
            setMenuBarsActived={setMenuBarsActived}
           />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/create/recomendation' element={<CreateRecomendation />} />
            <Route path='/about' element={<About />} />
            <Route exact path='recomendations/:id' element={<RecomendationPage />} />
          </Routes>
          <Footer />
        </div>
    </Router>
  );
}

export default App;
