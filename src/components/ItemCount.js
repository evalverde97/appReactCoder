import React, {useState} from 'react';

const ItemCount = ({initialValue = 0, stock}) => {
    const [count, setCount] = useState(initialValue);
    const handlerAdd = () => {
        if(count < stock) {
            setCount((prev) => prev + 1);
        } else { alert('No hay más unidades disponibles'); }
    };
    const handlerRemove = () => {
        if(count > 0) {
            setCount((prev)=> prev -1);
        }
    };

  return (
    <div className="app">
      <button disabled={count >= stock} onClick={()=>handlerAdd(count)}>+</button>
      <p>{count}</p>
      <button disabled={count <= 0} onClick={handlerRemove}>-</button>
      <button onClick={() => onAdd(count)}>agregar al carrito</button>
    </div>
    );
}
export default ItemCount;