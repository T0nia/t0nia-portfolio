import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router> 
      <Navbar />
      
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />  
        <Route path="/services" element={<Services />} />  
        <Route path="/projects" element={<Projects />} />  
        <Route path="/contact" element={<Contact />} />  
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
