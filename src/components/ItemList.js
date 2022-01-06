// obtengo por prop el arr de productos resultante de la promise (itemListContainer)
// y lo mapeo haciendo uso del componente itemListContainer
import { Box } from '@mui/material';
import Item from './Item';

function ItemList ({products}) {
    return (
        <Box  sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'black'}}>
            {products && products.map(product => <Item key={product.data().id} title={product.data().title} description={product.data().description} image={product.data().image} price={product.data().price} stock={product.data().stock}/>)}
        </Box>
    )
};

export default ItemList;