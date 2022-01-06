import ItemCount from './ItemCount';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


function Item(item) {

    

    return (
      <Link >
        <Card sx={{ maxWidth: 345, padding: 3, margin: 2, maxHeight: '500px'}}>
          <CardMedia
            component="img"
            height="140"
            image={item.image}
            alt={item.description}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.price}
            </Typography>
          </CardContent>
          <ItemCount stock={item.units} onAdd={(count) => console.log('COUNT', count)}  /> 
        </Card>
      </Link>
    )
}

export default Item;