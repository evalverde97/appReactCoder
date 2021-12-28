import { Card } from 'react-bootstrap';
import ItemCount from './ItemCount';



function Item(item) {

    return (
        <Card style={{ width: '18rem', padding: '10px', margin: '10px'}} >
        <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                {item.description}
              </Card.Text>
              <Card.Footer>{item.price}</Card.Footer>
              <ItemCount stock={item.units} onAdd={(count) => console.log('COUNT', count)}  />
            </Card.Body>
        </Card>
    )
}

export default Item;