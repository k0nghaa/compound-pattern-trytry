import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { DropdownContext } from "../../../provider/DropdownProvider";

type Props = {
  children?: ReactNode;
};

export default function Dropdown({ children }: Props) {
  const dropdownId = useId();

  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };
  const close = () => {
    setIsOpen(false);
  };

  // outside click 닫기
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

  // keydown (ESC 닫기, 화살표 up/down 이동)
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        close();
        return;
      }

      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        const items = Array.from(
          dropdownRef.current?.querySelectorAll(
            '[data-dropdown-item]:not([aria-disabled="true"])',
          ) ?? [],
        ) as HTMLElement[];

        if (items.length === 0) return;

        const currentIndex = items.findIndex(
          (el) => el === document.activeElement,
        );

        if (currentIndex === -1) {
          e.preventDefault();
          items[0]?.focus();
          return;
        }

        const nextIndex =
          e.key === "ArrowDown"
            ? Math.min(currentIndex + 1, items.length - 1)
            : Math.max(currentIndex - 1, 0);

        e.preventDefault();
        items[nextIndex]?.focus();
        return;
      }
    };

    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [isOpen]);

  // 열릴 때 첫 item focus
  useEffect(() => {
    if (!isOpen) return;

    const firstItem = dropdownRef.current?.querySelector(
      '[data-dropdown-item]:not([aria-disabled="true"])',
    ) as HTMLElement | null;

    firstItem?.focus();
  }, [isOpen]);

  // 닫힐 때 trigger로 focus 복귀
  useEffect(() => {
    if (isOpen) return;
    triggerRef.current?.focus();
  }, [isOpen]);

  return (
    <DropdownContext.Provider
      value={{ isOpen, toggle, close, dropdownId, triggerRef }}
    >
      <div className="relative inline-block" ref={dropdownRef}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
}
