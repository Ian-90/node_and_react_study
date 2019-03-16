### 1. level1 - 같은 숫자는 싫어



URL : [https://programmers.co.kr/learn/courses/30/lessons/12906?language=javascript](https://programmers.co.kr/learn/courses/30/lessons/12906?language=javascript)



Solution)

```js
function solution(arr)
{
    const ans= [];
    let idx=0;
    ans.push(arr[0]);
    for(let i=1; i<arr.length; i++) {
        if(ans[idx] !== arr[i]) {
            ans.push(arr[i]);
            idx++;
        }
    }

    return ans;
}
```

> C++ 로 풀듯이 풀었다...

<br>

다른사람 소스 1-1.

```js
function solution(arr)
{
    return arr.filter((val,index) => val != arr[index+1]);
}
```

> `val` 은 배열의 현재 요소가 담긴다. `index` 에는 현재요소의 인덱스가 담긴다.
>
> 그리고 `arr.filter()` 는 콜백함수를 만족하는 요소들로 이루어진 새로운 배열이 리턴된다. 

<br>

다른사람 소스 1-2.

```
function solution(arr)
{
   return arr.filter((el, idx, now)=>{
       if (now[idx-1] == el) {
           return false;
       } else {
           return true;
       }
   });
}
```

> `now` 는  `filter()` 를 호출한 배열이 된다. 

<br>

Reference : [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

<br>

다른사람 소스 2.

```js
function solution(arr)
{
    return arr.reduce(function(a,b){
        if(a.length==0 || (a.length>0 && a[a.length-1]!=b)){a.push(b);}
        return a;
    },[]);
}
```

> `reduce()` 에서 콜백함수는 네개의 인자를 갖는데, `acc` (누적 값), `cur` (현재 값), `idx` (현재 인덱스), `src` (reduce 를 호출한 배열) 순으로 매개변수를 받는다. 그리고 최종적으로는 `acc` 가 리턴된다. 그리고 위의 코드에서 두번째 파라미터로 전달된  `[]` 가 초기값이 된다. (optional)
>
> `[]` 는 initialValue 이며, `acc` 의 경우 콜백의 반환값을 누적한다. 콜백의 이전 반환값 또는, 콜백의 첫 번째 호출이면서 `initialValue`를 제공한 경우에는 `initialValue`의 값이 된다. 

<br>

Reference : [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

<br>

다른사람 소스 3-1.

```js
function solution(arr)
{
    let result = [];
    arr.forEach((val,idx) => {
        if(arr[idx] !== arr[idx+1])result.push(val);
    });
    return result
}
```

> `arr.forEach()` 는 배열의 각 요소에 대해 콜백함수가 실행이 된다. 
>
> 콜백함수의 매개변수로는 `currentValue` 처리할 현재 요소, `index(Optional)` 처리할 현재 요소의 인덱스, `array(Optional)`  forEach()를 호출한 배열.`thisArg(Optional)` callback을 실행할 때 `this`로 사용할 값을 전달한다. 

<br>

다른사람 소스 3-2.

```js
function solution(arr)
{
    var newArr = [];
    var int;
    arr.forEach(function (e) {
        if (int != e) newArr.push(e);
        int = e;
    })
    return newArr;
}
```

<br>

