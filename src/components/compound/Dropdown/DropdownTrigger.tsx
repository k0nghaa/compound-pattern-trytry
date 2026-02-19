import { type ReactNode } from "react";
import { useDropdownContext } from "../../../provider/DropdownProvider";

type DropdownTriggerProps = {
  children: ReactNode;
  className?: string;
};

export default function DropdownTrigger({
  children,
  className,
}: DropdownTriggerProps) {
  const { toggle, isOpen, dropdownId, triggerRef } = useDropdownContext();

  return (
    <button
      ref={triggerRef}
      onClick={toggle}
      aria-expanded={isOpen}
      aria-haspopup="menu"
      aria-controls={dropdownId}
      className={className}
    >
      {children}
    </button>
  );
}
