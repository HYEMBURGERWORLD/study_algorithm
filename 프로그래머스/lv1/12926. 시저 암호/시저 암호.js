function solution(s, n) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let answer = "";
    let arr = s.split("");
    let num = 0;
    
    arr.forEach(function(item) {
        
        // 1. 공백
        if(item === " ") {
            answer += " ";
            return;
        }
        
        // 2. 원래 index에서 n만큼 이동
        num = alphabet.indexOf(item.toLowerCase()) + n;
        
        // 2-2. 이동한 index가 25를 넘어갈 경우 0부터 시작
        if(num > 25) {
            num = (num - 26);
        } 
        
        // 3. 대문자일경우 대문자로, 소문자일경우 소문자로 
        answer += /[A-Z]/.exec(item) ? alphabet[num].toUpperCase() : alphabet[num];
        
    })
    
    return answer;
}