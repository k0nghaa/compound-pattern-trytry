import type { ReactNode } from "react";
import { useDropdownContext } from "../../../provider/DropdownProvider";
import type React from "react";

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

  const onClick = (e: React.MouseEvent<HTMLLIElement>) => {
    if (disabled) return;
    e.currentTarget.focus();
    // Select 에 대한 로직은 사용처에서
    onSelect?.(value);
    close();
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLLIElement>) => {
    if (disabled) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      // Select 에 대한 로직은 사용처에서
      onSelect?.(value);
      close();
    }
  };

  return (
    <li
      onClick={onClick}
      onKeyDown={onKeyDown}
      role="menuitem"
      aria-disabled={disabled}
      tabIndex={disabled ? undefined : -1}
      data-dropdown-item
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
