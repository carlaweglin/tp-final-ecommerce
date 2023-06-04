

export function addProductToCart(product) {
    console.log("veo como viene product:",product);
    let products = JSON.parse(localStorage.getItem('products')) || []
    products.push(product)
    let arrayAux = []
    const checkStock = (products) => {
        products.map ((product)=>{
            let productAux = product 
            if (products.some((e) => e.id === product.id)) {
                let quantity = products.filter((productArray) => productArray.id === product.id )
                if (quantity.length > 1){
                    productAux.quantity = product.quantity + 1
                }
                if (!arrayAux.some((e) => e.id === product.id)){
                    arrayAux.push(productAux)
                }
            }
        })
    }
    checkStock(products)
    localStorage.setItem('products', JSON.stringify(arrayAux))
}