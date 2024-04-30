# NODE-MOCK-SERVER

## 📢 Start

```bash
node index.js
```

<br />

## 📢 How to use

### 1. router.js 파일에 endpoint 설정

### 2. 지정된 endpoint에서 실행될 비즈니스 로직을 service 파일에 지정

- router.js 함수에 바로 기재해도 무방하나, 관리 용이성으로 레이어 분리를 권장함

### 3. 외부 통신이 필요한 경우 mockServiceExternal.js 파일 참고하여 axios 호출 수정 후 사용

### 4. express 서버 관련 설정은 index.js 참고

- 현재 설정으로 header 정보에 "x-delay"에 ms 정보를 넣게 되면 지정된 시간만큼 지연 응답을 받을 수 있음.

<br />

## 📢 Modual 선언 및 사용

> ◾ export로 반환이 선언된 js파일들을 require 구문을 이용하여 객체를 호출 <br />
> ◾ java class를 import 하는 것과 유사함 <br />
> ◾ class뿐만 아니라 function도 export 가능

예시)

```js
const DateUtils = require("../utils/DateUtils");

const example = () => {
  const date = DateUtils.formatDate(new Date(), "yyyymmdd");
};
```

<br />

## 📢 JSDoc (javascript document) 생성

> function, class 등에 JSDoc 문법으로 주석을 기재하여 <br />
> 해당 내용을 기반으로 Document 생성

### ◼ jsdoc 패키지 설치 (global)

```bash
npm install -g jsdoc

jsdoc -c jsdoc.config.json .
```

### ◼ jsdoc 패키지 설치 (project)

```bash
npm install jsdoc

./node_modules/.bin/jsdoc -c jsdoc.config.json .
```
