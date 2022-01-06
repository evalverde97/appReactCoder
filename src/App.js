import React from 'react';
import NavBarF from './components/NavBar';
import {} from '@fortawesome/free-solid-svg-icons'; 
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CheckoutPage from './components/CheckoutPage';
import SignIn from './components/SignIn';


function App() {
  return(
      <BrowserRouter>
        <NavBarF />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/:id" element={<ItemDetailContainer />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route exact path='/sign-in' element={<SignIn />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
