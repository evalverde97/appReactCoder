import React, { useState} from "react";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

  function ItemListContainer(props) {
    return (
        <h1> Bienvenido {props.greeting}!</h1>
    );
  }
  
export default ItemListContainer;