import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount';
import ItemDetailContainer from './ItemDetailContainer';
import ItemListContainer from './ItemListContainer';

function Item(item) {

    return (
        <Card style={{ width: '18rem' }} >
        <Card.Img variant="top" src={item.pictureUrl} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                {item.description}
              </Card.Text>
              <ItemCount />
              <Button onPress={<ItemDetailContainer item={item} />}>Detalle</Button>
            </Card.Body>
        </Card>
    )
}

export default Item;