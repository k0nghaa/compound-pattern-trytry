# ♻️ 재사용 가능한 UI 컴포넌트 설계

> 재사용성과 확장성을 고려해 공용 UI 컴포넌트를 설계/구현하는 레포입니다.
>
> Compound Component Pattern을 중심으로
> 컴포넌트 특성에 따라 다양한 설계 방식을 함께 탐색합니다.

## 🔽 Dropdown

- v1: Compound Pattern을 기반으로 Dropdown 구조를 재설계합니다.
- v2: 접근성과 키보드 네비게이션을 추가하여 인터랙션 범위를 확장했습니다.

### 핵심 목표

- 표현(UI)와 동작(상태/이벤트) 분리
- children 기반 조합으로 사용처 자유도 확보
- 기본 인터랙션 + 접근성 확장에 유리한 구조

### 제공 컴포넌트

- `Dropdown`
- `DropdownTrigger`
- `DropdownList`
- `DropdownItem`

### 기본 사용 예시 (선택형)

```
const [sort, setSort] = useState("latest");

<Dropdown>
  <DropdownTrigger>정렬: {sort}</DropdownTrigger>
  <DropdownList maxHeightClass="max-h-48" className="w-48 border rounded-md">
    <DropdownItem value="latest" onSelect={(v) => setSort(v)}>최신순</DropdownItem>
    <DropdownItem value="rating" onSelect={(v) => setSort(v)}>평점순</DropdownItem>
  </DropdownList>
</Dropdown>

```

### 기본 사용 예시 (액션형)

```
<Dropdown>
  <DropdownTrigger>프로필</DropdownTrigger>
  <DropdownList className="w-40 border rounded-md">
    <DropdownItem value="logout" onSelect={() => logout()}>로그아웃</DropdownItem>
  </DropdownList>
</Dropdown>

```

### 지원하는 동작

- Trigger 클릭: 열림/닫힘 토글
- Item 클릭: `onSelect(value)` 실행 후 닫힘
- 외부 클릭 / ESC: 닫힘
- 키보드: ArrowUp/Down 이동, Enter/Space 선택
- 포커스: 열림 시 첫 Item 포커스, 닫힘 시 Trigger 복귀
- 접근성: `role="menu/menuitem"`, `aria-expanded`, `aria-controls`, `aria-disabled`

### 스타일링

- Tailwind className 주입 방식
- DropdownList는 maxHeightClass로 최대 높이/스크롤 제어 가능

## ⚙️ 기술 스택

- React
- TypeScript
- Vite
- Tailwind
