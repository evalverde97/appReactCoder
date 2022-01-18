import React from 'react';

let cart = [{id: "libro", title:"Warren Buffet", price:10},{id: "libro", title:"HP", price:30} ]
// función para calcular el total (precio) de los items agregados
let cartTotal = cart.reduce((prevVal, newVal) =>{
  return prevVal.price + newVal.price;
})
let order = {
// hago un objeto hardcodeado que debe llenarse dinamicamente con los datos de 
// 1- user con sesion activa 
// 2- items agregados al carrito
  buyer: {name:"test", phone:11111, email: "test@test.com"},
  items: cart,
  total: cartTotal
}

const CartContext = React.createContext(order);

export default CartContext;

