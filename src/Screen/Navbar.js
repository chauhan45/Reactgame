import React,{useEffect} from 'react';
// import {Link, Button, Nav, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import Titakapp from '../src/Tiktakapp'
import Titakapp from '../Tiktakapp';
import './main.css'

const Navbar = () => {

useEffect(() => {
  document.getElementById('nav-toggle').addEventListener('click', function () {
    let navMenu = document.getElementById('nav-menu-container');
    navMenu.style.display = navMenu.offsetParent === null ? 'block' : 'none';
});
});

  return (
    <>
    
    {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">AMITGAME</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
      <Link to="home" class="nav-link">Tik-tak game</Link>       </li>
      <li class="nav-item">    
        <Link to="app" class="nav-link">Memory Game</Link>  
      </li>
      <li class="nav-item">
        <Link to="Titakapp" class="nav-link"> </Link>  
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav> */}
    

    <header>
      
        <div class="flex">
          <div class="logo">
            <a href="#">
              <img
                src="https://onclickwebdesign.com/wp-content/uploads/game_warrior_logo.png"
                alt="Game Warrior Logo"
              />
            </a>
          </div>
          <nav>
            <button id="nav-toggle" class="hamburger-menu">
              <span class="strip"></span>
              <span class="strip"></span>
              <span class="strip"></span>
            </button>
            <ul id="nav-menu-container">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
              <Link to="home" class="nav-link">Tik-Tac-ToE </Link>  
              </li>
              <li>
              <Link to="app" class="nav-link">Memory Game</Link>  
              </li>
              <li>
                <a href="#">Forums</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <a href="#" id="login-register-button">
            Login / Register
          </a>
        </div>
      </header>


    </>
  )
}

export default Navbar