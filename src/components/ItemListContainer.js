import React, { useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from "./ItemList";

export default function ItemListContainer(props) {
  const products = [{
    id: 1,
    title: 'RudeGolem',
    description: 'colection of @rudegolem',
    price: '$10.00',
    pictureUrl: './assets/images/rudegolem#001.png',
    },
    {
    id: 2,
    title: 'BAYC #20',
    description: 'Colection of Bored Ape Yatch Club',
    price: '$10.00',
    pictureUrl: '.\assets\BAYC#20.jpg'
    }, 
    {
    id: 3,
    title: 'BAYC #8746',
    description: 'Colection of Bored Ape Yatch Club',
    price: '$10.00',
    pictureUrl: '.\assets\BAYC#8746.jpg'
    }, 
    {
    id: 4,
    title: 'Planet #04',
    description: 'Colection of Planets',
    price: '$10.00',
    pictureUrl: '.\assets\Planet#04.jpeg'
    }
  ];
  const [state, setState] = useState([]);
  const API = new Promise((resolve, reject) => {
    setTimeout(() => {
      setState(products);
      resolve(true)
    }, 2000)
  });
  API.then((res) => {
    console.log(res);
  }, []);
  
  return (
        <ItemList />
    );
}
  