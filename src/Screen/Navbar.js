import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Titakapp from "../Tiktakapp";
import "./main.css";
import mainlogo from "../img/mainlogo.png";
import { Button, Modal } from "react-bootstrap";
import AddForm from "./AddForm";
import CloseButton from "react-bootstrap/CloseButton";
import { useAuth0 } from "@auth0/auth0-react";
import { Auth0Provider } from "@auth0/auth0-react";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0();

    
  useEffect(() => {
    document
      .getElementById("nav-toggle")
      .addEventListener("click", function () {
        let navMenu = document.getElementById("nav-menu-container");
        navMenu.style.display =
          navMenu.offsetParent === null ? "block" : "none";
      });
  });

  return (
    <>
      <header>
        <div class="flex">
          <div class="logo">
            <a href="#" className="logotext">
              <img
                src={mainlogo}
                // src="https://onclickwebdesign.com/wp-content/uploads/game_warrior_logo.png"
                alt="Game Warrior Logo"
              />
              Brain
              <span className="worldcolor">World</span>
              Game
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
                <Link to="home" class="nav-link">
                  Tik-Tac-ToE{" "}
                </Link>
              </li>
              <li>
                <Link to="app" class="nav-link">
                  Memory Game
                </Link>
              </li>
              <li>
                <a href="#">Forums</a>
              </li>
              <li>
                <Link to="/contact" class="nav-link">
                  Contact
                </Link>
              </li>
              <li>
                {
                  isAuthenticated && <div><li style={{color:'white'}}>{user.name} </li>
                  <img src={user.picture} alt={user.name} style={{height:'40px'
                  ,borderRadius:'50%'
                  }}/>
                  </div>
                }
              </li>
              {isAuthenticated ? (
                <li>
                  <button id="login-register-button"
                    onClick={() => logout({ returnTo: window.location.origin })}
                  >
                    Log Out
                  </button>
                </li>
                
              ) : (
                <li>
                  <button onClick={() => loginWithRedirect()} id="login-register-button">Log In</button>
                </li>
              )}

            </ul>
          </nav>
          {/* <button id="login-register-button" onClick={handleShow}>
            Login
          </button> */}
        </div>
      </header>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Login</Modal.Title>
          <Button
            variant="secondary"
            onClick={handleClose}
            className="fa fa-close"
          ></Button>
        </Modal.Header>
        <Modal.Body>
          <AddForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Navbar;
