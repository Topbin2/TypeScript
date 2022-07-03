import ReactDom from "react-dom";
import GuestList from "./states/GuestList";
import UserSearch from "./states/UserSearch";

const App = () => {
  return (
    <UserSearch />
  );
};

ReactDom.render(<App />, document.querySelector("#root"));