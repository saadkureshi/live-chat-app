import React from 'react';

import './TextContainer.css';

export default function TextContainer({ users }) {
  return (
    <div className="outermost-container">
      <p className="number-online">{users.length}{users.length > 1 ? " users online" : " user online"}</p>
      <div className="textContainer">
        {users.map(({ name }) => (
          <p key={name} className="each-online-user">
            <img className="onlineIcon" src="images/onlineIcon.png" alt="online icon" />
            {name}
          </p>
        ))}
      </div>
    </div>
  );
}