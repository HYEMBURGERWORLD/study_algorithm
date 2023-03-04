function solution(n) {
    let answer = 1;
    let pizza = 7;
    while(Math.floor(pizza/n) < 1) {
        pizza += 7;
        answer++;
    }
    return answer;
}