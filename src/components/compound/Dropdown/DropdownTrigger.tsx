import { type ReactNode } from "react";
import { useDropdownContext } from "../../../provider/DropdownProvider";

type DropdownTriggerProps = {
  children: ReactNode;
};

export default function DropdownTrigger({ children }: DropdownTriggerProps) {
  const { toggle } = useDropdownContext();

  return <button onClick={toggle}>{children}</button>;
}
