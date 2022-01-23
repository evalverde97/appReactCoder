// vista expandida del item con detalle y precio
import React, {useState, useContext} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import {CartContext} from '../context/CartContext.js';
import ItemCount from './ItemCount.js'
import { Box } from '@mui/material';

const ItemDetail = item => {
  const {id, title, description, image, price, stock} = item;
  const {addItem} = useContext(CartContext);
	const navigate = useNavigate();
	const [counter, setCounter] = useState(null);

	const handleOnAdd = count => {
		setCounter(count);
		addItem(item, count);
	};

    return (
        <Container>
          <Box>
            <Button onClick={() => navigate(-1)}>Back</Button>
          </Box>
          <Box data-id={id}>
          <Row>
            <Col>
                <h1>{title}</h1>
                <img src={image} alt={title} />
                <p>{price}</p>
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
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	Image: PropTypes.node.isRequired,
	price: PropTypes.number.isRequired,
	stock: PropTypes.number.isRequired,
};

export default ItemDetail;

