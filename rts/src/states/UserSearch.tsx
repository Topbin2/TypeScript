import React, { useState } from "react";

const userList = [
  { name: "sangbin", age: "20" },
  { name: "kong", age: "20" },
  { name: "dahyun", age: "20" },
];

interface SearchList {
  name: string;
  age: string;
}

const UserSearch = () => {
  const [inputText, setInputText] = useState("");
  const [searchList, setSearchList] = useState<SearchList[]>([]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const onClick = () => {
    setSearchList([]);
    for (let x of userList) {
      if (x.name === inputText) {
        setSearchList([x]);
        break;
      }
    }
  };

  return (
    <>
      <h1>Find User</h1>
      <input type="text" value={inputText} onChange={(e) => onChange(e)} />
      <button onClick={onClick}>Find</button>
      <h1>User Details</h1>
      {searchList.length
        ? searchList.map((user, index) => (
            <>
              <div key={user.name}>name: {user.name}</div>
              <div>age: {user.age}</div>
            </>
          ))
        : "UNDEFINED"}
    </>
  );
};

export default UserSearch;
