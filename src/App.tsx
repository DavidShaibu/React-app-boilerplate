import Button from "./components/Button/Button";
import Like from "./components/Like/Like"
import { useState } from "react";
 
function App() {
  const color = "primary";
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <Like onClick={() => console.log("Clicked")}/>
    </div>
    );
}

export default App;