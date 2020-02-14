module.exports = {
  getProducts: async (req, res) => {
    const db = req.app.get('db')
    const inventory = await db.get_all_products().catch(err => {
      res.status(500).send(err)
    })
    res.status(200).send(inventory)
  },

  getProduct: async (req, res) => {
    const db = req.app.get('db')
    const { id } = req.params
    const product = await db.get_product([+id]).catch(err => {
      res.status(500).send(err)
    })
    res.status(200).send(product)
  },

  addNewProduct: async (req, res) => {
    const db = req.app.get('db')
    const { name, price, img } = req.body
    await db
      .add_new_product([name, price, img])
      .then(() => {
        res.sendStatus(200)
      })
      .catch(err => {
        res.status(500).send(err)
      })
  },

  updateProduct: async (req, res) => {
    const db = req.app.get('db')
    const { id } = req.params
    const { name, price, img } = req.body
    let product = await db.get_product([+id]).catch(err => {
      res.status(500).send(err)
    })
    product = product[0]
    await db
      .update_product([
        +id,
        name || product.name,
        price || product.price,
        img || product.img
      ])
      .then(() => {
        res.sendStatus(200)
      })
      .catch(err => {
        res.status(500).send(err)
      })
  },

  deleteProduct: async (req, res) => {
    const db = req.app.get('db')
    const { id } = req.params
    await db
      .delete_product([+id])
      .then(() => {
        res.sendStatus(200)
      })
      .catch(err => {
        res.status(500).send(err)
      })
  }
}
