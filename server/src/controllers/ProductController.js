import ProductModel from "../models/ProductModel.js"

export const getProducts = async (req, res) => {
     try {
          const products = await ProductModel.find({})
          res.status(200).send(products)
     } catch (error) {
          res.status(500).send(error.message)
     }
}

export const getProduct = async (req, res) => {
     try {
          const product = await ProductModel.findById(req.params.id)
          res.status(200).send(product)
     } catch (error) {
          res.status(500).send(error.message)
     }
}

export const createProduct = async (req, res) => {
     try {
          const {name, image, discountPrice, price} = req.body
          const newProduct = new ProductModel({name, image, price, discountPrice})
          newProduct.save()
          res.status(200).send({msg: "Added"})
     } catch (error) {
          res.status(500).send(error.message)
     }
}

export const deleteProduct = async (req, res) => {
     try {
          await ProductModel.findByIdAndDelete(req.params.id)
          res.status(200).send({msg: "Deleted"})
     } catch (error) {
          res.status(500).send(error.message)
     }
}