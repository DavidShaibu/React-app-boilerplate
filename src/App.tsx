import { useState } from "react";
import Button from "./components/Button/Button";

 
function App() {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5
  })
  const handleClick = () => {
    setDrink({...drink, price: 6});
  };

  return (
    <div>
      {drink.price}
      <Button onClick={handleClick}/>
    </div>
    );
}

export default App;

