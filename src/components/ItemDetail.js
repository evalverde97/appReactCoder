// vista expandida del item con detalle y precio
import React, {useState, useContext} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import {CartContext} from '../context/CartContext.js';
import ItemCount from './ItemCount.js'
import { Box, Button } from '@mui/material';

const ItemDetail = item => {
  const {id, title, description, image, price, stock} = item;
  const {addItem} = useContext(CartContext);
	const navigate = useNavigate();
	const [counter, setCounter] = useState(null);

	const handleOnAdd = count => {
		setCounter(count);
		addItem( item, count);
	};

  console.log(item)

    return (
        <Container data-id={id}>
          <Box sx={{margin:6}} >
            <Button variant="outlined" color="error" onClick={() => navigate(-1)}>Back</Button>
          </Box>
          <Box >
          <Row>
            <Col>
                <Box>
                <h1>hola</h1>
                <h1>{title}</h1>
                <img src={image} alt={title} />
                <p>{price}</p>
                </Box>
            </Col>
            <Col>
              <Col>
                <p>{description}</p>
              </Col>
              <Col>
                <ItemCount stock={stock} onAdd={handleOnAdd} />
                <br/>
                <Button onClick={() => navigate('/cart')}>Go to cart</Button>
              </Col>
            </Col>
            </Row>
          </Box>
        </Container>
    )
};

ItemDetail.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	Image: PropTypes.node.isRequired,
	price: PropTypes.number.isRequired,
	stock: PropTypes.number.isRequired,
};

export default ItemDetail;

