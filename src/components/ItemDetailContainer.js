// misma premisa que ItemListContainer: useEffect para montar el componente, debe llamar por async mock (promise), en dos segundos debe devolver un item y guardarlo en un estado propio 
import { Box, CircularProgress } from "@mui/material";
import ItemDetail from './ItemDetail';


const ItemDetailContainer = ({state}) => {    
    return (
            state ? <ItemDetail item={state} /> : <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '100vh'}}><CircularProgress color="secondary"/></Box>
        );
}

export default ItemDetailContainer;