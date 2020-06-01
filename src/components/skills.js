import React, { Component } from "react";

export default class Skills extends Component {
  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="Skills">
        <div className="my-auto">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">Programming Languages &amp; Tools</div>
          <ul className="list-inline list-icons">
            <li className="list-inline-item">
              <i className="devicons devicons-html5" />
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-css3" />
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-javascript" />
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-jquery" />
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-sass" />
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-less" />
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-bootstrap" />
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-dotnet" />
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-github" />
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-angular" />
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-nodejs" />
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-npm" />
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-visualstudio" />
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-mongodb" />
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-aws" />
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-react" />
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-msql_server" />
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check" />
              Multi-Tiered Enterprise Applications
            </li>
            <li>
              <i className="fa-li fa fa-check" />
              SOA and Microservices Architecture
            </li>
            <li>
              <i className="fa-li fa fa-check" />
              Cloud based Enterprise Applications
            </li>
            <li>
              <i className="fa-li fa fa-check" />
              Mobile-First, Responsive Design
            </li>
            <li>
              <i className="fa-li fa fa-check" />
              Cross Functional Teams
            </li>
            <li>
              <i className="fa-li fa fa-check" />
              Agile Development &amp; Scrum
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
