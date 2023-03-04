function solution(num, k) {
    let answer = 0;
    
    let arr = num.toString().split("");

    answer = arr.indexOf(k.toString()) + 1;
    if(arr.indexOf(k.toString())=== -1) {
        answer = -1;
    }
    
    return answer;
}