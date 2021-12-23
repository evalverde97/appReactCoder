import React, {useState} from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const ItemCount = (initialValue = 0, stock, onAdd) => {
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
    <div>  
        <Row className="my-5">
            <Button size='sm' className="justify-content-md-center" as={Col} disabled={count >= stock} onClick={()=>handlerAdd(count)}>+</Button>
            <p as={Col}>{count}</p>
            <Button size='sm' className="justify-content-md-center" as={Col} disabled={count <= 0} onClick={handlerRemove}>-</Button>
        </Row>
        <Row>
            <Button variant='outline-success' className="justify-content-md-center" as={Col} onClick={() => onAdd(count)}>agregar al carrito</Button>
        </Row>
    </div>
    );
}
export default ItemCount;