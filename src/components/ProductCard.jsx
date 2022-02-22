import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import E1 from "../images/E1.jpg";
import { Button } from "@mui/material";
//import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import { Carousel } from "react-carousel-minimal";
import Car from "./Carousel";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  border: "2px solid black",
  marginBottom: "5px",
}));

export default function ProductCard(props) {
  const productList = props.dataa;
  console.log("productList");
  console.log(productList[0].data);
  return (
    <>
      {productList.map((product) => {
        return (
          <Item key = {product.name}>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <img style={{ height: "100px" }} src={product.image} />

                {/* <Carousel className = "car">
                  <Card>
                  {(product.data).map((item) => (
                    <img style={{ height: "100px" }} src={item.image} />
                  ))}
                  </Card>
                </Carousel> */}

                {/* <Carousel
                  data={product.data}
                  width="200px"
                  height="200px"
                  radius="10px"
                  slideNumber={true}
                  captionPosition="bottom"
                  automatic={true}
                  dots={true}
                  pauseIconColor="white"
                  pauseIconSize="40px"
                  slideBackgroundColor="darkgrey"
                  slideImageFit="cover"
                  style={{
                    textAlign: "center",
                    maxWidth: "850px",
                    maxHeight: "500px",
                    margin: "40px auto",
                  }}
                /> */}
                {/* <Car /> */}
              </Grid>
              <Grid item xs={8}>
                <h3>{product.name}</h3>
                {product.description}
              </Grid>
              <Grid item xs={2}>
                <h3 color="black">Price: Rs. {product.price}/-</h3>
                <Button color="success" variant="contained">
                  Add to Cart
                </Button>
              </Grid>
            </Grid>
          </Item>
        );
      })}
    </>
  );
}
