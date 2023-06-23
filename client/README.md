# `2nd-HUFSummer-Hackathon`

### 모현초3학년2반: 임동혁, 신웅비, 전승재, 노기연
음식물 쓰레기 문제에 도전하는 긱식 결제 서비스

`ReactJS` `JavaScript` `TailwindCSS` `SCSS`
- [모현초3학년2반 Notion](https://clearcat.notion.site/LinkedDorm-f98712033a6b4160ae6085f97711cf47?pvs=4 "notion")
<br/>

# LinkedDorm

<img width="955" alt="스크린샷 2023-06-24 오전 6 18 12" src="https://github.com/ldhbenecia/Algorithm/assets/77393976/028a42bb-8cc6-46b8-9316-22f0de049183">

<img width="1106" alt="스크린샷 2023-06-24 오전 6 46 03" src="https://github.com/ldhbenecia/Algorithm/assets/77393976/527ea664-a99a-41ed-94a7-e66aa4ad58e4">

<br/>

## `Install & Execute`
# 1. Setup

```sh
# 0. clone fork project
git clone https://github.com/2nd-HUFSummer-Hackathon/LinkedDorm.git

# 1. package install
npm install

# 2. run
npm run start
```

<br/>

## `Structure`

```
client
|
└── src
    ├── assets
    │   └── ${name}
    │ 
    │ 
    ├── components 
    │   └── Auth
    │       └─── SignIn.jsx
    │ 
    │   └── EatCardPayment
    │       └─── Header
    │           └─── Header.jsx
    │           └─── Header.scss
    │       └─── EatCardPayment.jsx
    │       └─── EatCardPayment.scss
    │ 
    │   └── Main
    │       └─── Main.jsx
    │ 
    │   └── Navigation
    │       └─── Navigation.jsx
    │       └─── Navigation.scss
    │ 
    │   └── PointPurchaseList
    │       └─── PointPurchaseList.jsx
    │ 
    │   └── PointPurchasePage
    │       └─── BigBox
    │           └─── BigBox.jsx
    │           └─── BigBox.scss
    │       └─── Purchasebutton
    │           └─── Purchasebutton.jsx
    │           └─── Purchasebutton.scss
    │ 
    │   └── ProductList
    │       └─── Header
    │           └─── Header.jsx
    │       └─── ProductList.jsx
    │  
    │   └── UserProfile
    │       
    │       
    ├── pages 
    │   └── ${name}
    │              
    │              
    ├── styles
    │   └── tailwind.css
    └──
```

<br/>

## 해결할 문제점

1. 긱사 식당의 음식물 쓰레기 (환경)
    1. 현재 기숙사 식당에서 잔반처리에 대한 문제점이 발생하고 있다.
    2. 구체적인 지표 → 기숙사에 전화해서 확인하도록 하기
    3. 확인 못할 경우 → 논문자료 또는 국가통계 넣기. 음식물 쓰레기 배출과 관련하여
2. 긱사의 의무식
    1. 현재 기숙사에 입사할 때 의무적으로 최소 64식 이상 구매하도록 진행되는 기숙사식을 다 먹지 못하고 한 학기를 종료하는 학생들이 많이 존재한다.

## 해결 방법

긱사 식당의 음식물 쓰레기 (환경)

1. 식사시간 이후 할인된 가격으로 긱식 구매 가능
2. 메뉴, 요일, 시간별 판매량과 잔반량 데이터를 통한 딥러닝을 사용하여 다음날의 준비해야 할 긱식의 수량을 예측한다. → 구매자들의 수에 맞게 준비할 수 있다. → 잔반처리량이 감소한다. 

긱사의 의무식

1. 긱식 포인트로 다른 사람과의 거래
2. 긱식 포인트를 다른사람에게 전송하는 것이 가능하여 긱식을 먹기 희망하는 사람은 중고물품을 판매하여 저렴하게 먹을 수 있고, 먹고 싶지 않은 사람은 포인트를 통해 원하는 중고물품을 구매할 수 있음

## 해결 방법의 문제점

1. 식사시간 이후 할인된 가격으로 긱식 구매 가능
    
    모든 학생들이 식사 시간 이후에 먹으려고하지 않을까? 라는 우려가 있음
    
    1. 할인된 가격으로 긱식을 팔 때에는 최대 개수를 정해놓고 팔아야 할 것 같음.
2. 긱식 포인트를 다른사람에게 전송 가능
    1. 문제점들이 있나?
    2. 없음
3. 중고거래에서 항상 발생하는 문제점
    1. 신뢰도
        1. 신뢰도는 같은 학교내에서 진행하는 중고거래이기 때문에 충분히 신뢰할 수 있다고 생각함.
        

## 적용된 rabbit jump

- 체리슈머 (사용)
    - 체리슈머란 한정된 자원을 극대화하기 위해 최대한 알뜰하게 소비하는 전략적인 소비자들을 말한다.
    - 기숙사의 의무식을 최대한 알뜰하게 소비하려는 체리슈머들을 대상으로 진행하는 서비스이다.
- 선제적 대응기술 (추가 예정)
    - 인공지능으로 식사 메뉴와 날짜 요일 시간을 기반으로 수요를 예측
    - 메뉴, 요일, 시간별 판매량과 잔반량 데이터를 통한 딥러닝을 사용하여 다음날의 준비해야 할 긱식의 수량을 예측한다. → 구매자들의 수에 맞게 준비할 수 있다. → 잔반처리량이 감소한다.
    - + 세일 긱식 개수 정하기

## `Screenshots`

<img width="227" alt="스크린샷 2023-06-24 오전 6 24 37" src="https://github.com/ldhbenecia/Algorithm/assets/77393976/bd3aa86b-1e82-473d-ab2a-196e9d77dd87">

<img width="225" alt="스크린샷 2023-06-24 오전 6 24 46" src="https://github.com/ldhbenecia/Algorithm/assets/77393976/8fe8ec87-a100-41ed-9180-0f0c09050d44">

<img width="231" alt="스크린샷 2023-06-24 오전 6 24 58" src="https://github.com/ldhbenecia/Algorithm/assets/77393976/bf97e52c-d3cd-41ab-9267-9f63009fc3fc">

<img width="234" alt="스크린샷 2023-06-24 오전 6 25 24" src="https://github.com/ldhbenecia/Algorithm/assets/77393976/20c4560b-b8d6-49aa-8c45-2fe6662d16a1">
