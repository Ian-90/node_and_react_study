# [algorithm] 2. 같은 숫자는 싫어
## 내가 작성한 코드

``` javascript
const solution = (seoul) => {
    let answer = '';
    const x = seoul.indexOf('Kim');
    answer = '김서방은 ' + x  + '에 있다';
    return answer;
}
```
> 배열의 값을 인자로 받으면 인덱스를 반환하는 <code>indexOf()</code>를 사용.