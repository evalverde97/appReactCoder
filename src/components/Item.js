import ItemCount from './ItemCount';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';


function Item({id,title,image,price,stock, description}) {

  const navigate = useNavigate();

    return (
        <Card data-id={id} onClick={() => stock > 0 && navigate(`/item/${id}`)} sx={{ maxWidth: 345, padding: 3, margin: 2, maxHeight: '500px'}}>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt={description}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant='p' >{description}</Typography>
            <Typography variant="body2" color="text.secondary">
              {price} ETH
            </Typography>
          </CardContent>
        </Card>
    )
}

export default Item;