import React from 'react';
import './MyButton.css';

const MyButton = ({ onClick, text }) => {
    return (
        <button className="MyButton AnimatedBtn" onClick={onClick}>{text}</button>
    );
};

export default MyButton;
