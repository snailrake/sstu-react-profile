import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        dispatch({ type: 'LOGOUT' });
        navigate('/login');
    };

    return (
        <div>
            <h1>Выход</h1>
            <button onClick={handleLogout}>Выйти</button>
        </div>
    );
};

export default Logout;
