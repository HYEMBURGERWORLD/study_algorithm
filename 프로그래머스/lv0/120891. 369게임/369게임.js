function solution(order) {
    let answer = 0;
    
    const arr = order.toString().split("").map((item) => parseInt(item));
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === 3 | arr[i] === 6 | arr[i] === 9) {
            answer++;
        }
    }
    return answer;
}