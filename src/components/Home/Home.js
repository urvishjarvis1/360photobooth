import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/avatar/Little_Things_logo.gif";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Tilt from "react-parallax-tilt";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <div className="hero-greeting-row">
                <h1 style={{ paddingBottom: 15, paddingTop: 15 }} className="heading mb-0">
                  Hi There!!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>
                
              </div>

              <h1 className="heading-name">
                Welcome to
                <strong className="main-name"> Little Things by Priya Shah</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} className="hero-image-col">
              <div className="hero-image-wrap">
                <Tilt>
                  <img
                    src={homeLogo}
                    alt="home pic"
                    className="img-fluid hero-avatar-img"
                  />
                </Tilt>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
