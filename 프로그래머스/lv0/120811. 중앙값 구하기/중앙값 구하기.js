function solution(array) {
    var answer = 0;
    
    const arr = array.sort((a,b) => a-b);
    answer = array[parseInt(arr.length/2)];
    
    return answer;
}