import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs,getDoc,doc,query,addDoc,updateDoc, Timestamp, where} from 'firebase/firestore/lite';


const firebaseConfig = {
    apiKey: "AIzaSyC6QjDWqICWV_doT-tMIJtyxL0-nBET7zI",
    authDomain: "nofungiblestore.firebaseapp.com",
    projectId: "nofungiblestore",
    storageBucket: "nofungiblestore.appspot.com",
    messagingSenderId: "332594936226",
    appId: "1:332594936226:web:b017282b2c37452e2f5afb"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export class FirebaseClient {
	async getItems() {
		try {
			const ref = collection(db, 'items');
			const docSnapshot = await getDocs(ref);
			return docSnapshot.docs.map(doc => ({
				id: doc.id,
				...doc.data(),
			}));
		} catch (error) {
			console.error('getItems', error);
		}
	}

	async getItem(id) {
		try {
			const ref = doc(db, 'items', id);
			const docSnapshot = await getDoc(ref);
			if (docSnapshot.exists()) {
				return {
					id: docSnapshot.id,
					...docSnapshot.data(),
				};
			}

			return null;
		} catch (error) {
			console.error('getItems', error);
		}
	}

	async getItemsByCategory(category) {
		try {
			const q = query(collection(db, 'items'), where('category', '==', category));
			const docSnapshot = await getDocs(q);
			return docSnapshot.docs.map(doc => ({
				id: doc.id,
				...doc.data(),
			}));
		} catch (error) {
			console.error('getIroducts', error);
		}
	}

	async updateItemStockById(id, count) {
		try {
			const ref = doc(db, 'items', id);
			const docSnapshot = await getDoc(ref);
			if (docSnapshot.exists()) {
				const {stock} = docSnapshot.data();
				// Defino mi nuevo stock
				const newStock = stock === 0 || stock - count < 0 ? 0 : stock - count;
				// Actualizo el valor del stock
				await updateDoc(ref, {
					stock: newStock,
				});
				return true;
			}

			return null;
		} catch (error) {
			console.error('updateItemStockById', error);
		}
	}

	async addOrder(items, user, price, total) {
		try {
			// Mapeo mi nueva orden
			const newOrder = {
				...user,
				items,
				date: Timestamp.now().toDate(),
				price,
				total,
			};
			// Actualizo el stock de los items
			items.forEach(async element => {
				await this.updateProductStockById(element.item.id, element.count);
			});
			// Genero nueva orden
			const docRef = await addDoc(collection(db, 'orders'), newOrder);
			// Retorno el id de la nueva orden
			return docRef.id;
		} catch (error) {
			console.error('addOrder', error);
		}
	}

	// Para actualizar el stock de todos los items a 20
	async updateItemsStock() {
		try {
			const items = await this.getItems();
			items.forEach(async item => {
				const ref = doc(db, 'items', item.id);
				const docSnapshot = await getDoc(ref);
				if (docSnapshot.exists()) {
					// Actualizo el valor del stock
					await updateDoc(ref, {
						stock: 100,
					});
					return true;
				}

				return null;
			});
		} catch (error) {
			console.error('updateItemsStock', error);
		}
	}
}