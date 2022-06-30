import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing">
      <Container>
        <Row>
          <div className="landingObjects">
            <div className="headText">
              <h1>Noterious</h1>
              <p>MERN Stack based Notes taking application</p>
            </div>
            <div className="buttonContainer">
              <a href="/login">
                <Button
                  size="lg"
                  className="LandingButtons"
                  variant="outline-primary"
                >
                  Login
                </Button>
              </a>
              <a href="/signup">
                <Button size="lg" className="LandingButtons">
                  signup
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
