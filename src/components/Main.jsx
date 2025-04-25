import React from 'react';
import Header from './Header';

const Main = ({ children }) => {
    return (
        <div>
            <Header/>
            <div className="main-content">{children}</div>
        </div>
    );
};

export default Main;
