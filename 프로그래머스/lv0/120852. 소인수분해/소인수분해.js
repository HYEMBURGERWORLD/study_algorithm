function solution(n) {
    let answer = [];
    let i = 2;
    while(n !== 1) {
        if(n%i === 0) {
            answer.push(i);
            n /= i;
            i = 2;
        }
        else i++;
    }
    return Array.from(new Set(answer));
}