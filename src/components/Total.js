import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const UseStyles = makeStyles((theme) => ({
    button:{
        backgroundColor: '#4d194d !important',
        borderColor: '#312244',
        color: 'white !important',
        marginTop: '2rem',
    }
}))

const Total = () => {
    const classes = UseStyles();
    return (
      <div>
          <h4>Total items: {3}</h4>
          <h5> 20 ETH</h5>
          <Button className={classes.button} >Pagar</Button>
      </div>
    );
};

export default Total;