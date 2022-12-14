import React from "react";
import Navbar from "./Navbar";
import Ludo from "../img/ludo.jpeg";
import memory from "../img/memory.png";
import { Link } from "react-router-dom";
import tikatkimage from "../img/tiktak.jpeg";
import "./main.css";
import amitimage from '../img/amit-chauhan.jpg';
import rahulgoel from '../img/rahulgoel.jpeg';
import Chanderimage from '../img/Chander.jpeg';
import rahulkumarimage from '../img/rahulkumar.jpeg';
import mainlogo from '../img/mainlogo.png'


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
              The Warriors is a 2005 beat 'em up video game based on the 1979
              film of the same name (itself based on Sol Yurick's 1965 novel),
              developed by Rockstar Toronto and published by Rockstar Games. It
              was released in October 2005 for the PlayStation 2 and Xbox, and
              February 2007 for the PlayStation Portable; the PSP port was
              developed by Rockstar Leeds.{" "}
            </h5>
            <button>Read More</button>
          </div>
        </section>

        {/* <section id="latest-news">
          <div class="flex">
            <h5>Latest News</h5>
            <div id="latest-news-container">
              <div class="latest-news-item">
                <span class="badge new">New</span>
                <marquee class="latest-news-text">
                To play the 20 questions texting game, one player must pick something from their imagination;
                </marquee>
              </div>
            </div>
          </div>
        </section> */}

        <section id="game-types-boxes">
          <div class="flex">
            <div class="box new">
              <div class="shade"></div>
              <span class="badge new">Comming Soon</span>
              <div class="contents">
                <h4>Suspendisse ut justo tem por, rutrum</h4>
                <p>To play the 20 questions texting game, one player must pick something from their imagination;</p>
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
                <p>To play the 20 questions texting game, one player must pick something from their imagination;</p>
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
                <p>To play the 20 questions texting game, one player must pick something from their imagination;</p>
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
                <p>To play the 20 questions texting game, one player must pick something from their imagination;</p>
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
                  To play the 20 questions texting game, one player must pick something from their imagination;
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
                  To play the 20 questions texting game, one player must pick something from their imagination;
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
                  To play the 20 questions texting game, one player must pick something from their imagination;
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
                  Take a modern twist on this classic and fun school game. To play the Kiss, Marry, Kill, you will select three people
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
                  Take a modern twist on this classic and fun school game. To play the Kiss, Marry, Kill, you will select three people
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
                  Take a modern twist on this classic and fun school game. To play the Kiss, Marry, Kill, you will select three people
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
                  Take a modern twist on this classic and fun school game. To play the Kiss, Marry, Kill, you will select three people
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="posts-comments">
          <div class="flex">
            <div class="game-warrior">
            <div class="logo">
            <a href="#" className='logotext'>
              <img
              src={mainlogo}
                // src="https://onclickwebdesign.com/wp-content/uploads/game_warrior_logo.png"
                alt="Game Warrior Logo"
              />
              Brain
              <span className='worldcolor'>World</span>
              Game
            </a>
          </div>
              <p>
              Take a modern twist on this classic and fun school game. To play the Kiss, Marry, Kill, you will select three people
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
                <img src={rahulgoel} />
                <div>
                  <p>
                    <span class="author">Rahul Goel </span> <span>on</span>{" "}
                    Lorem ipsum dolor sit amet consectectur.
                  </p>
                  <h5>June 21, 2019</h5>
                </div>
              </div>

              <div class="comments-item">
                <img src={amitimage} />
                <div>
                  <p>
                    <span class="author">Amit Chauhan</span> <span>on</span>{" "}
                    Lorem ipsum dolor sit amet consectectur.
                  </p>
                  <h5>June 21, 2019</h5>
                </div>
              </div>

              <div class="comments-item">
                <img src={Chanderimage} />
                <div>
                  <p>
                    <span class="author">Chander Kumar </span> <span>on</span>{" "}
                    Lorem ipsum dolor sit amet consectectur.
                  </p>
                  <h5>June 21, 2019</h5>
                </div>
              </div>

              <div class="comments-item">
                <img src={rahulkumarimage}/>
                <div>
                  <p>
                    <span class="author">Rahul Kumar</span> <span>on</span>{" "}
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

    

      {/* card */}
      {/* <div class="container">
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
      </div> */}

      {/* 2222 */}
      {/* <div class="container">
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
      </div> */}
    </>
  );
};
