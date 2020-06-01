import React, { ReactDOM, Component } from "react";
import profilepic from "../images/profile.jpg";
import NavItem from "./common/navitem";
import commonData from "../data/commondata";
export default class Navigation extends Component {
  componentDidUpdate() {
    let hash = this.props.location.hash.replace("#", "");
    if (hash) {
      let node = ReactDOM.findDOMNode(this.refs[hash]);
      if (node) {
        node.scrollIntoView();
      }
    }
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-block d-lg-none">Sunil Nuthalapati</span>
          <span className="d-none d-lg-block">
            <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={profilepic} alt="profile pic" />
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            {commonData.getNavLinkTexts().map((text, index) => {
              return <NavItem key={index} linkText={text} />;
            })}
          </ul>
        </div>
      </nav>
    );
  }
}
