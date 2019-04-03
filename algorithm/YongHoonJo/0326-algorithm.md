### 2. level1 - 가운데 글자 가져오기



URL : [https://programmers.co.kr/learn/courses/30/lessons/12903?language=javascript](https://programmers.co.kr/learn/courses/30/lessons/12903?language=javascript)

Solution)

```js
function solution(s) {
    const len = s.length;
    const idx = parseInt(len/2);
    return len&1 ? `${s[idx]}` : `${s[idx-1]}${s[idx]}`;
}
```

> 몫을 만들기 위해 `parseInt()` 를 사용하였다. 

<br>

