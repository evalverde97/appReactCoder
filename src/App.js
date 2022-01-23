import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from "./components/Home";
import {NavBar} from './components/NavBar';
import { ItemsContextProvider } from './context/ItemContext';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Footer from "./components/Footer";




function App() {
  return(
    <ItemsContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path='/category/:id' element={<Home />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ItemsContextProvider>
  );
}

export default App;
