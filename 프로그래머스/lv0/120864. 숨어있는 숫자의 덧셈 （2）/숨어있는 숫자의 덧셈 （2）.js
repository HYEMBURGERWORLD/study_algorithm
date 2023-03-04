function solution(my_string) {
    let answer = 0;
    if(my_string.match(/\d+/g) === null) { return 0 }
    answer = my_string.match(/\d+/g).map((item) => parseInt(item)).reduce((a,c) => a+c, 0);
    return answer;
}