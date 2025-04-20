import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Header = () => {
    const isAuthenticated = useSelector((state) => state.isAuthenticated);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        dispatch({ type: 'LOGOUT' });
        navigate('/login');
    };

    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Главная</Link></li>
                    <li><Link to="/news">Новости</Link></li>
                    <li><Link to="/profile">Профиль</Link></li>
                    {isAuthenticated && (
                        <li>
                            <button onClick={handleLogout}>Выйти</button>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
