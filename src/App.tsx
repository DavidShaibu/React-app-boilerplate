import { useState } from "react";
import Button from "./components/Button/Button";
import produce from "immer"

 
function App() {
  const [ bugs, setBugs ] = useState([
    {  id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const handleClick = () => {

    //Add
    // setBugs([ ...bugs, "exciting" ]);

    //Remove
    // setBugs(bugs.filter(tag => tag !== "happy"));

    //Update
    setBugs(produce(draft => {
      const bug = draft.find(bug => bug.id === 1);
      if (bug) bug.fixed = true;
    }));

  };


  return (
    <div>
      {bugs.map(bug => <p key={bug.id}> {bug.title} {bug.fixed ? "Fixed": "New"}</p>)}
      <Button onClick={handleClick}/>
    </div>
    );
}

export default App;

