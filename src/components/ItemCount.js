import React, {useState} from 'react';
import {Container} from 'react-bootstrap';

const ItemCount = ({initialValue = 0, stock}) => {
    const [count, setCount] = useState(initialValue);
    const handlerAdd = () => {
        if(count < stock) {
            setCount((prev) => prev + 1);
        } else { alert('El item se encuentra agotado')}
    };
    const handlerRemove = () => {
        if(count > 0) {
            setCount((prev)=> prev -1);
        }
    };

  return (
    <div>
      <button onClick={handlerAdd}>+</button>
      <p>{count}</p>
      <button onClick={handlerRemove}>-</button>
    </div>
    );
}
export default ItemCount;