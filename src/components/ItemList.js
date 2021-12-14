// obtengo por prop el arr de productos resultante de la promise (itemListContainer)
// y lo mapeo haciendo uso del componente itemListContainer
import Item from './Item'

function ItemList ({props}) {
    return (
        <ul>
            {state.map(el =>
                <Item key={el.id} item={el} title={el.title} description={el.description}/>)}
        </ul>
    )
};

export default ItemList;