// misma premisa que ItemListContainer: useEffect para montar el componente, debe llamar por async mock (promise), en dos segundos debe devolver un item y guardarlo en un estado propio 
import {useState, useEffect} from 'react';
import { Container, Spinner } from 'react-bootstrap';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = (product) => {
    const [state, setState] = useState(null);
    const API = new Promise((resolve, reject) => {
        setTimeout(() => {
        if(product){
            resolve(product);
        } else {
            reject(new Error());
        }
        }, 2000)
    });
    useEffect(() => {
        API.then(res => setState(res)).catch(err => console.log(err))
    }, [])
    
    return (
            state ? <ItemDetail item={state} /> : <Container fluid><Spinner animation="border" /></Container>
        );
}

export default ItemDetailContainer;