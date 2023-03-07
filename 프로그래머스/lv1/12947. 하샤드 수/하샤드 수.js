function solution(x) {
    answer = (x+"").split("").map(a => parseInt(a)).reduce((a,b) => a+b);
    return x % answer === 0 ? true : false;
}