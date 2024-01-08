import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Extension from "./components/Extension";
import Questions from "./components/Questions";
import Sign from "./components/Sign";
import Foter from "./components/Foter"

function App() {
  return (
    <div>
        <NavBar/>
        <Hero/>
        <Features/>
        <Extension/>
        <Questions/>
        <Sign/>
        <Foter/>
    </div>
  );
}

export default App;
