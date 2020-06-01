import React, { Component } from "react";

export default class Education extends Component {
  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="Education">
        <div className="my-auto">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">New Mexico State University (NMSU)</h3>
              <div className="subheading mb-3">Master of Science</div>
              <div>Computer Science</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2007 - May 2010</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Jawaharlal Nehru Technological University (JNTU)</h3>
              <div className="subheading mb-3">Bachelor of Technolgy</div>
              <div>Information Technolgy</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2003 - May 2007</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
