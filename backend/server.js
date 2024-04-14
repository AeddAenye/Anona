const express = require('express')
const cors = require('cors')
const app = express()
const { format } = require('date-fns')

const db_connection = require('./connect_to_DB/connect.js')
const getSecretToken = require('./genSecretToken.js')
const getDeloginTime = require('./genDeloginTime.js')
const getDateNow = require('./genDatenow.js')

app.use(express.json())
app.use(cors())
const PORT = 3000

app.post('/api/reg', async (req, res) => {
  let username = req.body.username
  let hashedPassword = req.body.hashedPassword

  let sql = `SELECT username FROM users WHERE username = ?`
  db_connection.query(sql, [username], async (err, result) => {
    if (err) {
      return res.status(500).json(err.message)
    }

    if (result.length > 0) {
      return res.status(400).json('User already exists')
    } else {
      sql = `INSERT INTO users (username, password_hash) VALUES (?, ?)`
      db_connection.query(sql, [username, hashedPassword], async (err, result) => {
        if (err) {
          return res.status(500).json(err.message)
        }

        return res.status(201).json('User created successfully')
      })
    }
  })
})

app.post('/api/login', async (req, res) => {
  let username = req.body.username
  let password = req.body.hashedPassword

  let sql = `SELECT username, password_hash FROM users WHERE username = ?`
  db_connection.query(sql, [username], async (err, result) => {
    if (err) {
      return res.status(500).send(err.message)
    }

    if (result.length === 0) {
      return res.status(404).send('User not found')
    }

    const user = result[0]
    if (user.password_hash !== password) {
      return res.status(401).send('Invalid password')
    }

    sql = `SELECT access_token, delogin_time FROM users WHERE username = ?`
    db_connection.query(sql, [username], async (err, result) => {
      if (err) {
        return res.status(500).send(err.message)
      }

      console.log('Вход перед проверкой даты')

      if (result[0].delogin_time === null || getDateNow() <= result[0].delogin_time) {
        console.log('Вход после проверки даты')
        let token = getSecretToken()
        let deloginTime = getDeloginTime()
        sql = `UPDATE users SET access_token = ?, delogin_time = ? WHERE username = ?`
        db_connection.query(sql, [token, deloginTime, username], async (err, result) => {
          if (err) {
            return res.status(500).send(err.message)
          }
          return res.status(200).json({
            access_token: token
          });
        });
      } else {
        return res.status(401).send('Session expired');
      }
    });
  });
});


const start = async () => {
  try {
    await db_connection.connect()
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`)
    })
  } catch (err) {
    console.error(err)
  }
}

start()
