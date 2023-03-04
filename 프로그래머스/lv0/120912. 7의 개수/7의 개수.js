function solution(array) {
    var answer = [...array.toString()].filter((item)=>item==="7").length;
    return answer;
}