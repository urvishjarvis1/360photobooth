import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar/product.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Introducing  <span className="purple"> the 360 Photo Booth - The Ultimate Party Starter!</span>
            </h1>

            <p className="home-about-body">
            
            Capture the excitement and energy of your event with our amazing 360 Photo Booth! This innovative booth creates stunning, slow-motion videos of you and your friends spinning around on a rotating platform. The videos are then instantly shared via social media, so you can relive the fun moments for years to come.
            The 360 Photo Booth is perfect for all types of events, from weddings and corporate parties to birthdays and school dances. It's sure to be a hit with guests of all ages! <br/>
            <br />
            Here are some of the features that make the 360 Photo Booth so special:
            <br />
            <br />
            <ul>
              <li><span className="purple">Slow-motion video capture:</span> Record every moment in stunning detail.</li>
              <li><span className="purple">Instant sharing:</span> Share your videos with friends and family on social media.</li>
              <li><span className="purple">Customizable graphics:</span> Add your own logo or branding to the videos.</li>
              <li><span className="purple">Easy to use:</span> The 360 Photo Booth is simple to set up and operate.</li>
              <li><span className="purple">Portable:</span> Take the party anywhere with our lightweight and compact design.</li>
            </ul>
            
            Ready to make your event unforgettable?

            Rent the 360 Photo Booth today and give your guests a memory they'll never forget!
            <br />
            Reach me out at: <b className="purple">+1 (306) 580 1402</b>
            </p>
            
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/priyaa__shahh/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.youtube.com/c/PriyaShahPCS"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillYoutube />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
