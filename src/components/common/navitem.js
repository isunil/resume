import React, { Component } from "react";
import PropTypes from "prop-types";

class NavItem extends Component {
  render() {
    const { linkText } = this.props;
    return (
      <li className="nav-item">
        <a className="nav-link js-scroll-trigger" href={"#" + linkText}>
          {linkText}
        </a>
      </li>
    );
  }
}

NavItem.propTypes = {
  linkText: PropTypes.string
};

export default NavItem;
