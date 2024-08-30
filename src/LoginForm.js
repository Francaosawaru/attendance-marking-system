import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'group fae' && password === 'fae12345') {
      onLogin();
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login">
      <div className="right">
        <div className="login_head">Login</div>
        <form id="form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input type="submit" value="Login" id="submit" />
        </form>
      </div>
    </div>
  );
};

export default LoginForm;


