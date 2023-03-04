function solution(my_string, n) {
    var answer = '';
    for (let i = 0; i < my_string.length; i++) {
        let str = my_string[i].repeat(n);
        answer += str;
    }
    return answer;
}