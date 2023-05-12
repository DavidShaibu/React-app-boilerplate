import styles from "./Button.module.css";

interface Props {
    onClick: () => void;
}

const Button = ({onClick}: Props) => {
  return (
    <button type="button" className={[styles.btn, styles["btn-primary"]].join(" ")} onClick={onClick}>My Button</button>
  )
}

export default Button