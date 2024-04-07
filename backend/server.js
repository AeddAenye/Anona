const http = require('http');
const url = require('url');
const querystring = require('querystring');

let users = []; // Простая база данных для хранения зарегистрированных пользователей

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  const path = parsedUrl.pathname;

  // Регистрация нового пользователя
  if (path === '/register' && req.method === 'POST') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString(); // Получаем данные из тела запроса
    });

    req.on('end', () => {
      const { username, password } = JSON.parse(body);
      
      if (!username || !password) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Please provide username and password' }));
        return;
      }

      if (users.find(user => user.username === username)) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Username already taken' }));
        return;
      }

      const newUser = { username, password };
      users.push(newUser);

      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'User registered successfully', user: newUser }));
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Route not found' }));
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
