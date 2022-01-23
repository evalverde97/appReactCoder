import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActions, IconButton } from '@mui/material';
import React, {useContext} from 'react';
import { DeleteOutline } from '@mui/icons-material';
import PropTypes from 'prop-types';
import {Link, useNavigate} from 'react-router-dom';
import { CartContext } from '../context/CartContext';


export const CartCard = product => {
  const {removeItem, removeOneItem} = useContext(CartContext);
	const {item, count} = product;
	const {id, title, category,	img, price, stock} = item;
	const navigate = useNavigate();

  const CartCardCount = (stock, onAdd) =>{
    <CardActions>
      <IconButton>
        <DeleteOutline onClick={() => removeOneItem(item)} >Delete 1</DeleteOutline>
      </IconButton>
      <IconButton>
        <DeleteOutline onClick={() => removeItem(item)} >Delete All</DeleteOutline>
      </IconButton>
    </CardActions>
  }

    return (
      <Card data-id={id} onClick={() => navigate(`/item/${id}`)} sx={{ maxWidth: 345, padding: 3, margin: 2, maxHeight: '500px'}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {`${title}x${count}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {count*price}
        </Typography>
      </CardContent>
      <CartCardCount stock={stock} onAdd={(count) => console.log('COUNT', count)}  /> 
    </Card>
    )
}

CartCard.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	img: PropTypes.node.isRequired,
	price: PropTypes.number.isRequired,
};