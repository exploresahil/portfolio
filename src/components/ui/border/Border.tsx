import { ReactNode } from "react";
import "./style.scss";

interface Props {
  children: ReactNode;
}

const Border = ({ children }: Props) => {
  return <span id="border">{children}</span>;
};

export default Border;
