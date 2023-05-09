import { useState } from "react";
import Like from "./components/like"
 
function App() {
  const [size, setSize] = useState(10);

  const handleClick = () => {
    setSize(size + 4);
  }

  return (
    <div>
      <Like style={{fontSize: size}} onClick={handleClick }>

      </Like>
    </div>
    );
}


export default App;