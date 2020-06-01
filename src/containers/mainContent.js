import React, { Component } from "react";
import About from "../components/about";
import Experience from "../components/experience";
import Education from "../components/education";
import Skills from "../components/skills";
import Interests from "../components/interests";
import Awards from "../components/awards";

export default class MainContent extends Component {
  render() {
    return (
      <div className="container-fluid p-0">
        <About />
        <Experience />
        <Education />
        <Skills />
        <Interests />
        <Awards />
      </div>
    );
  }
}
