function solution(num) {
    let count = 0;
    while (num !== 1) {
        if(num % 2 === 0) {
            num /= 2;
            count++;
        } else if(num % 2 !== 0) {
            num = num*3+1;
            count++;
        }
    }
    return count < 500 ? count : -1;
}