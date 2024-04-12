const bodyParser = require('body-parser')
const express = require('express')
const db_connection = require('./connect_to_DB/connect.js')

const app = express()
app.use(bodyParser.json())
const PORT = 3000

app.post('/api/reg', async (req, res) => {
  let hashedUsername = await JSON.stringify(req.body.hashedUsername)
  let hashedPassword = await JSON.stringify(req.body.hashedPassword)

  console.log(hashedUsername, hashedPassword)
})

app.listen(PORT, () => {console.log(`Example app listening at http://localhost:${PORT}`)})


