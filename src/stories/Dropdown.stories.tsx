import type { Meta, StoryObj } from "@storybook/react-vite";
import { within, userEvent } from "storybook/test";

import Dropdown from "../components/compound/Dropdown/Dropdown";
import DropdownTrigger from "../components/compound/Dropdown/DropdownTrigger";
import DropdownList from "../components/compound/Dropdown/DropdownList";
import DropdownItem from "../components/compound/Dropdown/DropdownItem";

type DemoArgs = {
  itemCount: number;
  maxHeightClass: string;
  disabledIndex: number;
};

function makeItems(itemCount: number, disabledIndex: number) {
  return Array.from({ length: itemCount }, (_, i) => ({
    label: `아이템 ${i + 1}`,
    value: `item-${i + 1}`,
    disabled: disabledIndex !== -1 && i === disabledIndex,
  }));
}

/** Storybook 데모용 최소 프리셋(컴포넌트는 headless 유지) */
const triggerClass =
  "inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm shadow-sm hover:bg-gray-50 active:bg-gray-100 focus-visible:outline focus-visible:outline-offset-2 aria-expanded:bg-gray-100 aria-expanded:border-gray-300";

const listClass =
  "mt-2 w-64 rounded-md border border-gray-200 bg-white p-1 shadow-lg";

const itemClass =
  "rounded px-3 py-2 text-sm focus-visible:outline focus-visible:outline-offset-2";

function DropdownDemoStyled({
  itemCount,
  maxHeightClass,
  disabledIndex,
}: DemoArgs) {
  const items = makeItems(itemCount, disabledIndex);

  return (
    <Dropdown>
      <DropdownTrigger className={triggerClass}>열기</DropdownTrigger>

      <DropdownList maxHeightClass={maxHeightClass} className={listClass}>
        {items.map((it) => (
          <DropdownItem
            key={it.value}
            value={it.value}
            disabled={it.disabled}
            className={itemClass}
          >
            {it.label}
          </DropdownItem>
        ))}
      </DropdownList>
    </Dropdown>
  );
}

function DropdownDemoHeadless({
  itemCount,
  maxHeightClass,
  disabledIndex,
}: DemoArgs) {
  const items = makeItems(itemCount, disabledIndex);

  return (
    <Dropdown>
      <DropdownTrigger>열기</DropdownTrigger>
      <DropdownList maxHeightClass={maxHeightClass}>
        {items.map((it) => (
          <DropdownItem key={it.value} value={it.value} disabled={it.disabled}>
            {it.label}
          </DropdownItem>
        ))}
      </DropdownList>
    </Dropdown>
  );
}

const meta: Meta<typeof DropdownDemoStyled> = {
  title: "Components/Dropdown",
  component: DropdownDemoStyled,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "BasicStyled는 Storybook 데모에서만 쓰는 최소 프리셋 스타일입니다.\n\nHeadless는 스타일 없이 기능/구조만 보여줍니다",
      },
    },
  },
  args: {
    itemCount: 3,
    maxHeightClass: "max-h-24",
    disabledIndex: 1,
  },
  argTypes: {
    itemCount: {
      control: { type: "number", min: 1, step: 1 },
      description: "아이템 테스트 쉽게 가능",
    },
    maxHeightClass: { control: "text" },
    disabledIndex: {
      control: { type: "number", min: -1, step: 1 },
      description:
        "원하는 아이템의 인덱스에 disabled 상태 적용. -1은 모든 아이템 active",
    },
  },
};

export default meta;
type Story = StoryObj<typeof DropdownDemoStyled>;

export const BasicStyled: Story = {};

export const Headless: Story = {
  render: (args) => <DropdownDemoHeadless {...args} />,
};

export const KeyboardDemo: Story = {
  render: (args) => <DropdownDemoStyled {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button", { name: /열기/i });

    trigger.focus();
    await userEvent.keyboard("{Enter}");
    await userEvent.keyboard("{ArrowDown}{ArrowDown}");
    await userEvent.keyboard("{Escape}");
  },
};
