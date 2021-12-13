import itemCount from 'ItemCount.js';

let products = [{
    id: 1,
    title: 'RudeGolem',
    description: 'colection of @rudegolem',
    price: '$10.00',
    pictureUrl: './assets/images/rudegolem#001.png',
    },
    {
    id: 2,
    title: 'BAYC #20',
    description: 'Colection of Bored Ape Yatch Club',
    price: '$10.00',
    pictureUrl: '.\assets\BAYC#20.jpg'
    }, 
    {
    id: 3,
    title: 'BAYC #8746',
    description: 'Colection of Bored Ape Yatch Club',
    price: '$10.00',
    pictureUrl: '.\assets\BAYC#8746.jpg'
    }, 
    {
    id: 4,
    title: 'Planet #04',
    description: 'Colection of Planets',
    price: '$10.00',
    pictureUrl: '.\assets\Planet#04.jpeg'
    }
];

function Item({product}) {
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