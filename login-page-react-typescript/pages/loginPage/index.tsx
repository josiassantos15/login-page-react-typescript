import React from 'react';

// import "./styles.css";

const LoginPage = () => {
  const handleSubmit = () => {
    console.log('submit');
  };

    return (
      <div id="login">
        <h1 className="title">Login do Sistema</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="email" id="email"/
            >
          </div>
          <div className="field">
            <label htmlFor="password">Senha</label>
            <input type="password" name="password" placeholder="password" id="password"/
            >
          </div>
          <div id="actions">
            <button type="submit">Entrar</button>
          </div>
        </form>
      </div>
    )
};

export default LoginPage;