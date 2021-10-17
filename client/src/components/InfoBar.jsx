import React from 'react';
import './InfoBar.css';

export default function InfoBar() {
  return (
    <div className="infoBar">
      <img className="onlineIcon" src="images/onlineIcon.png" alt="online icon" />
      <p className="title">Live Chat</p>
    </div>
  );
}