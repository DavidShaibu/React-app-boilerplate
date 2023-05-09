import Button from "./components/Button/Button";
import Alert from "./components/Alert";
import { useState } from "react";
 
function App() {
  const color = "danger";
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      { alertVisible && <Alert onClose={() => setAlertVisibility(false)}>MyAlert</Alert> }
      <Button color={color} onClick={() => setAlertVisibility(true)}>
        MyButton
      </Button>
    </div>
    );
}

export default App;