# ♻️ 재사용 가능한 UI 컴포넌트 설계 - Compound Pattern

> 재사용성과 확장성을 고려한 공용 UI 컴포넌트를 설계하고 실험하는 레포입니다.
>
> Compound Component Pattern을 중심으로
> 컴포넌트 특성에 따라 다양한 설계 방식을 함께 탐색합니다.

## 🧭 설계 방향

- 표현(UI)과 행동(상태/이벤트)의 분리
- props 확장보다 조합(children) 기반 구조 지향
- 다양한 사용처에서 재사용 가능한 범용성 고려
- 접근성과 인터랙션 확장을 위한 구조 설계

## 🔽 Dropdown

Compound Pattern을 기반으로 Dropdown 구조를 재설계합니다.

### 설계 목표

- Trigger UI를 외부에서 조합 가능하도록 구성
- 선택형 / 액션형 Dropdown 모두 지원
- 상태 책임 범위를 명확히 분리

### 기본 인터랙션

- Trigger 클릭 → 메뉴 열림
- Item 선택 / 외부 클릭 / Esc → 메뉴 닫힘
- 선택값은 외부 상태로 관리 가능

## ⚙️ 기술 스택

- React
- TypeScript
- Vite
- Tailwind
