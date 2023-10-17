import React, { Component } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import {  FaChevronDown, FaChevronLeft, FaChevronRight, FaKey, FaProductHunt } from "react-icons/fa";
import "./sidebar.css";
export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar d-flex justify-content-between flex-column  text-white p-3 vh-100 colorSet">
        <div>
          <div>
            <i className="bi bi-nut fs-5 me-3  align-items-center"></i>
            <span className="fs-5  align-items-center ">
              <strong>Dashboard</strong>
            </span>
          </div>
          <hr className="mt-3" />
          <ul className="nav nav-pills flex-column ">
            <li className="nav-item p-1 mt-1">
              <a href="#">
              <FaKey className="me-3  fs-8  align-items-center" />
              <span className="fs-8 align-items-center">
                <strong>Dashboard</strong>
              </span>
              </a>
              <span className="ms-auto"> <FaChevronRight   /></span>
             
            </li>
            <li className="nav-item p-1 mt-1">
            <a href="#">
              <FaProductHunt className="me-3 fs-8  align-items-center" />
              <span className="fs-8  align-items-center" >
                <strong>Product</strong>
              </span>
              </a>
              <span className="ms-auto" > <FaChevronRight   /></span>
            </li>
            <li className="nav-item p-1 mt-1">
            <a href="#">
              <i class="bi bi-person-square me-3 fs-8 align-items-center"></i>
              <span className="fs-8  align-items-center">
                <strong>customers</strong>
              </span>
              </a>
              <span className="ms-auto" > <FaChevronRight   /></span>
            </li>
            <li className="nav-item p-1 mt-1">
            <a href="#">
                            <i class="bi bi-currency-bitcoin me-3 fs-8  align-items-center"></i>
              <span className="fs-8  align-items-center">
                <strong>income</strong>
              </span>
              </a>
              <span className="ms-auto"> <FaChevronRight   /></span>
            </li>
            <li className="nav-item p-1 mt-1">
            <a href="#">
              <i class="bi bi-gear-wide-connected me-3 fs-8  align-items-center" ></i>
              <span className="fs-8  align-items-center">
                <strong>Promote</strong>
              </span>
</a>
              <span className="ms-auto"  > <FaChevronRight   /></span>
               
            </li>
            <li className="nav-item p-1 mt-1 ">
            <a href="#"></a>
              <i class="bi bi-question-octagon me-3 fs-8  align-items-center"></i>
              <span className="fs-8  align-items-center">
                <strong>Help</strong>
              </span>
              <span className="ms-auto"  > <FaChevronRight   /></span>
            </li>

          </ul>
        </div>
        <div>
    
          <div className="nav-item mt-1 endBar shadow-sm p-3 mb-5  rounded" style={{backgroundColor:"#000080"}}>
            {/* <i class="bi bi-question-octagon me-2 fs-8"></i> */}
            <img src="6.jpg" alt="" className="me-2"  style={{ width: '50px', height: '50px', objectFit: 'cover' ,borderRadius:"50%"}} />
            <span className="fs-8">
              <strong>yourSelf</strong>
            </span>
            <span className="me-5"></span>
                <FaChevronDown   />
          </div>
        </div>
      </div>
    );
  }
}
