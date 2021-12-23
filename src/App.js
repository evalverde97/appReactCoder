import React from 'react';
import NavBarF from './components/NavBar';
import {} from '@fortawesome/free-solid-svg-icons'; 
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return(
      <BrowserRouter>
        <NavBarF />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
