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
      sql = `INSERT INTO users (username, passwd_hash) VALUES (?, ?)`
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

  let sql = `SELECT username, passwd_hash FROM users WHERE username = ?`
  db_connection.query(sql, [username], async (err, result) => {
    if (err) {
      return res.status(500).json(err.message)
    }

    if (result.length === 0) {
      return res.status(404).json('User not found')
    }

    const user = result[0]
    console.log(user)
    console.log(user.passwd_hash)
    console.log(password)
    if (user.passwd_hash !== password) {
      return res.status(401).json('Invalid password')
    }

    sql = `SELECT access_token, delogin_time FROM users WHERE username = ?`
    db_connection.query(sql, [username], async (err, result) => {
      if (err) {
        return res.status(500).json(err.message)
      }

      console.log('Вход перед проверкой даты')

      let deloginTime = getDeloginTime()
      let token = getSecretToken()

      if (result[0].delogin_time === null) {
        sql = `UPDATE users SET access_token = ?, delogin_time = ? WHERE username = ?`
        db_connection.query(sql, [token, deloginTime, username], async (err, result) => {
          if (err) {
            return res.status(500).json(err.message)
          }
          return res.status(200).json({
            access_token: token
          })
        })
      }

      if(result[0].delogin_time !== null) {
        sql = `UPDATE users SET delogin_time = ? WHERE username = ?`
        db_connection.query(sql, [deloginTime, username], async (err, result) => {
          if (err) {
            return res.status(500).json(err.message)
          }

          sql = `SELECT access_token FROM users WHERE username = ?`
          db_connection.query(sql, [username], async (err, result) => {
            if (err) {
              return res.status(500).json(err.message)
            }
            token = result[0].access_token
          })
          return res.status(200).json({
            access_token: token
          })
        })
      }
    })
  })
})
app.post('/api/token', async (req, res) => {
  let token = req.body.access_token

  sql = `SELECT username FROM users WHERE access_token = ?`
  db_connection.query(sql, [token], async (err, result) => {
    if (err) {
      return res.status(500).json(err.message)
    }

    if (result.length === 0) {
      return res.status(404).json()
    }

    const username = result[0].username
    sql = `SELECT delogin_time FROM users WHERE username = ?`
    db_connection.query(sql, [username], async (err, result) => {
      if (err) {
        return res.status(500).json(err.message)
      }

      if (result[0].delogin_time <= getDateNow()) {
        return res.status(401).send('Old token')
      }

      return res.status(200).json({
        username: username
      });
    }); // Закрыли фигурную скобку для обработки запроса на delogin_time
  });
});


app.post('/api/newDialog', async (req, res) => {
  let username = req.body.username
  let friendname = req.body.friendname

  console.log(username, friendname);

  sql = `SELECT id FROM chats WHERE (owner_nickname = ? AND friend_nickname = ?) OR (owner_nickname = ? AND friend_nickname = ?)`
  db_connection.query(sql, [username, friendname, friendname, username], async (err, result) => {
    if (err) {
      console.log(err)
      return res.status(500).json(err.message)
    }
    if (result.length === 0) {
      sql = `INSERT INTO chats (owner_nickname, friend_nickname) VALUES (?, ?)`
      db_connection.query(sql, [username, friendname], async (err, result) => {
        if (err) {
          console.log(err)
          return res.status(500).json(err.message)
        }
        return res.status(201).json('Dialog created successfully')
      })
    }
})

})

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
