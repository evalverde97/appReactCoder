import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarF from './components/NavBar';
import {} from '@fortawesome/free-solid-svg-icons'; 
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const Home = () => {
  return(
    <div>
      <NavBarF />
      <ItemListContainer />
    </div>
  );
}

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
