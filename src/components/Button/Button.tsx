import styles from "./Button.module.css";

interface Props {
    onClick: () => void;
}

const Button = ({ onClick}: Props) => {
  return (
    <button type="button" className="btn btn-primary" onClick={onClick}>MyButton</button>
  )
}

export default Button