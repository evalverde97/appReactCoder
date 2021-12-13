import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarF from './components/NavBar';
import {} from '@fortawesome/free-solid-svg-icons'; 
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';


function App() {
  return<>
    <NavBarF />
    <ItemListContainer greeting="Usuario" />
    <ItemCount stock={15} onAdd={(count)=>console.log(count)} />
  </>
}

export default App;
