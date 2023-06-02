import { collection, getDocs, doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase/config'

export const getAllProducts = async () => {
  const querySnapshot = await getDocs(collection(db, 'products'))

  let products = []

  querySnapshot.forEach((doc) => {
    products.push({
      ...doc.data(),
      id: doc.id,
    })
  })

  return products
}

export const getProductById = async (id) => {
  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);

  return docSnap.data()
}
