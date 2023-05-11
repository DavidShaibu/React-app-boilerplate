import { useState } from "react";
import Button from "./components/Button/Button";

 
function App() {
  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: "San Francisco",
      zipCode: 9411
    }
  })
  const handleClick = () => {
    setCustomer({...customer, address: { ...customer.address, zipCode: 94112 }});
  };

  return (
    <div>
      <Button onClick={handleClick}/>
    </div>
    );
}

export default App;

