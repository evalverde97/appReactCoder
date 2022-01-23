// obtengo por prop el arr de productos resultante de la promise (itemListContainer)
// y lo mapeo haciendo uso del componente itemListContainer
import React from "react";
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import Item from './Item';

function ItemList ({items}) {
    return (
        <Box  sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'black'}}>
            {items.map((item, index)=>(<Item key={'itemlistmap1' + index} {...item}/> ))}
        </Box>
    )
};

ItemList.propTypes = {
	items: PropTypes.arrayOf({
		id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		category: PropTypes.string.isRequired,
		img: PropTypes.node.isRequired,
		price: PropTypes.number.isRequired,
		stock: PropTypes.number.isRequired,
	}),
};

export default ItemList;