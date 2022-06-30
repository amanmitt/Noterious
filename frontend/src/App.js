import "./App.css";
import React from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import LandingPage from "./screens/LandingPage";
import { BrowserRouter, Route } from "react-router-dom";
import MyNotes from "./screens/MyNotes";

const App = () => (
  <BrowserRouter>
    <Header />
    <Route path="/" component={LandingPage} exact />
    <Route path="/mynotes" component={MyNotes} />
    <Footer />
  </BrowserRouter>
);

export default App;
