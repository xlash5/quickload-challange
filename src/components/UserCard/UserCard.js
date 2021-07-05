import React from 'react';
import './UserCard.css';

const UserCard = ({ title, email, country, firstName, lastName, picture }) => {

    return <div className="Card">
        <img type="image" src={picture} alt="photo" />
        <div className="TextContainer">
            <p className="BreakWord NameText">{title + ' ' + firstName + ' ' + lastName}</p>
            <div className="Seperator"></div>
            <p className="BreakWord">{email.length > 10 ? email.substring(0, 18) + '...' : email}</p>
        </div>
    </div>;
};

export default UserCard;
