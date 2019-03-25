## 두번째 알고리즘 서울에서 김서방 찾기

```js
const solution = (seoul) => {
  const x = seoul.indexOf('Kim');
  return `김서방은 ${x}에 있다`;
}
```

> **indexOf()** 메서드는 호출한 String 객체에서 주어진 값과 일치하는 첫 번째 인덱스를 반환합니다. 일치하는 값이 없으면 -1을 반환합니다. 