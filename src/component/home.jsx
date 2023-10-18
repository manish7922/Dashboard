import React, { Component } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import LineChart from "./lineChart";
import MyDonutChart from "./charts";
import { FaArrowDown, FaArrowUp, FaChevronDown, FaChevronUp, FaDollarSign, FaFile, FaLock, FaSearch, FaWallet, } from "react-icons/fa";
import "./home.css"

export default class Home extends Component {
  render() {
    return (
      <div className="p-5 bg-light" style={{marginTop:"-4em"}} > 
        <div className="container-fluid">
          <div className="row">
          <div className="className col-12 col-sm-6 col-md-4 col-lg-3 p-3 ">
              <div className="d-flex justify-content-arround aligh-items-center py-4 px-2 bg-white  shadow-sm"  style={{ borderRadius: "10px" }}>
             <div className="first d-flex align-items-center justify-content-center">
          
         <FaDollarSign className="logo" />
         </div>
          <div className="ml-1" style={{marginLeft:"0.5em",marginTop:"0.5em"}}>
            <p style={{ fontSize: "10px", marginBottom: "0" }}>Earning</p>
            <span className="fs-5" style={{  fontWeight: "bold",marginTop:"-0.2em" }} ><strong>$164K</strong></span>
            <span className="d" style={{ fontSize: "8px", color: "green", display: "flex", alignItems: "center" }}>
    <FaArrowUp style={{ marginRight: "0.2em" }} />
    37.8%,
    <p className="e" style={{ display: "inline", color: "black", marginLeft: "0.2em", marginBottom: "0" }}>This Month</p>
  </span>
       
             </div>
              </div>
            </div>

            <div className="className col-12 col-sm-6 col-md-4 col-lg-3 p-3 ">
              <div className="d-flex justify-content-arround aligh-items-center py-4 px-2 bg-white  shadow-sm"  style={{ borderRadius: "10px" }}>
             <div className="Second d-flex align-items-center justify-content-center">
          
         <FaFile className="logo1" />
         </div>
          <div className="ml-1" style={{marginLeft:"0.5em",marginTop:"0.5em"}}>
            <p style={{ fontSize: "10px", marginBottom: "0" }}>Orders</p>
            <span className="fs-5" style={{  fontWeight: "bold",marginTop:"-0.2em" }} ><strong>$2.4K</strong></span>
            <span className="d" style={{ fontSize: "8px", color: "red", display: "flex", alignItems: "center" }}>
    <FaArrowDown style={{ marginRight: "0.2em" }} />
    2%,
    <p className="e" style={{ display: "inline", color: "black", marginLeft: "0.2em", marginBottom: "0" }}>This Month</p>
  </span>
       
             </div>
              </div>
            </div>

            <div className="className col-12 col-sm-6 col-md-4 col-lg-3 p-3 ">
              <div className="d-flex justify-content-arround aligh-items-center py-4 px-2 bg-white  shadow-sm"  style={{ borderRadius: "10px" }}>
             <div className="Third d-flex align-items-center justify-content-center">
          
         <FaWallet className="logo2" />
         </div>
          <div className="ml-1" style={{marginLeft:"0.5em",marginTop:"0.5em"}}>
            <p style={{ fontSize: "10px", marginBottom: "0" }}>Balance</p>
            <span className="fs-5" style={{  fontWeight: "bold",marginTop:"-0.2em" }} ><strong>$2.4K</strong></span>
            <span className="d" style={{ fontSize: "8px", color: "red", display: "flex", alignItems: "center" }}>
    <FaArrowUp style={{ marginRight: "0.2em" }} />
    2%,
    <p className="e" style={{ display: "inline", color: "black", marginLeft: "0.2em", marginBottom: "0" }}>This Month</p>
  </span>
       
             </div>
              </div>
            </div>

            <div className="className col-12 col-sm-6 col-md-4 col-lg-3 p-3 ">
              <div className="d-flex justify-content-arround aligh-items-center py-4 px-2 bg-white  shadow-sm"  style={{ borderRadius: "10px" }}>
             <div className="Four d-flex align-items-center justify-content-center">
          
         <FaLock className="logo3" />
         </div>
          <div className="ml-1" style={{marginLeft:"0.5em",marginTop:"0.5em"}}>
            <p style={{ fontSize: "10px", marginBottom: "0" }}>Total Sales</p>
            <span className="fs-5" style={{  fontWeight: "bold",marginTop:"-0.2em" }} ><strong>$89K</strong></span>
            <span className="d" style={{ fontSize: "8px", color: "green", display: "flex", alignItems: "center" }}>
    <FaArrowUp style={{ marginRight: "0.2em" }} />
    11%,
    <p className="e" style={{ display: "inline", color: "black", marginLeft: "0.2em", marginBottom: "0" }}>This Month</p>
  </span>
       
             </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-8  p-3 h-100">
              <div
                className=" bg-white mx-auto p-2"
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
                 className=" bg-white mx-auto p-2 "
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
   <div className="row">
    <div className="col-12 p-3">
        <div className="bg-white rounded">
            {/* <div className="d-flex p-3 align-items-center justify-content-between">
                <div className="ProductSell">
                    <span className="font-weight-bold"><strong>ProductSell</strong></span>
                </div>

                <div className="d-flex align-items-center">
                    <div className="setSearch1 shadow-sm bg-light " style={{padding:"0.5px", borderRadius: "10px",marginRight: "15px"}}>
                     <FaSearch   className="bg-light" style={{width:"18px",height:"18px"}} />
                        <input
                            type="text"
                            aria-label="Search"
                            placeholder="Search"
                            // style={{ marginLeft: "5px" }}
                            className="bg-light"
                        />
                    </div>

                    <div className="ml-2 shadow-sm bg-light" style={{ borderRadius: "10px" }}>
                        <span className="p-2" style={{ fontSize: "10px" }}>Last 30 Days <FaArrowDown /></span>
                    </div>
                </div>
            </div> */}
              <div className="d-flex p-3 align-items-center justify-content-between">
            <div className="ProductSell">
              <span className="font-weight-bold"><strong>ProductSell</strong></span>
            </div>

            <div className="d-flex align-items-center">
              <div className="setSearch1 shadow-sm bg-light p-1 rounded" style={{ marginRight: "15px" }}>
                <FaSearch className="bg-light" style={{ width: "18px", height: "18px" }} />
                <input
                  type="text"
                  aria-label="Search"
                  placeholder="Search"
                  className="bg-light border-0"
                />
              </div>

              <div className="ml-2 shadow-sm bg-light rounded">
                <span className="p-2" style={{ fontSize: "10px" }}>Last 30 Days <FaArrowDown /></span>
              </div>
            </div>
          </div>
            <div className="d-flex p-3 align-items-end justify-content-between  mb-0" style={{marginTop:"-2em"}}>
    <div className="ProductSell1">
        <span style={{fontSize:"10px" }} className="mt-3  align-items-end">Product Name</span>
    </div>

    <div className="d-flex  align-items-center" style={{marginRight:"-0.5em"}}>
    <span className="stock m-4 mb-0"  style={{fontSize:"10px" }}>Stock</span>
    <span className="price m-4 mb-0"  style={{fontSize:"10px" }}>Price</span>
    <span className="slaes m-4 mb-0"  style={{fontSize:"10px" }}>Total Sales</span>
</div>

</div>

<div className="border-top">
     <div className="p-3">
      <div className="d-flex align-items-center justify-content-between">
        <div className="ProductSell1 d-flex align-items-center">
          <img
            src="6.jpg"
            alt="Product Image"
            className="img-fluid"
            style={{ width: "70px", height: "40px", borderRadius: "10px" }}
          />
          <div className="ml-1" style={{marginLeft:"1em"}}>
            <span style={{ fontSize: "10px", fontWeight: "bold" }} className="mb-1"><strong>Another Product</strong></span>
            <p style={{ fontSize: "8px", marginBottom: "0" }}>Lorem ipsum is placeholder text</p>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <span className="stock m-4 mb-0" style={{ fontSize: "10px" }}>42 In stocks</span>
          <span className="price m-4 mb-0" style={{ fontSize: "10px", fontWeight: "bold" }}>$42</span>
          <span className="sales m-4 mb-0" style={{ fontSize: "10px", marginLeft: "-20px" }}>15</span>
        </div>
      </div>
    </div>
    <div className="p-3">
      <div className="d-flex align-items-center justify-content-between">
        <div className="ProductSell1 d-flex align-items-center">
          <img
            src="6.jpg"
            alt="Product Image"
            className="img-fluid"
            style={{ width: "70px", height: "40px", borderRadius: "10px" }}
          />
          <div className="ml-1" style={{marginLeft:"1em"}}  >
            <span style={{ fontSize: "10px", fontWeight: "bold" }} className="mb-1"><strong>Another Product</strong></span>
            <p style={{ fontSize: "8px", marginBottom: "0" }}>Lorem ipsum is placeholder text</p>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <span className="stock m-4 mb-0" style={{ fontSize: "10px" }}>42 In stocks</span>
          <span className="price m-4 mb-0" style={{ fontSize: "10px", fontWeight: "bold" }}>$42</span>
          <span className="sales m-4 mb-0" style={{ fontSize: "10px", marginLeft: "-20px" }}>15</span>
        </div>
      </div>
    </div>
</div>


        </div>
       
    </div>
</div>

        </div>
      </div>
    );
  }
}
