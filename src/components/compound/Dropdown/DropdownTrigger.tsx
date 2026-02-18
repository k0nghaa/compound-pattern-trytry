import { type ReactNode } from "react";
import { useDropdownContext } from "../../../provider/DropdownProvider";

type DropdownTriggerProps = {
  children: ReactNode;
};

export default function DropdownTrigger({ children }: DropdownTriggerProps) {
  const { toggle, isOpen, dropdownId, triggerRef } = useDropdownContext();

  return (
    <button
      ref={triggerRef}
      onClick={toggle}
      aria-expanded={isOpen}
      aria-haspopup="menu"
      aria-controls={dropdownId}
    >
      {children}
    </button>
  );
}
