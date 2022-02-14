# 프리온보딩 과제

## Toggle.js

토글의 상태를 useState로 체크하였으며 checked의 여부와 동기화시켜 css의 checked속성과 트랜지션을 이용하여 구현되어 있습니다.

## Modal.js

modal의 visible 여부를 useState로 체크하였으며 모달창은 화면 전체를 차지해야 하므로
position fixed와 width,height를 적절히 적용, 가운데 배치를 위해 transfom, top, left를 이용하였고 반투명 효과를 주기 위해 배경색은 rgba를 이용하여 구현했습니다.

## Tab.js

3개의 Key를 갖는 오브젝트를 initialState와 useState로 선언하였으며 클릭 시 initialState를 스프레드연산자로 전개, 클릭한 엘리먼트에 걸려있는 onClick 콜백함수에서 현재의 값을 반전시키는 구조로 구현했습니다. 아무것도 선택하지 않은 상태와 각 엘리먼트를 하나씩만 선택 가능한 상태 두 가지로만 동작하도록 구현되어 있습니다.

## Tag.js

flex와 flex-wrap을 이용하여 수많은 태그가 생성되도 input이 밑으로 밀리게 하여 overflow 문제를 해결했고, 각 tag의 값은 useState의 state로 들어가며 X 버튼의 onClick 이벤트와도 연결하여 제거도 가능하게 구현했습니다.

## AutoComplete.js

debouncing 기능을 추가할까 하다가 예시의 data 양이 거의 없어 useState와 input의 onChange를 그대로 연결하여 initialData에서 filter, indexOf를 이용하여 input태그 아래에 렌더되도록 구현했고 X버튼을 누르면 value가 초기화 되는 기능도 연결했습니다.

## ClickToEdit.js

역시 useState를 이용하였으며 mode의 전환과 value를 따로 놓으면 너무 많아지므로
name와 age, data 세개의 useState만을 이용했고 name과 age에는 값과 mode가 담기고
data에는 name과 age가 객체로 담겨있습니다. onClick과 onBlur를 이용하여 mode가 변하도록 구현했고 mode에 따라 input, span태그가 전환됩니다. 값은 유지되며 모드 전환 시 data값을 업데이트하도록 하여 예시와 동일하게 동작하도록 구현했습니다.

---

기능구현은 대체로 쉬웠으나 css를 연계하는 부분에서 시간을 약간 걸린 것 같습니다.

모든 동작은 컴포넌트 예시와 같이 동작합니다.
