import React, { useState, useEffect} from "react";
import NavBarF from './components/NavBar';
import {} from '@fortawesome/free-solid-svg-icons'; 
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CheckoutPage from './components/CheckoutPage';
import SignIn from './components/SignIn';
import {getFirestore, collection, getDocs} from 'firebase/firestore'
import ItemContext from "./context/ItemContext";
import NotFound from "./components/NotFound";
import ItemDetail from "./components/ItemDetail";




function App() {
  const [state, setState] = useState();
  const db = getFirestore();
  useEffect(() => {
    const itemColletction = collection(db,'items');
  
    getDocs(itemColletction).then((snapshot) => {
        if(snapshot.size === 0){
          console.log('no results')
        }
        setState(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}) ));
        console.log({state})
    });
  }, [])

  return(
      <BrowserRouter>
        <NavBarF />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />}>
          </Route>
          <Route exact path="/detail" element={<ItemDetailContainer />} />
          <Route path='/detail/:id' element={<ItemDetail />} />
          <Route path="/checkout" element={< CheckoutPage />} />
          <Route exact path='/sign-in' element={<SignIn />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
