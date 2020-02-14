require('dotenv').config()
const express = require('express')
const massive = require('massive')
const app = express()
const ctrl = require('./controller')
const ref = require('./refrence')

const { SERVER_PORT, CONNECTION_STRING } = process.env

app.use(express.json())

// ---endpoints
app.get(ref.BASE_URL, ctrl.getProducts)
app.get(`${ref.BASE_URL}/:id`, ctrl.getProduct)
app.post(ref.BASE_URL, ctrl.addNewProduct)
app.put(`${ref.BASE_URL}/:id`, ctrl.updateProduct)
app.delete(`${ref.BASE_URL}/:id`, ctrl.deleteProduct)

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    recjectUnauthorized: false
  }
})
  .then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT || 4040, () =>
      console.log(`|----Server Running On Port: ${SERVER_PORT}----|`)
    )
  })
  .catch(err => console.log(`db connection err: ${err}`))
