import React, { Component } from "react"
import "./header.css"

class Header extends Component {
  render() {
    return (
      <div className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container px-lg-5">
          <div className="navbar-brand">Start Bootstrap</div>
          <div className="collapse navbar-collapse">
            <div className="navbar-nav ms-auto mb-2 mb-lg-0">
              <a className="nav-item active" href="#">
                Home
              </a>
              <a className="nav-item" href="#">
                About
              </a>
              <a className="nav-item" href="#">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
