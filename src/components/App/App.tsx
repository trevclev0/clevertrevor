import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './App.css';
import Home from '../../pages/Home/Home';
import Projects from '../../pages/Projects/Projects';
import Resume from '../../pages/Resume/Resume';
import About from '../../pages/About/About';
import Contact from '../../pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
