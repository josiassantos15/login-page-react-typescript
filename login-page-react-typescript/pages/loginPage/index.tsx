import React, { useState } from 'react';

// import "./styles.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Função que permite enviar o formulário quando o botão for pressionado
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('submit', { email, password });
  };

    return (
      <div id="login">
        <h1 className="title">Login do Sistema</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              name="email" 
              placeholder="email" 
              id="email"
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="password">Senha</label>
            <input 
              type="password" 
              name="password" 
              placeholder="password" 
              id="password"
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div id="actions">
            <button type="submit">Entrar</button>
          </div>
        </form>
      </div>
    )
};

export default LoginPage;