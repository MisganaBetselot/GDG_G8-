import React from "react";
import "./UserCard.css"; // Import the CSS file

const UserCard = ({ name, email, age, bgColor = "#3498db" }) => {
  return (
    <div className="user-card" style={{ backgroundColor: bgColor }}>
      <h2 className="user-name">{name}</h2>
      <p className="user-email">{email}</p>
      <p className="user-age">Age: {age}</p>
    </div>
  );
};

export default UserCard;
