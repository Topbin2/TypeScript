import { ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <ChildAsFC color="red" onClick={() => console.log("Clicked!")}>
      asdf
    </ChildAsFC>
  );
};

export default Parent;
