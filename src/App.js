import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarF from './components/NavBar';
import {} from '@fortawesome/free-solid-svg-icons'; 
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemListDetailContainer from './components/ItemListDetailContainer';


function App() {
  return(
    <BrowserRouter>
      <NavBarF />
      <Routes>
        <Route exact path="/" element={<ItemListContainer />} />
        <Route exact path="/:id" element={<ItemListDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
