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
    res.render('products/productById', {product})
  }
    static async deleteProduct(req,res){
      const id = req.params.id
      
      await Product.deleteProduct(id)

      res.redirect('/products')
    }
    static async updateProduct(req,res){
      const id = req.params.id

       const product = await Product.getProductById(id)
      res.render('products/updateProduct', {product})
    }
      static async updateProductPost(req,res){
        const id = req.body.id
        const name =  req.body.name
        const image = req.body.image
        const price = req.body.price
        const description =  req.body.description
        
        const product = new Product(name, image, price, description)

        await product.updateProduct(id)

        res.redirect('/products')
      }

}