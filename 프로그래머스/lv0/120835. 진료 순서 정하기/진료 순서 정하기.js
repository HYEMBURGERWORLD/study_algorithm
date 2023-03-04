function solution(emergency) {
    const emer_sort = emergency.slice().sort((a,b)=>b-a);
    const answer = emergency.map(item => emer_sort.indexOf(item)+1);
    
    return answer;
}