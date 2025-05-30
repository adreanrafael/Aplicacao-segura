// src/Home.js
import React, { useEffect, useState } from 'react';

function Home() {
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/hello')
      .then(res => res.json())
      .then(data => setMensagem(data.message))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Bem-vindo ao sistema</h1>
      <p>Mensagem do backend: {mensagem}</p>
    </div>
  );
}

export default Home;
