const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Olá do backend!' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Exemplo fixo (em produção, você buscaria no banco de dados)
  const user = {
    username: 'admin',
    password: '1234'
  };

  if (username === user.username && password === user.password) {
    return res.json({ success: true, token: 'fake-jwt-token' });
  } else {
    return res.status(401).json({ success: false, message: 'Credenciais inválidas' });
  }
});

