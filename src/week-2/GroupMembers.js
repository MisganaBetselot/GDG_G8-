import React from "react";

const GroupMembers = () => {
  const members = ["abebe", "meried", "almaz",  "kebede"]; 

  return (
    <div>
      <h1>Group Members</h1>
      <ul>
        {members.map((member, index) => (
          <li key={index}>{member}</li> 
        ))}
      </ul>
    </div>
  );
};

export default GroupMembers;