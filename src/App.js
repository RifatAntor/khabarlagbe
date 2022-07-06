import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NabBar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Menu from './pages/Menu';



function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes >
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/menu" element={<Menu/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
        
        
      </Router>
      
    </div>
  );
}

export default App;
