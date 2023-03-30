function solution(s) {
    let answer = [0, 0];
    
    // s 가 1이면 반복문 멈춤
    while(s !== "1") {
        // 반복 한 번 = 이진변환 한 번
        answer[0]++;
        // 제거할 0의 개수
        answer[1] += (s.match(/0/g)||"").length;
        // filter로 0 제거
        s = [...s].filter(v => v !== "0").join("");
        // 제거한 상태의 length를 이진법으로 변환
        s = s.length.toString(2);
    }
    
    return answer;
}