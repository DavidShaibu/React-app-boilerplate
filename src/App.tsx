import { useState } from "react";
import Button from "./components/Button/Button";
import ExpandableText from "./components/ExpandableText/ExpandableText";

 
function App() {
  const [cartItem, setCartItem] = useState(["Product 1", "Product 2", "Product 3", "Product 4"]);

  const handleClick = () => {
  setCartItem([]);
  };

  return (
    <>
    <ExpandableText maxChars={10}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque reiciendis voluptatibus laborum saepe nulla, perferendis quibusdam porro eos nostrum vitae odio eius vel ipsa amet dolorem quis animi, et temporibus sequi. Cupiditate assumenda nesciunt maxime amet ipsam quam aspernatur sunt excepturi, accusamus nam at numquam aliquid asperiores recusandae vitae odit repellat quos quod saepe! Iure porro officiis possimus? Ab asperiores, soluta rerum laboriosam dignissimos minima? Deserunt dolorum tenetur repudiandae aspernatur magnam earum vel consectetur odio officia. Magni voluptatum totam et neque dignissimos repellendus maiores, fugit error laudantium quasi amet eligendi in sunt earum praesentium deserunt ipsa ratione voluptate ex autem.
    </ExpandableText>
    </>
    );



}

export default App;

