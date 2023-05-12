import { useState } from "react";
import Button from "./components/Button/Button";
import NavBar from "./components/NavBar/NavBar";
import CartItem from "./components/CartItem/CartItem";

 
function App() {
const [cartItem, setCartItem] = useState(["Product 1", "Product 2", "Product 3", "Product 4"]);

const handleClick = () => {
  setCartItem([]);
};


  return (
    <div>
      <NavBar cartItem={cartItem.length}/>
      <CartItem cartItem={cartItem} onClear={handleClick}/>
    </div>
    );
}

export default App;

