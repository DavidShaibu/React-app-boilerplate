
interface Props{
    cartItem: number;
}

const NavBar = ({ cartItem}: Props) => {
  return (
    <div>NavBar: {cartItem}</div>
  )
}

export default NavBar