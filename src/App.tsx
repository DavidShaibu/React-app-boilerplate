import { useState } from "react";
import Like from "./components/Like/Like"
 
function App() {
  return (
    <div>
      <Like onClick={ () => console.log("clicked") } />
    </div>
    );
}


export default App;