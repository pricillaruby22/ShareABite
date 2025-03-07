import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './Components/Homepage';
import Navbar from './Components/Navbar';
import Aboutus from './Components/Aboutus';

function App() {
  return (
    
      <Router>
         <Routes>
           <Route path="/" element={<Homepage />} />
           <Route path="/about" element={<Aboutus />} />
        
         </Routes>
      </Router>
  
  );
}

export default App;
