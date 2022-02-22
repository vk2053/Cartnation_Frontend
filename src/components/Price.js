import React from "react";
import "./css/Price.css";

const Price = () => {
  return (
    <>
      <div id="price">
        <div className="main">
          <div className="center">
            <span className="details">Price details</span>
            <div className="price_main_div">
              <div className="price_center_div">
                <div className="center_details">
                  <div className="items">Price (5 items)</div>
                </div>
                <span>
                  <div className="div_totPrice">
                    <div>
                      <div className="totPrice">₹153,156</div>
                    </div>
                  </div>
                </span>
              </div>
              <div className="main_charge">
                <div className="center_charge">
                  <div className="charge">Delivery Charges</div>
                </div>
                <span>
                  <span className="free">Free</span>
                </span>
              </div>
              <div className="main_pay">
                <div className="center_pay">
                  <div className="pay">
                    <div className="payable">Total Payable</div>
                  </div>
                  <span>
                    <div className="payment">
                      <div>
                        <div className="total">₹153,156</div>
                      </div>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Price;
