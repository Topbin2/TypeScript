import React, { useState } from "react";

import GuestForm from "./GuestForm";

const initialState = ["sangbin", "kong"];

const GuestList = () => {
  const [guest, setGuest] = useState(initialState);

  const addGuest = (name: string) => {
    setGuest((prev) => [...prev, name]);
  }

  return (
    <>
      <h1>Party Guest List</h1>
      <ul>
        {guest.map((guest, index) => (
          <li key={index}>{guest}</li>
        ))}
      </ul>
      <br />
      <GuestForm addGuest={addGuest} />
    </>
  );
};

export default GuestList;
