import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import News from './pages/News';
import Profile from './pages/Profile';
import Main from './components/Main';
import { Provider } from 'react-redux';
import store from './store/store';
import './styles.css';

const App = () => {
    return (
        <Provider store={store}>
            <Main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </Main>
        </Provider>
    );
};

export default App;
