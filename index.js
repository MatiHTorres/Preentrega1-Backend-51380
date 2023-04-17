class ProductManager {
    constructor(){
        this.products = [];
        this.id = 1;
    }

    addProduct(product) {
        let checkCode = this.products.find((prod) => prod.code === product.code)
        if(!checkCode){
            if(product.title && product.description && product.price && product.thumbnail && product.code && product.stock){
                
                let newId = {...product,id: this.id}
                this.products.push(newId)
                this.id ++

                return 'Product Added Successfully' 
            } else {
                return 'Error , Fields Missing'
            }
        } else {
            return 'This CODE already exists'   
        }
   
        
    }

    getProducts(){
        return this.products
    }

    getProductByid(id){
        let found = this.products.find((prod) => prod.id === id)
        if(found){
            console.log('Product found successfully')
            return found
        } else {
            return 'Product not found'
        }
    }
}

const product1 = {
    title: 'Catan',
    description: 'Juego de mesa , Catan',
    price: 25000, // Peso Chileno
    thumbnail: 'https://devirinvestments.s3.eu-west-1.amazonaws.com/img/catalog/product/8436017220100-1200-face3d.jpg',
    code: '1827',
    stock: '15'
}

const product2 = {
    title: 'Monopoly',
    description: 'Juego de mesa , Monopoly',
    price: 20000,
    thumbnail: 'https://falabella.scene7.com/is/image/Falabella/5934112_1?wid=800&hei=800&qlt=70',
    code: '2458',
    stock: '15'
}
const product3 = {
    title: 'Clue',
    description: 'Juego de mesa , Clue',
    price: 22000,
    thumbnail: 'https://www.paris.cl/dw/image/v2/BCHW_PRD/on/demandware.static/-/Sites-cencosud-master-catalog/default/dwcde6c150/images/imagenes-productos/649/209150-0000-001.jpg?sw=513&sh=654&sm=fit',
    code: '1827', // Codigo repetido con el product1
    stock: '15'
}
const product4 = {
    title: 'Exploding Kittens',
    description: 'Juego de cartas , Exploding Kittens',
    price: 17000,
    thumbnail: 'https://m.media-amazon.com/images/I/710D3AP+ipL.jpg',
    code: '8572',
    stock: '15'
}
const product5 = {
    title: 'UNO',
    description: 'Juego de cartas , UNO',
                    // Falta del campo , price
    thumbnail: 'https://dojiw2m9tvv09.cloudfront.net/10102/product/unoclasico-14328.jpg',
    code: '5782',
    stock: '15'
}

const productManager = new ProductManager()

// Console.logs de testeo

console.log(productManager.addProduct(product1)) // Product Added Successfully
console.log(productManager.addProduct(product2)) // Product Added Successfully
console.log(productManager.addProduct(product3)) // This CODE already exists
console.log(productManager.addProduct(product4)) // Product Added Successfully
console.log(productManager.addProduct(product5)) // Error , Fields Missing
console.log(productManager.getProducts()) // Devuelvo un arreglo con todos los productos creados correctamente , en este caso: product, product2 y product4
console.log(productManager.getProductByid(3)) // Devuelvo un producto, YA CREADO CORRECTAMENTE , segun ID , en este caso: product4 que se creo con id:3
console.log(productManager.getProductByid(99)) // Product not found