import React from "react";
import Navbar from "./Navbar";
import Ludo from "../img/ludo.jpeg";
import memory from '../img/memory.png';
import { Link } from 'react-router-dom';

import "../style.css";
const Home = () => {


   const imageClick = () => {
      console.log('Click');
    }

  return (
    <>
      <Navbar />
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src={Ludo} alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={Ludo} alt="Second slide" />
          </div>
          <div class="carousel-item">
            {/* <div className='text-white'>Home</div> */}
            <img class="d-block w-100" src={Ludo} alt="Third slide" />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      {/* card */}
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <div class="card" style={{ width: "18rem" }}>
              <img class="card-img-top" src={memory} alt="Card image cap" onClick={() => imageClick()} />
              <div class="card-body">
                <h5 class="card-title">Memory Game</h5>
                <p class="card-text">
                Stimulate your memory and have fun with memory puzzles by Senior Games.
                 A complete collection of games that will help you develop your memory 
                 skills while ...
                </p>
                <Link to="app" class="btn btn-primary"> Play Memory Game</Link>  
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card" style={{ width: "18rem" }}>
              <img class="card-img-top" src={Ludo} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card" style={{ width: "18rem" }}>
              <img class="card-img-top" src={Ludo} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* 2222 */}
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <div class="card" style={{ width: "18rem" }}>
              <img class="card-img-top" src={Ludo} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card" style={{ width: "18rem" }}>
              <img class="card-img-top" src={Ludo} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card" style={{ width: "18rem" }}>
              <img class="card-img-top" src={Ludo} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
