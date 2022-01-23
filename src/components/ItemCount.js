import { Box, Button } from '@mui/material';
import React, {useState} from 'react';
import PropTypes from 'prop-types';


const ItemCount = ({initialValue = 0, stock, onAdd}) => {
    const [count, setCount] = useState(initialValue);

    const handleAddItem = () => count < stock && setCount(count + 1);
    const handleRemoveItem = () => count > 0 && setCount(count - 1);

return (
    <div >  
        <Box  sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 2, alignItems: 'center'}}>
            <Button variant="contained" size='medium' onClick={handleAddItem} >+</Button>
            <Button >{count}</Button>
            <Button variant="contained" size='medium' onClick={handleRemoveItem} disabled={count <= 0} >-</Button>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            <Button onClick={onAdd}>agregar al carrito</Button>
        </Box>
    </div>
    );
}

ItemCount.propTypes = {
	stock: PropTypes.number.isRequired,
	initialValue: PropTypes.number,
	onAdd: PropTypes.func.isRequired,
};

export default ItemCount;