import { ReactNode } from "react";

type Props = {
  children?: ReactNode
  className: string
}

export const Card: React.FC<Props> = ({ children, className }) => {
  return (
    <article className={`card ${className}`}>
      {children}
    </article>
  );
};
