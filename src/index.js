import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Carouselcomp from './components/Carousel';
import Cards from './components/Card';
import Navbar from './components/Navbar';
import Product from './components/Product';
import reportWebVitals from './reportWebVitals';
import Ecom from './routes/Ecom';
import { drawerClasses } from '@mui/material';

ReactDOM.render(
  <React.Fragment>
    <App/>
  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
