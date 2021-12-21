// obtengo por prop el arr de productos resultante de la promise (itemListContainer)
// y lo mapeo haciendo uso del componente itemListContainer
import Item from './Item';
import {CardDeck, CardGroup} from 'react-bootstrap';

function ItemList ({products}) {
    return (
        <CardDeck >
            {products && products.map(product => <Item key={product.id} title={product.title} description={product.description} image={product.pictureUrl}/>)}
        </CardDeck>
    )
};

export default ItemList;