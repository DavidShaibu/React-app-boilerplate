import { useState } from "react";
import ExpenseTable from "./ExpenseTable/ExpenseTable";

 
function App() {
  const [cartItem, setCartItem] = useState(["Product 1", "Product 2", "Product 3", "Product 4"]);

  const handleClick = () => {
  setCartItem([]);
  };

  return (
    <>
      <ExpenseTable data={[]}/>
    </>
    );



}

export default App;

