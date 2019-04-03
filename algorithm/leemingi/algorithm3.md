# algorithm
### 가운데 글자 가져오기

1. Solution 1

```js
const solution = (s) =>{
    let answer1;
    let answer2;
    let len = s.length;
    if(len % 2 == 1){
        answer = s[parseInt(len/2)];
        return answer;
    }else{
        answer1 = s[len/2-1];
        answer2 = s[len/2];
        return `${answer1}${answer2}`
    }
}
```

>입력 받은 문자열의 길이를 이용하여 문제 접근<br>
 if문으로 문자열의 길이가 짝수인지, 홀수인지 구분<br>
 홀수일 경우 문자열 길이에 2를 나눈값을 인덱스로 두면 되고,<br>
 짝수일 경우 길이에 2를 나눈값과 나눈값에 -1을 한 값을 인덱스로 두면 된다
 
 2. Solution 2
 ```js
 const solution = (x) => {
     let len = x.length;
     if(len % 2 == 1){
         return x[parseInt(len/2)];
     }else{
         return x.substr(len/2-1,2);
     }
 }
 ```
 >위와 같은 코드이지만 substr() 함수를 이용하여 문자열을 추출

 3. Solution 3

 ```js
 const solution = (x) => {
     return x.length % 2 ? x[parseInt(x.length/2)] :x.substr(x.length/2-1,2) 
 }
 ```
 >3항 연산자를 사용하여 보다 짧게 코드를 작성