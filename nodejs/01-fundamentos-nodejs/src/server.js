import http from 'http';

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === 'GET' && url === '/users') {
    return res.end('Listagem de usuários');
  }

  if (method === 'POST' && url === '/users') {
    return res.end('Criação de usuários');
  }

  return res.end('Hello, world!');
});

server.listen(3333);
