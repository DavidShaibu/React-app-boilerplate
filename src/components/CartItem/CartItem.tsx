import Button from "../Button/Button";
import styles from "../Button/Button.module.css";

interface Props{
    cartItem: string[]
    onClear: () => void;
}

const CartItem = ({ cartItem, onClear}: Props) => {
  return (
    <>
        <div>Cart</div>
        <ul>
            { cartItem.map(item => <li key={item}>{item}</li>)}
        </ul>
        <button type="button" className={[ styles.btn, styles["btn-primary"] ].join()} onClick={onClear}>Clear</button>
    </>
  )
}

export default CartItem