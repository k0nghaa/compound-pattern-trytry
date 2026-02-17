import { useEffect, useRef, useState, type ReactNode } from "react";
import { DropdownContext } from "../../../provider/DropdownProvider";

type Props = {
  children?: ReactNode;
};

export default function Dropdown({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const toggle = () => {
    setIsOpen((prev) => !prev);
  };
  const close = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        close();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleESCKeydown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") {
        close();
      }
    };

    document.addEventListener("keydown", handleESCKeydown);
    return () => {
      document.removeEventListener("keydown", handleESCKeydown);
    };
  }, [isOpen]);

  return (
    <DropdownContext.Provider value={{ isOpen, toggle, close }}>
      <div className="relative inline-block" ref={dropdownRef}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
}
