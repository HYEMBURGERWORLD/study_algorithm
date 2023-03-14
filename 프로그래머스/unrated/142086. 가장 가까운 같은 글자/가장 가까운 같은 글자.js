function solution(s) {
    let answer = [];
    
    // map 객체 생성
    const map = new Map();
    
    [...s].map((v, i) => {
        // 1. map has 메서드 > 존재여부ox
        // 없을 경우 -1 을 넣는다.
        if (!map.has(v)) answer.push(-1);
        // 2. map get 메서드 > 키에 맞는 값 가져옴
        else answer.push(i - map.get(v));
        // 업데이트
        map.set(v, i);
    });
    
    return answer;
}