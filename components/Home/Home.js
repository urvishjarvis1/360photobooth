import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SiCachet } from "react-icons/si";
import homeLogo from "../../Assets/avatar/Little_Things_logo.gif";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                Welcome to
                <strong className="main-name"> Little Things by Priya Shah</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={4} >
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{width:400, height:400, paddingTop:40, opacity:0.8, borderRadius: 400}}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
