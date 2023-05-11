import { useState } from "react";
import Button from "./components/Button/Button";

 
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
    setBugs(bugs.map( bug => bug.id === 1 ? { ...bug, fixed: true }: bug));


  };

  { console.log(bugs) }

  return (
    <div>
      <Button onClick={handleClick}/>
    </div>
    );
}

export default App;

