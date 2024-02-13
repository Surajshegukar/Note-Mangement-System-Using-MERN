import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About'
import { BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Switch } from "react-router-dom";

function App() {
  return (
    <>
    
    <Router>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
