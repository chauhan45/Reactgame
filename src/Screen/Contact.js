import React from "react";
import './contact.css';
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <>
    <Navbar />
      <section id="contact">
        <h1 class="section-header">Contact</h1>
        <div class="contact-wrapper">
          <form id="contact-form" class="form-horizontal" role="form">
            <div class="form-group">
              <div class="col-sm-12">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="NAME"
                  name="name"
                  value=""
                  required
                />
              </div>
            </div>

            <div class="form-group">
              <div class="col-sm-12">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="EMAIL"
                  name="email"
                  value=""
                  required
                />
              </div>
            </div>

            <textarea
              class="form-control"
              rows="10"
              placeholder="MESSAGE"
              name="message"
              required
            ></textarea>

            <button
              class="btn btn-primary send-button"
              id="submit"
              type="submit"
              value="SEND"
            >
              <div class="alt-send-button">
                <i class="fa fa-paper-plane"></i>
                <span class="send-text">SEND</span>
              </div>
            </button>
          </form>

          <div class="direct-contact-container">
            <ul class="contact-list">
              <li class="list-item">
                <i class="fa fa-map-marker fa-2x">
                  <span class="contact-text place">City, State</span>
                </i>
              </li>

              <li class="list-item">
                <i class="fa fa-phone fa-2x">
                  <span class="contact-text phone">
                    <a href="tel:1-212-555-5555" title="Give me a call">
                      (212) 555-2368
                    </a>
                  </span>
                </i>
              </li>

              <li class="list-item">
                <i class="fa fa-envelope fa-2x">
                  <span class="contact-text gmail">
                    <a href="mailto:#" title="Send me an email">
                      amit.c.dedicated@gmail.com
                    </a>
                  </span>
                </i>
              </li>
            </ul>

            <hr />
            <ul class="social-media-list">
              <li>
                <a href="#" target="_blank" class="contact-icon">
                  <i class="fa fa-github" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" class="contact-icon">
                  <i class="fa fa-codepen" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" class="contact-icon">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" class="contact-icon">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
            <hr />

            <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
          </div>
        </div>
      </section>
      <footer>
        <div class="flex">
          <small>
            Copyright &copy; 2022 All rights reserved  | This Website is made
            with <span class="footer-heart">&#9829;</span> by{" "}
            <a href="https://truintenttechnologies.com/" target="_blank">
            truintenttechnologies
            </a>
            .
          </small>
          <ul>
            <li>
            <Link to="home" class="nav-link">Tik-Tac-ToE </Link>  
            </li>

            <li>
            <Link to="app" class="nav-link">Memory Game</Link>  
            </li>

            <li>
              <a href="#">Blog</a>
            </li>

            <li>
              <a href="#">Forums</a>
            </li>

            <li>
            <Link to="/contact" class="nav-link">Contact</Link>  
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Contact;
