import React, { Component } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import {
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaKey,
  FaProductHunt,
} from "react-icons/fa";
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
    
          <ul className="nav nav-pills flex-column mt-4 ">
            <li className="SetClass nav-item p-1 mt-1 d-flex align-items-center">
              <a href="#" className="d-flex align-items-center">
                <FaKey className="me-3 fs-8 align-items-center" />
                <span className="fs-8 align-items-center">
                  <strong>Dashboard</strong>
                </span>
              </a>
              {/* <span className="ms-auto">
                <FaChevronRight />
              </span> */}
            </li>

            <li className="nav-item p-1 mt-1 d-flex align-items-center">
              <a href="#" className="d-flex align-items-center">
                <FaProductHunt className="me-3 fs-8 align-items-center" />
                <span className="fs-8 align-items-center">
                  <strong>Product</strong>
                </span>
              </a>
              <span className="ms-auto">
                <FaChevronRight />
              </span>
            </li>

            <li className="nav-item p-1 mt-1 d-flex align-items-center">
              <a href="#" className="d-flex align-items-center">
                <i class="bi bi-person-square me-3 fs-8 align-items-center"></i>
                <span className="fs-8 align-items-center">
                  <strong>Customers</strong>
                </span>
              </a>
              <span className="ms-auto">
                <FaChevronRight />
              </span>
            </li>

            <li className="nav-item p-1 mt-1 d-flex align-items-center">
              <a href="#" className="d-flex align-items-center">
                <i class="bi bi-currency-bitcoin me-3 fs-8 align-items-center"></i>
                <span className="fs-8 align-items-center">
                  <strong>Income</strong>
                </span>
              </a>
              <span className="ms-auto">
                <FaChevronRight />
              </span>
            </li>
            <li className="nav-item p-1 mt-1 d-flex align-items-center">
              <a href="#" className="d-flex align-items-center">
                <i class="bi bi-gear-wide-connected me-3 fs-8 align-items-center"></i>
                <span className="fs-8 align-items-center">
                  <strong>Promote</strong>
                </span>
              </a>
              <span className="ms-auto">
                <FaChevronRight />
              </span>
            </li>

            <li className="nav-item p-1 mt-1 d-flex align-items-center">
              <a href="#" className="d-flex align-items-center">
                <i class="bi bi-question-octagon me-3 fs-8 align-items-center"></i>
                <span className="fs-8 align-items-center">
                  <strong>Help</strong>
                </span>
              </a>
              <span className="ms-auto">
                <FaChevronRight />
              </span>
            </li>
          </ul>
        </div>
        <div>
<div
  className="SetClass nav-item p-2 mt-1 d-flex align-items-center"
  style={{
    backgroundColor: "#000080",
    width: "210px", 
    height: "50px", 
    borderRadius:"10px"
  }}
>
  <a href="#" className="d-flex align-items-center" >
    <img
      src="6.jpg"
      alt=""
      className="me-2"
      style={{
        width: "30px",
        height: "30px",
        objectFit: "cover",
        borderRadius: "50%",
      }}
    />
        <div className="d-flex flex-column">
      <span style={{ fontSize: "10px" }}>
        <strong>Manish</strong>
      </span>
      <span style={{ fontSize: "10px" }}>Project Manager</span>
    </div>

  </a>
  <span className="ms-auto">
    <FaChevronDown />
  </span>
</div>


        </div>
      </div>
    );
  }
}
