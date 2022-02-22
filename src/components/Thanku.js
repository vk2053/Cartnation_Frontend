import React from "react";
import "./css/Thanku.css";
import { NavLink } from "react-router-dom";

const Thanku = () => {
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>Hii, Tushar</h1>
          <h2>Order successfully placed</h2>
          <p>Thankyou for shopping with Carttraction!</p>
          <NavLink to="/">back to homepage</NavLink>
        </div>
      </div>
    </>
  );
};

export default Thanku;
