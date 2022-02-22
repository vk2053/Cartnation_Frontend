import React from "react";
import "./css/PlaceOrder.css";
import { NavLink } from "react-router-dom";

const PlaceCard = (data) => {
  const dataList = data.data;

  return (
    <>
      <div className="card">
        <h3>
          <span className="number">1</span>
        </h3>
        <div className="address">
          <div className="delivery">
            Delivery Address
            <svg
              height="10"
              width="16"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="_1t8m48"
            >
              <path
                d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
                stroke="#2974f0"
              ></path>
            </svg>
          </div>
          <div className="sub-address">
            <span>
              <span className="name">
                {dataList.firstName} {dataList.lastName}
              </span>
              <span>
                {` ${dataList.village} ${dataList.distt} ${dataList.state} ${dataList.country} - `}
                <span className="pinCode">{dataList.pinCode}</span>
              </span>
            </span>
          </div>
        </div>
        <NavLink to="contact">change address</NavLink>
      </div>
    </>
  );
};

export default PlaceCard;
