function solution(str1, str2) {
    let answer = str1.includes(str2);
    if(answer===true) {
        answer = 1;
    } else answer = 2;
    return answer;
}