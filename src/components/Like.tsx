import { ReactNode } from "react";
import { FcLike } from "react-icons/fc";

interface Props {
    children: ReactNode;
    onClick: () => void;
    style: object;
}

const like = ({ children, onClick, style }: Props) => {
  return (
    <div>
        <FcLike style={style} onClick={onClick}/>
    </div>
  )
}

export default like