import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Profile = () => {
    const isAuthenticated = useSelector((state) => state.isAuthenticated);

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return (
        <div style={{ marginTop: '120px', textAlign: 'center' }}>
            <h1>Профиль</h1>
            <p>Добро пожаловать, {localStorage.getItem('username')}!</p>
        </div>
    );
};

export default Profile;
