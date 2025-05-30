// src/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setToken }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const fazerLogin = async (e) => {
    e.preventDefault();
    setErro('');

    try {
      const res = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (data.success) {
        setToken(data.token);
        navigate('/home');
      } else {
        setErro(data.message || 'Credenciais inválidas');
      }
    } catch (err) {
      setErro('Erro ao conectar com o servidor');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={fazerLogin}>
        <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Usuário" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" required />
        <button type="submit">Entrar</button>
        {erro && <p style={{ color: 'red' }}>{erro}</p>}
      </form>
    </div>
  );
}

export default Login;
