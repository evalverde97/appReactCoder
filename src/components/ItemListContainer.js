import { Box, CircularProgress } from "@mui/material";
import ItemList from "./ItemList";


export default function ItemListContainer(state) {
  return (
    // state ? <ItemList products={state} /> : <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '100vh'}}><CircularProgress color="secondary"/></Box>

     console.log(state), 
     <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '100vh'}}><CircularProgress color="secondary"/></Box>

    );
}

