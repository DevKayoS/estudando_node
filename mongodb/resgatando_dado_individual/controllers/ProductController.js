const Product = require('../models/Product')

module.exports  = class ProductController {
  static async showProducts(req, res) {
    const products = await Product.getProduct()
    
    res.render('products/all', {products})
  }
  static createProduct(req,res){
    res.render('products/create')
  }
  static async saveProduct(req,res){
    const name =  req.body.name
    const price = req.body.price
    const image = req.body.image
    const description =  req.body.description
    
    const product = new Product(name, image, price, description)

    product.save()

    res.redirect('/products')
  }
  static async getProduct(req,res){
    const id = req.params.id

    const product = await Product.getProductById(id)
    console.log(product)
    res.render('products/productById', {product})
  }
}