# Triple 프론트엔드 과제

#### _FE sunkyung_

## Preview

![triple_task](https://user-images.githubusercontent.com/77728308/175335168-924a8211-1682-4884-92de-0cb39bbacbb4.gif)

## Installation

- `package.json`이 위치한 폴더에서 `npm install && npm start` 명령을 하면 http://localhost:3000/ 에 리액트 페이지가 실행됩니다.

## File Structure

전체 파일 구조는 다음과 같습니다.

공용컴포넌트 및 페이지 관련 컴포넌트를 분리하고,
theme, hooks 관련 파일 등을 각각 나누어 관리하였습니다.

```
├── public
├── src/
│   ├── assets
│   ├── components
│   ├── hooks
│   ├── pages
│   └── theme
├── App.tsx
└── Routes.tsx
```

## Tech Stack

- React
- React Router DOM v6
- Typescripts : 정적 언어인 Typescripts를 사용하여, javascript의 언어적 단점을 보완하였습니다.
- styled-components : css 모델을 컴포넌트 레벨로 추상화하여 사용할 수 있으며, props를 활용한 조건부 스타일링이 가능하다는 장점이 있습니다.

## Feature

### /intro

('http://localhost:3000/'에서 'http://localhost:3000/intro'로 리다이렉트됩니다.)

#### 필수 구현 사항

- 좌측 이미지, 지표 문구, 수상 내역 순으로 100ms의 간격으로 애니메이션 효과와 함께 나타납니다.
- 지표는 2초 동안 0부터 증가하며, 점차 증가 속도가 느려집니다.

#### 그 외 구현 사항

- gnb가 스크롤에 따라 UI가 변화합니다.
- 모든 애니메이션 효과는 viewport에 등장했을 때 trigger되어 나타납니다.
