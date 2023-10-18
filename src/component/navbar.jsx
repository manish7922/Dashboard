import React, { Component } from "react";
import "./navbar.css"
export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light p-5" style={{marginTop:"-2em"}}>
        <div className="container-fluid">
          <a className="navbar-brand">
            <strong className="child">Hello Manish👋🏻,</strong>
          </a>
        
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
