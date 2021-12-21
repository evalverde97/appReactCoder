// misma premisa que ItemListContainer: useEffect para montar el componente, debe llamar por async mock (promise), en dos segundos debe devolver un item y guardarlo en un estado propio 
import {useState, useEffect} from 'react';

const ItemDetailContainer = (item) => {
    const [item, setItem] = useState(null);
    const getItem = async ((resolve, reject) => {
        const call = (setTimeout( async ({item}) => {
            if(item){
                resolve(item);
            } else {
                reject(new Error());
            }
        }, 2000));
        let result = call(item);
        setItem(result);
    });
    useEffect(() => {getItem},[item])
    
    return (
            item ? <ItemDetail item={item} /> : <div>Loading...</div>
        );
}

export default ItemDetailContainer;