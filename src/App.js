import React, { useState } from 'react';
import LoginForm from './LoginForm';
import AttendanceForm from './AttendanceForm';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <AttendanceForm />
      )}
    </div>
  );
}

export default App;

