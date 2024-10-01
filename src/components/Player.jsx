import React from "react";
import { useState } from "react";

const Player = ({ name, symbol, isActive }) => {
  const [playerName, setplayerName] = useState(name);
  const [isEditing, setisEditing] = useState(false);

  function handleClick() {
    setisEditing(editing => !editing);
    // setisEditing(editing => !editing);
  }
  function handleEvent(event) {
    setplayerName(event.target.value);
    console.log(event);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleEvent}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
