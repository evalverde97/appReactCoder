import React, {useContext, useState} from "react";
import {Link, useNavigate} from 'react-router-dom';
import { CartContext } from "../context/CartContext";
import { FirebaseClient } from "../config/Config";
import { Grid, Typography, Button } from "@mui/material";
import {CartCard} from "./CartCard";
import { makeStyles } from "@mui/styles";


const Cart = () => {
    const {cartItems, clear, price, total} = useContext(CartContext);
	const [user, setUser] = useState({});
	const navigate = useNavigate();
	const firebase = new FirebaseClient();

    const UseStyles = makeStyles((theme) => ({
        button:{
            backgroundColor: '#4d194d !important',
            borderColor: '#312244',
            color: 'white !important',
            marginTop: '2rem',
        }
    }))

	const addOrderDb = async () => {
		if (user) {
			try {
				const idOrder = await firebase.addOrder(cartItems, user, price, total);
				navigate(`/thank-you/${idOrder}`);
			} catch (error) {
				console.error('components/CartContainer/getProductFromDbById', error);
			}
		}
		return null;
	};

    function FormRow () {
        return (
            <React.Fragment>
                {cartItems && cartItems.map( (item, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <CartCard key={'cartpagemap'+ index} {...item} />
                    </Grid>
                ))}
            </ React.Fragment>
        )
    };

    const classes = UseStyles();

    return(
        <div >
            <Grid container spacing={3}>
                <Grid item xs={12} aling='center'>
                    <Typography sx={{ padding: 3}} align='center' gutterBottom variant='h4'> CART </Typography>
                </Grid>
                <Grid sx={{ display: 'flex', flexDirection: 'row'}}item xs={12} sm={8} md={9} container spacing={2}>
                    <FormRow />
                </Grid>
                <Grid align='center' item xs={12} sm={4} md={3}>
                <div>
                    <h4>Total items: {total}</h4>
                    <h5> {price} ETH</h5>
                    <Button className={classes.button} onSubmit={() => addOrderDb()} >Pagar</Button>
                </div>
                <div>
                    <Button sx={{padding: 2, margin: 3}} onClick={() => clear()} >Clear cart</Button>
                </div>
                </Grid>
            </Grid>
        </ div>
    ) 

}

export default Cart;