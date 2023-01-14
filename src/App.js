
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import About from './pages/About';
import AutoPlay from './pages/skills';


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AutoPlay />
      <About />
    </div>
  );
}

export default App;
