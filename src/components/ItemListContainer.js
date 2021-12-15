import React, { useState, useEffect} from "react";
import ItemList from "./ItemList";
import {products} from "../mocks/products";

export default function ItemListContainer(props) {
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
        state ? <ItemList items={state} /> : <div>Loading...</div>
    );
}
  