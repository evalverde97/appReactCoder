import { Box, Button } from '@mui/material';
import React, {useState} from 'react';

const ItemCount = ({initialValue = 0, stock, onAdd}) => {
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
    const addToCart = () => {
        if (stock > 0){
            onAdd(count)
        } else { 
            alert('No hay unidades disponibles a la venta');
        }
    }

  return (
    <div >  
        <Box  sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 2, alignItems: 'center'}}>
            <Button variant="contained" size='medium' onClick={handlerAdd}>+</Button>
            <Button >{count}</Button>
            <Button variant="contained" size='medium' onClick={handlerRemove}>-</Button>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            <Button onClick={addToCart}>agregar al carrito</Button>
        </Box>
    </div>
    );
}
export default ItemCount;