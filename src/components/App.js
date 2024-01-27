
import React from "react";
import './../styles/App.css';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div id="main">
        {/* Do not remove the main div */}
        <BrowserRouter>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>

          <Routes>
            <Route path="/" element={<h1 id="home">Welcome to my website!</h1>} />
            <Route path="/about" element={
              <div id="about">
                <h1>About</h1>
                <p>This is a simple React Router program.</p>
              </div>
            } />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
