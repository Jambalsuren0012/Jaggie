import logo from './logo.svg';
import './App.css';
import { SocialIcon } from 'react-social-icons';
import { Typewriter } from 'react-simple-typewriter';
import {motion} from "framer-motion"


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <motion.div 
      initial={{ x:-1500}}
      animate={{x: 0}}
      transition= {{duration:2}}
      >
      <SocialIcon url='https://twitter.com/jaketrent' style={{width:100, height:100}}/>
      <SocialIcon network='facebook' style={{width:100, height:100}}/>
      </motion.div>
      <h1 style={{color:"red"}}>
        <Typewriter words={["Sain uu", "Pinecone"]}/>
        </h1>
        
        
      </header>
    </div>
  );
}

export default App;
