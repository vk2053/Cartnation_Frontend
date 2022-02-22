import React from "react";
import "./css/PlaceOrder.css";
import { NavLink, useHistory } from "react-router-dom";
import "./css/PlaceCard.css";

const PlaceCard = (data) => {
  const history = useHistory();
  const dataList = data.data;
  const editAddress = () => {
    history.push("/contact");
  };
  return (
    <>
      <div className="card">
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
                <span>{dataList.firstName} {dataList.lastName} {dataList.phone}</span> <br/>
              </span>
              <span>
                {` ${dataList.village} ${dataList.distt} ${dataList.state} ${dataList.country} - `}
                <span className="pinCode"><span>{dataList.pinCode}</span></span>
              </span>
            </span>
          </div>
        </div>
        {/* <NavLink to="contact">change address</NavLink> */}
        <div className="todo-btn">
          <i
            className="far fa-edit add-btn"
            title="Edit Address"
            onClick={editAddress}
          ></i>
          <i
            className="far fa-trash-alt add-btn"
            title="Delete Address"
            // onClick={() => deleteItem(elem.id)}
          ></i>
        </div>
      </div>
    </>
  );
};

export default PlaceCard;
