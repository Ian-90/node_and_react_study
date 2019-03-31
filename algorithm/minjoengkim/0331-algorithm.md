# [algorithm] 3. 가운데 글자 가져오기
## 내가 작성한 코드

#### 문제설명
> 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

#### 제한사항
* s는 길이가 1이상 100이하인 스트링.

#### 입출력 예
s | return 
---- | ----
"abcde" | "c"
"qwer" | "we" 

``` javascript
const solution = (s) => {
    let answer;
    const len = s.length;
    const halfLen = Math.floor(len/2);
    
    if (len % 2) {
        answer = s[halfLen];
    } else {
        answer =  s[halfLen - 1] + s[halfLen];
    }
    return answer;
}
```
> 문자열의 길이를 반환하는 [JavaScript / Object / String.length] 함수를 이용 <br>
문자열의 길이가 짝수 / 홀수 인 경우를 체크<br>
<br>
홀수인 경우, halfLen에 저장한 가운데 인덱스의 값을 출력<br>
짝수인 경우, halfLen-1 과 halfLen에 저장된 가운데 기준 양쪽 값을 출력
