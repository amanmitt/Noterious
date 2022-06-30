import React from "react";
import { Container } from "react-bootstrap";
import "./MainScreen.css";

const MainScreen = ({ title, children }) => {
  return (
    <div className="main">
      <Container>
        <div className="page">
          {title && (
            <>
              <h1 className="heading">{title}</h1>
              <hr></hr>
            </>
          )}
          {children}
        </div>
      </Container>
    </div>
  );
};

export default MainScreen;
