// App.js
import React from 'react';
import Categories from './Categories';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Java from './languages/Java';
import Python from './languages/Python';
import MySQL from './languages/MySQL';
import C from './languages/C';
import './App.css';
import './../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import Home from './Home.jsx';
import PythonWriteUp from './languages_menus/writeups/PythonWriteUp.jsx';
import JavaWriteUp from './languages_menus/writeups/JavaWriteUp.jsx';
import CWriteUp from './languages_menus/writeups/CWriteUp.jsx';
import MySQLWriteUp from './languages_menus/writeups/MySQLWriteUp.jsx';

function App() {
  return (
    <Router basename='/litcode'>
      <NavigationBar />
      <div className="container" style={{ marginTop: '60px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* General Pages */}
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />

          {/* Language-Specific Pages */}
          <Route path="/categories/Java" element={<Java />} />
          <Route path="/categories/Python" element={<Python />} />
          <Route path="/categories/MySQL" element={<MySQL />} />
          <Route path="/categories/C" element={<C />} />

          {/* Dynamic Route for Write-Ups */}
          <Route path="/writeups/python_writeups/:label" element={<PythonWriteUp />} />
          <Route path="/writeups/java_writeups/:label" element={<JavaWriteUp />} />
          <Route path="/writeups/c_writeups/:label" element={<CWriteUp />} />
          <Route path="/writeups/mysql_writeups/:label" element={<MySQLWriteUp />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
