import React, { Component } from "react";
import "./navbar.css"
export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">
            <strong className="child">Hello Manish👋🏻,</strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              aria-label="Search"
            >
                <i className="bi bi-search"></i>
                <span>Search</span>
            </input>
          </form> */}
 <div className="d-flex align-items-center">
    <div className="setSearch">
  <i className="bi bi-search "></i>
  <input
    type="text"
    aria-label="Search"
    placeholder="Search"
  />
  </div>
  
</div>


        </div>
      </nav>
    );
  }
}
