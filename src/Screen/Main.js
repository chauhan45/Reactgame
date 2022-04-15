import React from "react";
import Navbar from "./Navbar";
import Ludo from "../img/ludo.jpeg";
import memory from "../img/memory.png";
import { Link } from "react-router-dom";
import tikatkimage from "../img/tiktak.jpeg";
import './main.css'

export const Main = () => {
  const imageClick = () => {
    console.log("Click");
  };
  return (
    <>
      <Navbar />
      <main>
        <section id="hero-image">
          <div class="hero-marketing-text">
            <h1>
              The Best <span>Games</span> Out There
            </h1>
            <h5>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              malesuada lorem maximus mauris scelerisque, at rutrum nulla
              dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.{" "}
            </h5>
            <button>Read More</button>
          </div>
        </section>

        <section id="latest-news">
          <div class="flex">
            <h5>Latest News</h5>
            <div id="latest-news-container">
              <div class="latest-news-item">
                <span class="badge new">New</span>
                <marquee class="latest-news-text">
                Comming Soon  Lorem ipsum dolor sit amet, consectectur adipiscing elit
                  ipsum.
                </marquee>
                
              </div>
            </div>
          </div>
        </section>

        <section id="game-types-boxes">
          <div class="flex">
            <div class="box new">
              <div class="shade"></div>
              <span class="badge new">Comming Soon</span>
              <div class="contents">
                <h4>Suspendisse ut justo tem por, rutrum</h4>
                <p>Lorem ipsum dolor sit amet, consectectur adipiscing elit.</p>
                <a href="#" class="comments">
                  3 Comments
                </a>
              </div>
            </div>

            <div class="box strategy">
              <div class="shade"></div>
              <span class="badge strategy">Comming Soon</span>
              <div class="contents">
                <h4>Suspendisse ut justo tem por, rutrum</h4>
                <p>Lorem ipsum dolor sit amet, consectectur adipiscing elit.</p>
                <a href="#" class="comments">
                  3 Comments
                </a>
              </div>
            </div>

            <div class="box rpg">
              <div class="shade"></div>
              <span class="badge rpg">Comming Soon</span>
              <div class="contents">
                <h4>Suspendisse ut justo tem por, rutrum</h4>
                <p>Lorem ipsum dolor sit amet, consectectur adipiscing elit.</p>
                <a href="#" class="comments">
                  3 Comments
                </a>
              </div>
            </div>

            <div class="box racing">
              <div class="shade"></div>
              <span class="badge racing">Comming Soon</span>
              <div class="contents">
                <h4>Suspendisse ut justo tem por, rutrum</h4>
                <p>Lorem ipsum dolor sit amet, consectectur adipiscing elit.</p>
                <a href="#" class="comments">
                  3 Comments
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="recent-games">
          <h1>Recent Games</h1>
          <div class="flex">
            <div class="box">
              <span class="badge new">New</span>
              <img src="https://onclickwebdesign.com/wp-content/uploads/recent_games_1.jpg" />
              <div class="box-lower-section">
                <h4>Suspendisse ut justo tem por, rutrum</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectectur adipiscing elit lorem
                  ipsum dolor sit amet.
                </p>
                <a href="#" class="comments">
                  3 Comments
                </a>
              </div>
            </div>

            <div class="box">
              <span class="badge racing">Racing</span>
              <img src="https://onclickwebdesign.com/wp-content/uploads/recent_games_2.jpg" />
              <div class="box-lower-section">
                <h4>Susce pulvinar metus nulla, vel facilisis sem</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectectur adipiscing elit lorem
                  ipsum dolor sit amet.
                </p>
                <a href="#" class="comments">
                  3 Comments
                </a>
              </div>
            </div>

            <div class="box">
              <span class="badge adventure">Adventure</span>
              <img src="https://onclickwebdesign.com/wp-content/uploads/recent_games_3.jpg" />
              <div class="box-lower-section">
                <h4>Suspendisse ut justo tem por, rutrum</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectectur adipiscing elit lorem
                  ipsum dolor sit amet.
                </p>
                <a href="#" class="comments">
                  3 Comments
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="tournaments">
          <div class="flex">
            <span class="badge tournaments">Tournaments</span>
            <div class="box">
              <span class="badge premium-tournament">Premium Tournament</span>
              <div class="tournaments-image">
                <img src="https://onclickwebdesign.com/wp-content/uploads/tournaments_1.jpg" />
              </div>
              <div class="tournaments-content">
                <h3>Starcraft 2</h3>
                <div>
                  <label>Tournament Begins:</label>{" "}
                  <strong>June 20, 2019</strong>
                </div>
                <div>
                  <label>Tournament Ends:</label> <strong>July 01, 2019</strong>
                </div>
                <div>
                  <label>Participants:</label> <strong>10 teams</strong>
                </div>
                <div>
                  <label>Tournament Organizer:</label> <strong>Admin</strong>
                </div>
                <div>
                  <label class="prizes">Prizes:</label>{" "}
                  <label>
                    1st place $2000, 2nd place: $1000, 3rd place: $500
                  </label>
                </div>
              </div>
            </div>

            <div class="box">
              <span class="badge premium-tournament">Premium Tournament</span>
              <div class="tournaments-image">
                <img src="https://onclickwebdesign.com/wp-content/uploads/tournaments_2.jpg" />
              </div>
              <div class="tournaments-content">
                <h3>World Of Warcraft</h3>
                <div>
                  <label>Tournament Begins:</label>{" "}
                  <strong>June 20, 2019</strong>
                </div>
                <div>
                  <label>Tournament Ends:</label> <strong>July 01, 2019</strong>
                </div>
                <div>
                  <label>Participants:</label> <strong>10 teams</strong>
                </div>
                <div>
                  <label>Tournament Organizer:</label> <strong>Admin</strong>
                </div>
                <div>
                  <label class="prizes">Prizes:</label>{" "}
                  <label>
                    1st place $2000, 2nd place: $1000, 3rd place: $500
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="recent-reviews">
          <h1>Recent Reviews</h1>
          <div class="flex">
            <div class="box">
              <span class="rating-badge gold">9.3</span>
              <div class="recent-reviews-image">
                <img src="https://onclickwebdesign.com/wp-content/uploads/recent_reviews_1.jpg" />
              </div>
              <div>
                <h4>Assasin's Creed</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectectur adipiscing ipsum
                  dolor sit amet.
                </p>
              </div>
            </div>

            <div class="box">
              <span class="rating-badge purple">9.5</span>
              <div class="recent-reviews-image">
                <img src="https://onclickwebdesign.com/wp-content/uploads/recent_reviews_2.jpg" />
              </div>
              <div>
                <h4>Doom</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectectur adipiscing ipsum
                  dolor sit amet.
                </p>
              </div>
            </div>

            <div class="box">
              <span class="rating-badge green">9.1</span>
              <div class="recent-reviews-image">
                <img src="https://onclickwebdesign.com/wp-content/uploads/recent_reviews_3.jpg" />
              </div>
              <div>
                <h4>Overwatch</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectectur adipiscing ipsum
                  dolor sit amet.
                </p>
              </div>
            </div>

            <div class="box">
              <span class="rating-badge violet">9.7</span>
              <div class="recent-reviews-image">
                <img src="https://onclickwebdesign.com/wp-content/uploads/recent_reviews_4.jpg" />
              </div>
              <div>
                <h4>GTA</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectectur adipiscing ipsum
                  dolor sit amet.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="posts-comments">
          <div class="flex">
            <div class="game-warrior">
              <img src="https://onclickwebdesign.com/wp-content/uploads/footer_logo.png" />
              <p>
                Lorem ipsum dolor sit amet, consectectur adipiscing ipsum dolor
                sit amet.
              </p>
              <img
                class="footer-graphic"
                src="https://onclickwebdesign.com/wp-content/uploads/sword_lady_footer.png"
              />
            </div>

            <div class="posts-comments-box">
              <h3>Latest Posts</h3>
              <div class="post-item">
                <img src="https://onclickwebdesign.com/wp-content/uploads/latest_posts_1.jpg" />
                <div>
                  <h5>June 21, 2019</h5>
                  <p>Lorem ipsum dolor sit amet, consectectur adipiscing.</p>
                  <small>By: Admin</small>
                </div>
              </div>

              <div class="post-item">
                <img src="https://onclickwebdesign.com/wp-content/uploads/latest_posts_2.jpg" />
                <div>
                  <h5>June 21, 2019</h5>
                  <p>Lorem ipsum dolor sit amet, consectectur adipiscing.</p>
                  <small>By: Admin</small>
                </div>
              </div>

              <div class="post-item">
                <img src="https://onclickwebdesign.com/wp-content/uploads/latest_posts_3.jpg" />
                <div>
                  <h5>June 21, 2019</h5>
                  <p>Lorem ipsum dolor sit amet, consectectur adipiscing.</p>
                  <small>By: Admin</small>
                </div>
              </div>
            </div>

            <div class="posts-comments-box">
              <h3>Top Comments</h3>
              <div class="comments-item">
                <img src="https://onclickwebdesign.com/wp-content/uploads/top_comments_1.jpg" />
                <div>
                  <p>
                    <span class="author">James Smith</span> <span>on</span>{" "}
                    Lorem ipsum dolor sit amet consectectur.
                  </p>
                  <h5>June 21, 2019</h5>
                </div>
              </div>

              <div class="comments-item">
                <img src="https://onclickwebdesign.com/wp-content/uploads/top_comments_2.jpg" />
                <div>
                  <p>
                    <span class="author">James Smith</span> <span>on</span>{" "}
                    Lorem ipsum dolor sit amet consectectur.
                  </p>
                  <h5>June 21, 2019</h5>
                </div>
              </div>

              <div class="comments-item">
                <img src="https://onclickwebdesign.com/wp-content/uploads/top_comments_3.jpg" />
                <div>
                  <p>
                    <span class="author">James Smith</span> <span>on</span>{" "}
                    Lorem ipsum dolor sit amet consectectur.
                  </p>
                  <h5>June 21, 2019</h5>
                </div>
              </div>

              <div class="comments-item">
                <img src="https://onclickwebdesign.com/wp-content/uploads/top_comments_4.jpg" />
                <div>
                  <p>
                    <span class="author">James Smith</span> <span>on</span>{" "}
                    Lorem ipsum dolor sit amet consectectur.
                  </p>
                  <h5>June 21, 2019</h5>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div class="flex">
          <small>
            Copyright &copy; 2019 All rights reserved | This template is made
            with <span class="footer-heart">&#9829;</span> by{" "}
            <a href="https://colorlib.com" target="_blank">
              Colorlib
            </a>
            .
          </small>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>

            <li>
              <a href="#">Games</a>
            </li>

            <li>
              <a href="#">Blog</a>
            </li>

            <li>
              <a href="#">Forums</a>
            </li>

            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </footer>

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
              <img
                class="card-img-top"
                src={memory}
                alt="Card image cap"
                onClick={() => imageClick()}
              />
              <div class="card-body">
                <h5 class="card-title">Memory Game</h5>
                <p class="card-text">
                  Stimulate your memory and have fun with memory puzzles by
                  Senior Games. A complete collection of games that will help
                  you develop your memory skills while ...
                </p>
                <Link to="app" class="btn btn-primary">
                  {" "}
                  Play Memory Game
                </Link>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card" style={{ width: "18rem" }}>
              <img
                class="card-img-top"
                src={tikatkimage}
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="home" class="btn btn-primary">
                  {" "}
                  Play Memory Game
                </Link>
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
