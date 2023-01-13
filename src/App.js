
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/About';
import Skill from './pages/skills';


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About />
      <Skill />
    </div>
  );
}

export default App;
