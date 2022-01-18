// obtengo por prop el arr de productos resultante de la promise (itemListContainer)
// y lo mapeo haciendo uso del componente itemListContainer
import { Box } from '@mui/material';
import Item from './Item';

function ItemList ({products}) {
    return (
        <Box  sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'black'}}>
            {products.map(products => <Item key={products.id} product={products} />)}
        </Box>
    )
};

export default ItemList;