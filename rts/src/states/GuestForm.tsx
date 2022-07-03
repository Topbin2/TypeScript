import React, { useCallback, useState } from "react";

interface IProps {
  addGuest: (name: string) => void;
}

const GuestForm = ({ addGuest }: IProps) => {

  const [inputName, setInputName] = useState('');

  const onSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    addGuest(inputName);
  }, [inputName, addGuest]);

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input type="text" placeholder="NAME" value={inputName} onChange={(e) => setInputName(e.target.value)}/>
      <button style={{ display: "block", marginTop: "10px" }}>ADD</button>
    </form>
  );
};

export default GuestForm;
