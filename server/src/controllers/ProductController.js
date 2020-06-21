const mongoose = require('mongoose')

const Product = mongoose.model('Product')

module.exports = {
  // Método para listar algo da collection
  async index(req, res) {
    const { page = 1 } = req.query
    const products = await Product.paginate({}, { page, limit:10})
    return res.json(products)
  },

  // Metodo para criar algo na collection
  async store(req, res) {
    const product = await Product.create(req.body)
    return res.json(product)
  },

  // Método para encontra algo da collection pelo id
  async show(req, res) {
    const product = await Product.findById(req.params.id)
    return res.json(product)
  },

  // Método para modificar algo da collection pelo id
  async update(req, res) {
    const product = await Product.findOneAndUpdate(req.params.id, req.body,{ new: true })
    return res.json(product)
  },
  // Metodo para deletar algo da collection pelo id
  async destroy(req, res) {
    await Product.findByIdAndDelete(req.params.id, (err) => {
      return console.log(err)
    })
    return res.send()
  },

  // Método para deletar todos os documentos da collection
  async destroyAll(req, res) {
    await Product.deleteMany({ }, (err) => {
      return console.log(err)
    })
    return res.send()
  }
}