import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Button, IconButton } from '@mui/material';
import React, {useState} from 'react';
import { DeleteOutline } from '@mui/icons-material';


function CheckoutCard(item) {

    function CheckoutCardCount ({initialValue = 0, stock, onAdd}) {
        const [count, setCount] = useState(initialValue);
        const handlerAdd = () => {
            if(count < stock) {
                setCount((prev) => prev + 1);
            } else { alert('No hay más unidades disponibles'); }
        };
        const handlerRemove = () => {
            if(count > 0) {
                setCount((prev)=> prev -1);
            }
        };

        return (
          <div >  
              <Box  sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 2, alignItems: 'center'}}>
                <Button >{count}</Button>
                <Button variant="contained" size='medium' onClick={()=>handlerAdd(count)}>+</Button>
                <IconButton>
                    <DeleteOutline variant="contained" size='medium' onClick={handlerRemove} />
                </IconButton>
              </Box>
          </div>
        );
    }

    return (
      <Card sx={{ maxWidth: 345, padding: 3, margin: 2, maxHeight: '500px'}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.price}
        </Typography>
      </CardContent>
      <CheckoutCardCount stock={item.units} onAdd={(count) => console.log('COUNT', count)}  /> 
    </Card>
    )
}

export default CheckoutCard;