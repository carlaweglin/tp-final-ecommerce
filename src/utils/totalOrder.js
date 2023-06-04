export function totalOrder(products) {
    let price = 0
    products.map((product) => {
    price = price + (product.quantity * product.price)
  }
  )
  
    return price


  
}
