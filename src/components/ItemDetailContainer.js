// misma premisa que ItemListContainer: useEffect para montar el componente, debe llamar por async mock (promise), en dos segundos debe devolver un item y guardarlo en un estado propio 
import {useState, useEffect} from 'react';

const ItemDetailContainer = (item) => {
    const [item, setItem] = useState(null);
    const getItem = new Promise((resolve, reject) => {
        setTimeout(() => {
        if(item){
            resolve(item);
        } else {
            reject(new Error());
        }
        }, 2000)
    });
    useEffect(() => {
        getItem
        .then(res => setItem(res))
        .catch(err => console.log(err))
    }, [])
    
    return (
            item ? <ItemDetail item={item} /> : <div>Loading...</div>
        );
}

export default ItemDetailContainer;