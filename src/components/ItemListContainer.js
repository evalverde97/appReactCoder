import { Box, CircularProgress } from "@mui/material";
import React, { useState, useEffect} from "react";
import ItemList from "./ItemList";
import {getFirestore, collection, getDocs} from 'firebase/firestore'


export default function ItemListContainer() {
  const [state, setState] = useState(null);
  useEffect(() => {
    const db = getFirestore();
    const itemColletction = collection(db,'items');

    getDocs(itemColletction).then((snapshot) => {
        if(snapshot.size === 0){
          console.log('no results')
        }
        setState(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}) ));
    });
  }, [])

  // hasta acá 'state' contiene un array de objetos con propiedades que son los items guardados en mi db

  return (
    // state ? <ItemList products={state} /> : <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '100vh'}}><CircularProgress color="secondary"/></Box>

     console.log(state), 
     <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '100vh'}}><CircularProgress color="secondary"/></Box>

    );
}
// cambiar el return por este codigo cuando consiga acceder a las props de cada objeto
// state ? <ItemList products={state} /> : <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '100vh'}}><CircularProgress color="secondary"/></Box>


