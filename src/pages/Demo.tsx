import Dropdown from "../components/compound/Dropdown/Dropdown";
import DropdownList from "../components/compound/Dropdown/DropdownList";
import DropdownTrigger from "../components/compound/Dropdown/DropdownTrigger";
import DropdownItem from "../components/compound/Dropdown/DropdownItem";
import { useState } from "react";

export default function Demo() {
  const [sort, setSort] = useState("latest");

  return (
    <Dropdown>
      <DropdownTrigger>정렬: {sort}</DropdownTrigger>
      <DropdownList
        maxHeightClass="max-h-20"
        className="w-48 border rounded-md"
      >
        <DropdownItem value="latest" onSelect={(v) => setSort(v)}>
          최신순
        </DropdownItem>
        <DropdownItem value="rating" onSelect={(v) => setSort(v)}>
          평점순
        </DropdownItem>
      </DropdownList>
    </Dropdown>
  );
}
