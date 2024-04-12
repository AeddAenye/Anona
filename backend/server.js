const bodyParser = require('body-parser')
const express = require('express')
const db_connection = require('./connect_to_DB/connect.js')
const crypto = require('crypto')

const app = express()
app.use(bodyParser.json())
const PORT = 3000

app.post('/api/reg', async (req, res) => {
  let hashedUsername = JSON.stringify(req.body.hashedUsername)
  let hashedPassword = JSON.stringify(req.body.hashedPassword)

  let sql = `SELECT username_hash FROM users WHERE username_hash = ?`

  db_connection.query(sql, [hashedUsername], async (err, result) => {
    if (err) {
      return res.status(500).send(err.message)
    }

    if (result.length > 0) {
      return res.status(400).send('User already exists')
    }

    sql = `INSERT INTO users (username_hash, passwd_hash) VALUES (?, ?)`
    db_connection.query(sql, [hashedUsername, hashedPassword], async (err, result) => {
      if (err) {
        console.error(err)
        return res.status(500).send(err.message)
      }

      return res.status(201).send('User created successfully')
    })
  })
})

app.post('/api/login', async (req, res) => {
  let hashedUsername = JSON.stringify(req.body.hashedUsername)
  let hashedPassword = JSON.stringify(req.body.hashedPassword)

  let sql = `SELECT username_hash FROM users WHERE username_hash = ?`
  db_connection.query(sql, [hashedUsername], async (err, result) => {
    if (err){
      return res.status(500).send(err.message)
    }

    if (result.length === 0) {
      return res.status(404).send('User not found')
    }

    sql = `SELECT passwd_hash FROM users WHERE username_hash = ?`
    db_connection.query(sql, [hashedUsername], async (err, result2) => {
      if (err) {
        return res.status(500).send(err.message)
      }

      if (result2[0].passwd_hash !== hashedPassword) {
        return res.status(401).send('Invalid password')
      }

      return res.status(200).send('Login successful')
    })
  })
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
