import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header";
import { useDispatch, useSelector } from "react-redux";
import Hero from "./components/hero";
import Skills from "./components/skills";
import Profile from "./components/profile";
import Projects from "./components/projects";
import Footer from "./components/footer";
function App() {
  return (
    <div className="font-primary">
      <Header></Header>
      <Hero></Hero>
      <Skills></Skills>
      <Profile></Profile>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}

export default App;
