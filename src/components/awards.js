import React, { Component } from "react";

export default class Awards extends Component {
  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="Awards">
        <div className="my-auto">
          <h2 className="mb-5">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning" />
              Programming in HTML5 with JavaScript and CSS3 Specialist MCP-ID: 9838564
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning" />
              M101N: MongoDB for .NET Developers
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
