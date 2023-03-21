function solution(k, m, score) {
    let answer = 0; // 값을 모두 더할 변수
    score.sort((a,b)=> b-a); // 큰 수부터 정렬
    
    for(let i = 0; i < score.length; i+=m) {
        // m개씩 자르고, 자른 배열의 length 가 더 작을 경우 그 배열은 버린다.
        let arr = score.slice(i, i+m);
        if (arr.length === m) {
            answer += Math.min(...arr) * m;
        };
    }
    
    return answer;
}