import { ReactNode } from "react";
import { NavLink } from "react-router";

export const CustomNavLink = ({
  to,
  children,
}: {
  to: string;
  children: ReactNode;
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      }
    >
      {children}
    </NavLink>
  );
};
