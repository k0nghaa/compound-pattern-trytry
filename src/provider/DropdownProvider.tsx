import React, { createContext, useContext } from "react";

type DropdownContextValue = {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
  dropdownId: string;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
};

export const DropdownContext = createContext<DropdownContextValue | null>(null);

export function useDropdownContext() {
  const context = useContext(DropdownContext);
  if (!context)
    throw new Error(
      "useDropdownContext는 반드는 DropdownProvider 안에서 사용해야 합니다.",
    );
  return context;
}
