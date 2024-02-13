import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About'
import NoteState from './context/notes/NoteState';
import { Alert } from './components/Alert';
import Login from './components/Login'
import Signup from './components/Signup'
import { BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Switch } from "react-router-dom";

function App() {
  return (
    <>
    <NoteState>

    <Router>
        <Navbar/>
        <Alert />
        <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login"  element={<Login />} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
          </div>
    </Router>
    </NoteState>
    </>
  );
}

export default App;
