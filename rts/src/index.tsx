import ReactDom from "react-dom";
import GuestList from "./states/GuestList";

const App = () => {
  return (
    <GuestList />
  );
};

ReactDom.render(<App />, document.querySelector("#root"));