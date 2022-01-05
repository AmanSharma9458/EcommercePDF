import React from 'react';
import ReactDOM from 'react-dom';
import "./Menubar.css";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

function MenuBar() {
    return (
        <nav>
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Blog</a>
  <a href="#">Portefolio</a>
  <a href="#">Contact</a>
  {/* <a href="#">SIGN IN</a> */}
  <Link to="/auth">SIGNIN</Link>
  <div class="animation start-home"></div>
</nav>
      );
}

export default MenuBar;

