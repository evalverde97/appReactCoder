import React, { useState, useEffect} from "react";
import ItemList from "./ItemList";
import {products} from "../mocks/products";
import { NavLink } from "react-router-dom";

export default function ItemListContainer(props) {
  const {id} = useParams() || "";
  const [state, setState] = useState(null);
  const API = new Promise((resolve, reject) => {
    setTimeout(() => {
      if(products){
        resolve(products);
      } else {
        reject(new Error());
      }
    }, 2000)
  });
  useEffect(() => {
    API
    .then(res => setState(res))
    .catch(err => console.log(err))
  }, [])
  
  return (
        state ? <ItemList products={state} /> : <div>Loading...</div>
    );
}
  