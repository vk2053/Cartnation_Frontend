import React, { useState } from "react";
import list from "../data";
import Bix from "./bix";
import "../styles/product.css";

const Product = ({ handleClick }) => {
  return (
    <section>
      {list.map((item) => (
        <Bix key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Product;
