import React from 'react';
import NavBarF from './components/NavBar';
import {} from '@fortawesome/free-solid-svg-icons'; 
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';


function App() {
  return<>
    <NavBarF />
    <ItemListContainer greeting="GIF perro" />
    <ItemCount stock={15} onAdd={(count)=>console.log(count)} />
  </>
}

export default App;
