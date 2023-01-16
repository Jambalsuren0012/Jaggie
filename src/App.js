
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import About from './pages/About';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Hero/>}/>
      <Route path="/About"  element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
