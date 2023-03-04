function solution(before, after) {
    let answer = 0;
    
    let before_arr = before.split("").sort().join(""); 
    let after_arr = after.split("").sort().join("");
    
    if(before_arr === after_arr) {answer=1;}
    
    
    return answer;
}