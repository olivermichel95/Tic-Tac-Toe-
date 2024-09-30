import React from "react";
import { useState } from "react";

const Player = ({ name, symbol }) => {
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
    <li>
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
