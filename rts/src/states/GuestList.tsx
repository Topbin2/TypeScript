import React, { useState } from "react";

const GuestList = () => {
  const [name, setName] = useState("");
  const [guests, setGuest] = useState<string[]>([]);

  const onClick = () => {
    console.log(typeof name);
    setGuest([...guests, name]);
    setName("");
  };

  return (
    <div>
      <h3>Guest List</h3>
      <ul>
        {guests.map((guest) => (
          <li key={guest}>{guest}</li>
        ))}
      </ul>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Add Guest</button>
    </div>
  );
};

export default GuestList;
