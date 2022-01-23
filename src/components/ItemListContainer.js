import { Box, CircularProgress } from "@mui/material";
import ItemList from "./ItemList";
import PropTypes from 'prop-types';
import React, {useState, useEffect, useContext} from "react";
import {ItemsContext} from '../context/ItemContext'
import {FirebaseClient} from '../config/Config'
import { useParams } from "react-router-dom";

export default function ItemListContainer() {
  const {items, setItems, load, setLoad} = useContext(ItemsContext);
  const {id: idCategory} = useParams();
  const firebase = new FirebaseClient();

  useEffect(()=>{
    getItemsFromDb();
  }, [idCategory]);

  const getItemsFromDb = async () => {
    try {
      setLoad(true)
      const value = (idCategory)
        ? await firebase.getItemsByCategory(idCategory)
        : await firebase.getItems();
      setItems(value);
      setLoad(false);
    } catch (error) {
      console.error('components/ItemListContainer/getItemsFromDb', error);
    }
  }

  ItemListContainer.propTypes = {items: PropTypes.object.isRequired}
  return (
    <>
      <Box>
        {load ? <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '100vh'}}><CircularProgress color="secondary"/></Box>
        : <ItemList items={items} />  }
      </Box>
    </>
    // items ? <ItemList items={items} /> 
    // : <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '100vh'}}><CircularProgress color="secondary"/></Box>
  );
}

