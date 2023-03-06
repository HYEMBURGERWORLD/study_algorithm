function solution(n) {
    return n.toString().split("").map(a => Number(a)).reverse();
}