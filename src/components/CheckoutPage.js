import React from "react"
import { Grid, Typography } from "@mui/material"
import { products } from "../mocks/products"
import CheckoutCard from "./CheckoutCard"
import Total from "./Total"


const CheckoutPage = () => {

    function FormRow () {
        return (
            <React.Fragment>
                {products.map(product => (
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <CheckoutCard product={product} key={product.id} title={product.title} description={product.description} price={product.price} stock={product.units} />
                    </Grid>
                ))}
            </ React.Fragment>
        )
    };

    return(
        <div >
            <Grid container spacing={3}>
                <Grid item xs={12} aling='center'>
                    <Typography sx={{ padding: 3}} align='center' gutterBottom variant='h4'> Mi carrito </Typography>
                </Grid>
                <Grid sx={{ display: 'flex', flexDirection: 'row'}}item xs={12} sm={8} md={9} container spacing={2}>
                    <FormRow />
                </Grid>
                <Grid align='center' item xs={12} sm={4} md={3}>
                    <Total />
                </Grid>
            </Grid>
        </ div>
    ) 

}

export default CheckoutPage;