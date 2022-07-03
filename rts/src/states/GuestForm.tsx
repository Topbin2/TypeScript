import React, { useCallback, useRef } from "react";

interface IProps {
  addGuest: (name: string) => void;
}

const GuestForm = ({ addGuest }: IProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (inputRef.current) {
      addGuest(inputRef.current.value);
    }
  }, [addGuest]);

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input ref={inputRef} type="text" placeholder="NAME" />
      <button style={{ display: "block", marginTop: "10px" }}>ADD</button>
    </form>
  );
};

export default GuestForm;
