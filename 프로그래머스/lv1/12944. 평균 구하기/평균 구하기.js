function solution(arr) {
    let answer = 0;
    arr.forEach(a => answer += a);
    return answer / arr.length;
}