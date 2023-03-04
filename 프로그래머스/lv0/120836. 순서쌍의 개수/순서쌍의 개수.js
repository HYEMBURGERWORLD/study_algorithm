function solution(n) {
    let count = 0;
    
    for(let i = 1; i < Math.sqrt(n); i++) {
        if(n % i === 0) {
            count+=2;
        }
    }
    
    Number.isInteger(Math.sqrt(n)) ? count++ : count;
    
    return count;
}