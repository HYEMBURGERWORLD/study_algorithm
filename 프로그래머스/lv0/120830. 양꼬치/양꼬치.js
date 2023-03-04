function solution(n, k) {
    let answer = 0;
    
    let meat = 12000 * n;
    let drink = 2000 * k;
    
    answer = meat + drink;
    
    if(n / 10 != false) {
        let free = Math.floor(n/10) * 2000;
        answer -= free;
    }
    return answer;
}