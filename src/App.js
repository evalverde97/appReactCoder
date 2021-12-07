import './App.css';
import React from 'react';
import NavBarF from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-solid-svg-icons'; 
import ItemListContainer from './components/ItemListContainer';
import { Container } from 'react-bootstrap';


function App() {
  return(
    <Container className="app">
    <NavBarF />
    <ItemListContainer greeting="GIF perro" />
    </Container>
  );
}

export default App;
