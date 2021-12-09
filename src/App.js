import './App.css';
import React from 'react';
import NavBarF from './components/NavBar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {} from '@fortawesome/free-solid-svg-icons'; 
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';


function App() {
  return<>
    <NavBarF />
    <ItemListContainer greeting="GIF perro" />
    <ItemCount stock={15}/>
  </>
}

export default App;
