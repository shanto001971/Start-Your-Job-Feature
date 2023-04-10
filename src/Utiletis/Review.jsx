import { getStoredCart } from "./Utiletis"


export const productsAndCartData = async () => {
  const productsData = await fetch('/public/jobs.json')
  const products = await productsData.json()
    // console.log(products)
  const savedCart = getStoredCart()
  const initialCart = []
  for (const id in savedCart) {
    const foundProduct = products.find(product => product.id === id)
    if (foundProduct) {
      const quantity = savedCart[id]
      foundProduct.quantity = quantity
      initialCart.push(foundProduct)
    }
  }

  return { products, initialCart }
}
