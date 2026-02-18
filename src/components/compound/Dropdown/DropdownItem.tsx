import type { ReactNode } from "react";
import { useDropdownContext } from "../../../provider/DropdownProvider";

type DropdownItemProps = {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  value: string;
  onSelect?: (value: string) => void;
};

export default function DropdownItem({
  children,
  className,
  disabled,
  value,
  onSelect,
}: DropdownItemProps) {
  const { close } = useDropdownContext();

  const onClick = () => {
    if (disabled) return;
    // Select 에 대한 로직은 사용처에서
    onSelect?.(value);
    close();
  };

  return (
    <li
      onClick={onClick}
      role="menuitem"
      aria-disabled={disabled}
      className={
        disabled
          ? `cursor-not-allowed opacity-50 ${className}`
          : `cursor-pointer hover:bg-gray-100 ${className}`
      }
    >
      {children}
    </li>
  );
}
