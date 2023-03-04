function solution(i, j, k) {
    let answer = 0;
    for (i; i <= j; i++) {
        if(String(i).length > 1) {
            String(i).split("").forEach(item => item === String(k) ? answer++ : 0);
        } else {
            i === k ? answer++ : 0;
        }
    }
    return answer;
}