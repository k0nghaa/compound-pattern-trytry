import { useState, type ReactNode } from "react";
import { DropdownContext } from "../../../provider/DropdownProvider";

type Props = {
  children?: ReactNode;
};

export default function Dropdown({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen((prev) => !prev);
  };
  const close = () => {
    setIsOpen(false);
  };

  return (
    <DropdownContext.Provider value={{ isOpen, toggle, close }}>
      {children}
    </DropdownContext.Provider>
  );
}
