import "./App.css";
import React from "react";
import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer.js";

const App = () => (
  <>
    <Header />
    <main style={{minHeight : "88vh"}}></main>
    <Footer />
  </>
);

export default App;
