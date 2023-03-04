function solution(num, total) {
    let answer = Math.ceil((total/num) - (num/2));
    return Array.from({length: num}, (v, i) => i+answer)
}