import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username === 'Admin' && password === '12345') {
            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem('username', username);
            dispatch({ type: 'LOGIN' });
            navigate('/profile');
        } else {
            alert('Имя пользователя или пароль введены неверно');
        }
    };

    return (
        <div className="login-container">
            <h1>Авторизация</h1>

            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Логин"
            />

            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Пароль"
            />

            <button onClick={handleLogin}>Войти</button>
        </div>
    );
};

export default Login;
