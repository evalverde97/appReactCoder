// obtengo por prop el arr de productos resultante de la promise (itemListContainer)
// y lo mapeo haciendo uso del componente itemListContainer
import Item from './Item'

function ItemList ({products}) {
    return (
        <ul>
            {products && products.map(product => <Item key={product.id} title={product.title} description={product.description} />)}
        </ul>
    )
};

export default ItemList;