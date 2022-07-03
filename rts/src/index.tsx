import ReactDom from "react-dom";

import EventComponent from "./events/EventComponent";

const App = () => {
  return (
    <EventComponent />
  );
};

ReactDom.render(<App />, document.querySelector("#root"));