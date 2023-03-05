function solution(numer1, denom1, numer2, denom2) {
    let answer = [];
    
    let top = 0;
    let bottom = 0;
    
    top = numer1 * denom2 + numer2 * denom1;
    bottom = denom1 * denom2;
        
    let maximum = 1
    for(let i = 1 ; i <= top ; i ++) {
        if(top%i === 0 && bottom%i === 0) {
            maximum = i;
        }
    }
    answer.push(top/maximum, bottom/maximum);
    return answer;
}