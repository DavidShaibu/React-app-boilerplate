import { useState } from "react";
import Button from "./components/Button/Button";

 
function App() {
  const [ tags, setTags ] = useState(["happy", "cheerful"]);

  const handleClick = () => {

    //Add
    setTags([ ...tags, "exciting" ]);

    //Remove
    setTags(tags.filter(tag => tag !== "happy"));

    //Update
    setTags(tags.map(tag => tag === "happy" ? "happiness": tag));


  };
  
  { console.log(tags) }

  return (
    <div>
      <Button onClick={handleClick}/>
    </div>
    );
}

export default App;

