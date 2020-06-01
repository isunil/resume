import React, { Component } from "react";
import ExperienceItem from "./common/experienceitem";
import ExperienceData from "../data/experienceData";

export default class Experience extends Component {
  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="Experience">
        <div className="my-auto">
          <h2 className="mb-5">Experience</h2>
          {ExperienceData.getAllExperiences().map((exp, index) => {
            return <ExperienceItem key={index} exp={exp} />;
          })}
        </div>
      </section>
    );
  }
}
