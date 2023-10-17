import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import React, { Component } from 'react'
import "./style.css"
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import Home from "./home";
export default class MainComponent extends Component {
  render() {
    return (
   <div className="d-flex">
    <div className="w-auto">
        <Sidebar />
    </div>
    <div className="col">
      <Navbar />
      <Home />
    </div>
   </div>
    )
  }
}
