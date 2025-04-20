import { configureStore } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
    news: JSON.parse(localStorage.getItem('news')) || [],
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, isAuthenticated: true };
        case 'LOGOUT':
            return { ...state, isAuthenticated: false };
        case 'SET_NEWS':
            localStorage.setItem('news', JSON.stringify(action.payload));
            return { ...state, news: action.payload };
        default:
            return state;
    }
}

const store = configureStore({
    reducer: rootReducer,
});

export default store;
