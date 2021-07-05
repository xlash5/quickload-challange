import React from 'react';
import './TopContainer.css';
import MyButton from '../MyButton/MyButton';

const TopContainer = ({ onInputChange, onButtonClick, onKeyDown }) => {
    return (
        <div className="TopContainer">
            <h1>User List</h1>
            <div className="SearchContainer">
                <input
                    placeholder="Search By Name"
                    onChange={onInputChange}
                    onKeyDown={onKeyDown}
                    className="MyInput"></input>
                <MyButton
                    text="filter" onClick={onButtonClick}
                />
            </div>
        </div>
    );
};

export default TopContainer;
