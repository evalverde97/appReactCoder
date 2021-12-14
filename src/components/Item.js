import { Card } from 'react-bootstrap';
import ItemCount from './ItemCount';

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
            </Card.Body>
        </Card>
    )
}

export default Item;