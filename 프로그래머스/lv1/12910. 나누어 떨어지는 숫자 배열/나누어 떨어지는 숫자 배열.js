function solution(arr, divisor) {
    if(arr.filter(a => a % divisor === 0).length !== 0) {
        return arr.filter(a => a % divisor === 0).sort((a,b) => a-b);
    } 
    return [-1];
}