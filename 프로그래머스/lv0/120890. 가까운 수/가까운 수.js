function solution(array, n) {
    
    const answer = array.filter(item => Math.abs(item-n) === Math.min(...array.map(item => Math.abs(item - n)))).sort((a,b) => a-b)[0]; 
    
    return answer;
}