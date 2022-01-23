import React, {useState} from "react"; 
import {db} from '../config/Config'

export const AddItems = () => {
    //uso hook de useState para asignar los valores a las variables y crear el item
    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState(0);
    const [itemImg, setItemImg] = useState(null);
    const [error, setError] = useState('');

    const types = ['image/png', 'image/jpeg', 'image/jpg', 'image/PNG']
    const itemImgHandler = (e) => {
        let selectedFile = e.target.files[0];
        if(selectedFile && types.includes(selectedFile.type)){
            setItemImg(selectedFile);
            setError('');
        }
        else{
            setItemImg(null)
            setError('Please select a valid image type (png, jpg or jpeg)')
        }
    };
// al enviar el form se ejectua esta funcion 
    const addItem = (e)=>{
        e.preventDefault();

        // probar reestructurar a mi manera la lógica

        // const uploadTask = storage.ref(`item-images/${itemImg.name}`).put(itemImg);
        // uploadTask.on('state_changed', snapshot =>{
        //     const progress = (snapshot.bytesTransferred/snapshot.totalBytes) * 100;
        //     console.log(progress);
        // }, err=>{
        //     setError(err.message)
        // }, ()=>{
        //     storage.ref('item-images').child(itemImg.name).getDownloadURL().then(url=>{
        //         db.collection('items').add({
        //             itemName: itemName,
        //             itemPrice: Number(itemPrice),
        //             itemImg: url
        //         }).then(()=>{
        //             setItemName('')
        //             setItemPrice(0)
        //             setItemImg(null)
        //             setError('')
        //             document.getElementById('file').value = '';
        //         }).catch(err => setError(err.message));
        //     })
        // })
    }

    return(
        <div className='container'>
            <br/>
            <h2>ADD ITEMS</h2>
            <hr/>
            <form autoComplete='off' className='form-group' onSubmit={addItem}>
                <label htmlFor="product-name">Item Name</label>
                <br/>
                <input type='text' className='form-control' required  onChange={(e)=>setItemName(e.target.value)} value={itemName} />
                <br/>
                <label htmlFor='product-price'>Item Price</label>
                <br/>
                <input type='number' className="form-control" required onChange={(e)=>setItemPrice(e.target.value)} value={itemPrice} />
                <br/>
                <label htmlFor='product-img'>Item Image</label>
                <br/>
                <input type='file' className='form-control' onChange={itemImgHandler} id='file' />
                <br/>
                <button className="btn btn-success btn-md mybtn" >ADD</button>
            </form>
            {error && <span>{error}</span>}
        </div>
    )
}