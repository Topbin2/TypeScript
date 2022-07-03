import ReactDom from "react-dom";

import UserSearch from "./refs/UserSearch";

const App = () => {
  return (
    <UserSearch />
  );
};

ReactDom.render(<App />, document.querySelector("#root"));