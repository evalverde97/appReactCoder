// misma premisa que ItemListContainer: useEffect para montar el componente, debe llamar por async mock (promise), en dos segundos debe devolver un item y guardarlo en un estado propio 
import { Box, CircularProgress } from "@mui/material";
import ItemDetail from './ItemDetail';
import React, {useEffect, useState, useContext} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {FirebaseClient} from '../config/Config';
import {ItemsContext} from '../context/ItemContext';


const ItemDetailContainer = () => {   
    const {id: idItem} = useParams();
	const navigate = useNavigate();
	const [item, setItem] = useState(null);
	const {setLoad} = useContext(ItemsContext);
	const firebase = new FirebaseClient();

	useEffect(() => getProductFromDbById(), []);

	const getProductFromDbById = async () => {
		try {
			setLoad(true);
			const value = await firebase.getItem(idItem);
			setLoad(false);
			if (value) {
				setItem(value);
			} else {
				navigate('/');
			}
		} catch (error) {
			navigate('/');
			console.error('components/ItemDetailContainer/getItemFromDbById', error);
		}
	};
    return (
            item ? <ItemDetail {...item} /> : <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '100vh'}}><CircularProgress color="secondary"/></Box>
        );
}

export default ItemDetailContainer;