function solution(my_string) {
    const reg = /[^0-9]/g;
    const re_str = my_string.replace(reg, "");
    
    let answer = 0;
    for(let i= 0; i<re_str.length; i++) {
        answer += parseInt(re_str[i]);
    }
    
    return answer;
}