// BrowserRouter 
import { BrowserRouter as Router, Routes, Route  } from'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import MembershipPlans from './components/MembershipPlans';
import Schedule from './components/Schedule';
import Footer from './components/Footer';






import './App.css';
function App() {
  return (
    <div className="App">
     
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/plans" element={<MembershipPlans />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
        <Footer />
      </Router>
      
      
   
    </div>
  );
}

export default App;
