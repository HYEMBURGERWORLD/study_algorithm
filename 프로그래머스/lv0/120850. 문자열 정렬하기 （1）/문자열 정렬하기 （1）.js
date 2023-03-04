function solution(my_string) {
    var answer = [];
    
    const reg = /[^0-9]/g;
    const reg_str = my_string.replace(reg, "");
    
    for(let i = 0; i < reg_str.length; i++) {
        answer.push(parseInt(reg_str[i]));
    }
    
    return answer.sort((a, b) => a-b);
}