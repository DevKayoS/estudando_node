const conn = require('../db/conn')

const {ObjectId } = require('mongodb')
// const ObjectId = new ObjectId()

class Product {

  constructor(name, image, price, description){
    this.name =name
    this.image = image
    this.price=price
    this.description=description
  }

  save(){
    const product = conn.db().collection('products').insertOne({
      name: this.name,
      image: this.image,
      price: this.price,
      description: this.description
    })

    return product
  }

  static getProduct(){
    const products = conn.db().collection('products').find().toArray()

    return products
  }
  static async getProductById(id){
    const product = await conn.db().collection('products').findOne({_id: new ObjectId(id)})
    return product
  }
  static async deleteProduct(id){
    await conn.db().collection('products').deleteOne({_id: new ObjectId(id)})
    return
  }
  async updateProduct(id) {
    if (!ObjectId.isValid(id)) {
      throw new Error('Invalid ID format');
    }
    await conn.db().collection('products').updateOne(
      { _id: new ObjectId(id) },
      { $set: { name: this.name, image: this.image, price: this.price, description: this.description } }
    );
  }
}

module.exports = Product