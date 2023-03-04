function solution(my_str, n) {
    const reg = new RegExp("(.{"+n+"})", "g");
    let answer = my_str.replace(reg,"$1#").split("#");
    
    return answer.filter(a => a !== "");
}