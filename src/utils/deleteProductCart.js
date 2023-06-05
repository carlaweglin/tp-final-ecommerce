export function deleteProductCart(id) {
    let products = JSON.parse(localStorage.getItem('products'))
    localStorage.setItem('products', JSON.stringify(products.filter((product) => product.id != id)))
    
}