### 2. level1 - 서울에서 김서방 찾기



URL : [https://programmers.co.kr/learn/courses/30/lessons/12919?language=javascript](https://programmers.co.kr/learn/courses/30/lessons/12919?language=javascript)

Solution)

```js
function solution(seoul) {
    let ans;
    seoul.filter((name, idx) => {
       if(name == "Kim")  ans = `김서방은 ${idx}에 있다`;
    });
    return ans;
}
```

> 굳이 `filter()` 를 사용해보았다. 하지만, `filter()` 는 조건을 만족시키는 새로운 배열을 만드는 것이 목적이기 때문에, 적절한 선택은 아니었다고 생각한다.

<br>

다른사람 소스 1-1.

```js
function findKim(seoul){
  var idx = seoul.indexOf('Kim');
  return "김서방은 " + idx + "에 있다";
}
```

> `Array.prototype.indexOf()` 의 활용.
>
> 구문 : `arr.indexOf(searchElement[, fromIndex])`
>
> `searchElement` : 배열에서 찾을 요소.
>
> `fromIndex` (Optional) : 검색을 시작할 색인. 인덱스가 배열의 길이보다 크거나 같은 경우 -1이 반환되므로 배열이 검색되지 않는다.. 제공된 색인 값이 음수이면 배열 끝에서부터의 오프셋 값으로 사용된다. 
>
> 참고 : 제공된 색인이 음수이면 배열은 여전히 앞에서 뒤로 검색된다. 계산 된 인덱스가 0보다 작 으면 전체 배열이 검색된다. 기본값 : 0 (전체 배열 검색).
>
> 리턴 : 배열 내의 요소의 최초의 인덱스. 발견되지 않으면 -1.

<br>

Ex)

```js
var array = [2, 9, 9];
array.indexOf(2);     // 0
array.indexOf(7);     // -1
array.indexOf(9, 2);  // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0
```

<br>

Ex2) 요소의 모든 항목 찾기

```js
var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]
```

<br>

Reference : [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

