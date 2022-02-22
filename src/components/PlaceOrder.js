import React, { useEffect, useState } from "react";
import "./css/PlaceOrder.css";
import axios from "axios";
import PlaceCard from "./PlaceCard";
import Box from "@mui/material/Box";
import { LinearProgress } from "@mui/material";
import { NavLink } from "react-router-dom";

const PlaceOrder = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  const getData = async () => {
    const res = await axios.get(
      "https://carttraction-11b9b-default-rtdb.firebaseio.com/address.json"
    );
    console.log(res);
    console.log(res.data);
    const data = res.data;
    const keysList = Object.keys(data);
    const dataList = [];
    keysList.map((key) => {
      return dataList.push(data[key]);
    });
    console.log(dataList[0].firstName);
    console.log(dataList);
    setData(dataList);
    setLoad(false);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {load ? (
        <Box className="box" sx={{ width: "30%" }}>
          <LinearProgress />
        </Box>
      ) : (
        <div id="container">
          <div className="main-div">
            <div className="center-div">
              <div className="main-card">
                {data.map((e) => {
                  return (
                    <>
                      <PlaceCard data={e} />
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <NavLink to="orderPlaced" className='navlink'>Place Order</NavLink>
        </div>
      )}
    </>
  );
};

export default PlaceOrder;
