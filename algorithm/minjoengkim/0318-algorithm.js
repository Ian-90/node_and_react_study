const solution = (arr) => {
    let answer = [];
    let length = arr.length;
    let i, k;
    
    for (i=0 ; i<length ; i++){
        if (i === 0){
            answer.push(arr[i]);
            k = arr[i];
        } else {
            if (k === arr[i]){
                continue;                
            } else {
                answer.push(arr[i]);
                k = arr[i];
            }
        }
    }
    
    return answer;
}