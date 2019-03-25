// # 서울에서 김서방 찾기

// ## 문제 설명
// String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, 
// 김서방은 x에 있다는 String을 반환하는 함수, solution을 완성하세요. 
// seoul에 Kim은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

// ## 제한사항
// * seoul은 길이 1 이상, 1000 이하인 배열입니다.
// * seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
// * "Kim"은 반드시 seoul 안에 포함되어 있습니다.

// ## 입출력 예
// seoul           |  return
// --------------- | ---------------
// ["Jane", "Kim"] | "김서방은 1에 잇다"

// ## 답안 형식

const solution = (seoul) => {
    // 배열 길이
    var len = seoul.length
    // 배열 길이가 0보다 크로 1000이하
    if (len < 1 || len > 1000) {
        return "좀 제대로 된 input을 넣어주세요. 부탁이에요."
    }

    for (var i = 0; i < len; i++) {
        // nameL = name length
        let nL = seoul[i].length 
        if (nL >=1 && nL < 20 ) {
            if (seoul[i]==="Kim") {
                return "김서방은 " + i + "에 잇다"
            }
        } else {
            return "제대로 된 이름 주시는게 그리 힘든가요? 네 그럴 수 있죠.."
        }
    }

    return "김서방이 없다네!"
}

seouls = ["yonghunNim", "yohanNim","","jiyeonNim","minjeongNim","mingiNim","Kim"];
console.log(solution(seouls));