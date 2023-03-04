function solution(array) {
    const answer = [];
    const max = Math.max(...array);
    answer.push(max);
    answer.push(array.indexOf(max));
    return answer;   
}