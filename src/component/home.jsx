import React, { Component } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import LineChart from "./lineChart";
import MyDonutChart from "./charts";
import { FaArrowUp, FaChevronDown, FaChevronUp, FaDollarSign, } from "react-icons/fa";
import "./home.css"

export default class Home extends Component {
  render() {
    return (
      <div className="p-5 bg-light" > 
        <div className="container-fluid">
          <div className="row">
            {/* <div className="className col-12 col-sm-6 col-md-4 col-lg-3 p-3 ">
              <div className="d-flex justify-content-arround aligh-items-center py-4 px-2 bg-white  shadow-sm" style={{borderRadius:"10px"}}>
              <div className="first d-flex align-items-center justify-content-center">
      <FaDollarSign className="logo" />
    </div>
    <div className="mx-2 mt-2">
        <span style={{ fontSize: "7px" }}>Earning</span>
        <div className="fs-5" style={{marginTop:"-2px",fontWeight:"bold"}}><strong>$168K</strong></div>
        <div className="row" style={{ fontSize: "8px" }}>
  <div className="col-12 ">
    <span className="d">
      <FaArrowUp />37.8%,
      <p className="e">This Month</p>
      </span>
  </div>
  
</div>

    </div>
        
              </div>
            </div> */}
            <div className="className col-12 col-sm-6 col-md-4 col-lg-3 p-3 ">
  <div className="d-flex justify-content-around align-items-center py-4 px-2 bg-white shadow-sm" style={{ borderRadius: "10px" }}>
    <div className="first d-flex align-items-center justify-content-center">
      <FaDollarSign className="logo" />
    </div>
    <div className="mx-2 mt-1">
      <span style={{ fontSize: "8px" }}>Earning</span>
      <div className="fs-5" style={{ marginTop: "-4px", fontWeight: "bold" }}><strong>$168K</strong></div>
      {/* <div className="row" style={{ fontSize: "8px" }}>
        <div className="col-12">
          <span className="d">
            <FaArrowUp />37.8%,
            <p className="e">This Month</p>
          </span>
        </div>
      </div> */}
    </div>
  </div>
</div>

            <div className="className col-12 col-sm-6 col-md-4 col-lg-3 p-3 ">
              <div className="d-flex justify-content-arround aligh-items-center py-4 px-2 bg-white border border-secondary shadow-sm">
                <i className="bi bi-nut"></i>
                <div className="">
                  <p>Earnig</p>
                </div>
              </div>
            </div>

            <div className="className col-12 col-sm-6 col-md-4 col-lg-3 p-3 ">
              <div className="d-flex justify-content-arround aligh-items-center py-4 px-2 bg-white border border-secondary shadow-sm">
                <i className="bi bi-nut"></i>
                <div className="">
                  <p>Earnig</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 ">
              <div className="d-flex justify-content-arround aligh-items-center py-4 px-2 bg-white border border-secondary shadow-sm">
                <i className="bi bi-nut "></i>
                <div className="">
                  <p>Earnig</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-8  p-3 h-100">
              <div
                className=" bg-white mx-auto p-2 h-100"
                style={{ borderRadius: "10px" }}
              >
                <div class="card-header p-2 d-flex flex-row align-items-center justify-content-between">
                  <div className="">
                    <span>
                      <strong>Overview</strong>
                    </span>
                    <br />
                    <span>Monthly Earning</span>
                  </div>
                  <div className="shadow-sm bg-light mb-1" style={{borderRadius:"4px"}}>
                    <span className="m-2">Quarterly</span>
                    <FaChevronDown className="ml-2"/>
                  </div>
                </div>
                <LineChart />
              </div>
            </div>
            <div className="col-12 col-md-4  p-3 h-100">
            <div
                 className=" bg-white mx-auto p-2 h-100"
                style={{ borderRadius: "10px" }}
              >
                     <div class="card-header p-2 d-flex flex-row align-items-center justify-content-between">
                  <div className="">
                    <span>
                      <strong>Customers</strong>
                    </span>
                    <br />
                    <span style={{fontSize:"12px"}}>customers that buy products</span>
                  </div>
                </div>
   
              <MyDonutChart />
             
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}
