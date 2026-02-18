import type { ReactNode } from "react";
import { useDropdownContext } from "../../../provider/DropdownProvider";

type DropdownListProps = {
  children: ReactNode;
  className?: string;
  maxHeightClass?: string;
};

export default function DropdownList({
  children,
  className,
  maxHeightClass,
}: DropdownListProps) {
  const { isOpen, dropdownId } = useDropdownContext();

  if (!isOpen) return null;

  return (
    <ul
      id={dropdownId}
      role="menu"
      className={`absolute z-[1000] top-full left-0 ${className ?? ""} ${maxHeightClass ?? ""} overflow-y-auto`}
    >
      {children}
    </ul>
  );
}
